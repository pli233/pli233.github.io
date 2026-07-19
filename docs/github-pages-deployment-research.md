# GitHub Pages 部署研究（2026-07-19）

## 结论

当前方案**能用，也确实已经使用了 GitHub Actions**，但不是这类 Vite 站点的最简、最小权限方案：

```text
peiyuan-portfolio/main
  -> GitHub Actions 构建 dist
  -> DEPLOY_TOKEN + peaceiris/actions-gh-pages
  -> pli233.github.io/gh-pages
  -> GitHub Pages 再发布该分支
```

主要代价是跨仓库写入必须保存一个长期凭据，并额外维护发布分支。GitHub 与 Vite 当前展示的标准路径是 `configure-pages` → `upload-pages-artifact` → `deploy-pages`；它直接部署 Actions artifact，不需要提交生成物分支。[GitHub custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) · [Vite static deploy](https://vite.dev/guide/static-deploy.html)

但官方 `actions/deploy-pages` 只能部署**当前 workflow 所在仓库**的 Pages：它没有 `external_repository` 输入，代码从 `GITHUB_REPOSITORY` 读取仓库，并向当前 `github.context.repo` 调用 Pages deployment API。[action.yml](https://github.com/actions/deploy-pages/blob/main/action.yml) · [context.js](https://github.com/actions/deploy-pages/blob/main/src/internal/context.js) · [api-client.js](https://github.com/actions/deploy-pages/blob/main/src/internal/api-client.js)

因此建议分两级：

1. **近期：保留两仓库，强化现有 workflow。** 改动小，不改变 `https://pli233.github.io/`。
2. **长期最佳：把站点源码和 workflow 放进 `pli233/pli233.github.io`，改用官方 artifact 部署。** GitHub 规定用户站点的源文件必须位于 `<owner>.github.io` 仓库；如果只给 `peiyuan-portfolio` 开 Pages，它会成为 `/peiyuan-portfolio/` 项目站点，而不是根域名。[Pages site types](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#types-of-github-pages-sites)

## 对当前配置的评价

| 项目 | 当前状态 | 判断 |
| --- | --- | --- |
| 自动触发 | `main` push | 合理；建议再加 `workflow_dispatch` 作为可审计的手动重部署入口。Vite 官方模板同时使用两者。[Vite template](https://vite.dev/guide/static-deploy.html#github-pages) |
| 安装与缓存 | `npm ci` + setup-node npm cache | 合理且可复现；lockfile 作为缓存键，不应缓存 `node_modules`。[setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| Node | Node 20 | 应升级。Node 20 已于 2026-04-30 EOL；2026-07 的 Active LTS 是 Node 24。[Node release schedule](https://github.com/nodejs/Release#release-schedule) |
| 发布动作 | `peaceiris/actions-gh-pages@v4` | 这是该 action 官方支持的 `external_repository` 用例，但属于第三方 action + 跨仓库凭据。[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages#deploy-to-external-repository-external_repository) |
| 凭据 | `secrets.DEPLOY_TOKEN` | 仓库无法判断它是 classic PAT、fine-grained PAT 还是权限范围。应确认并轮换为仅覆盖目标仓库的凭据。`GITHUB_TOKEN` 权限只限 workflow 仓库，不能代替它。[GITHUB_TOKEN scope](https://docs.github.com/en/actions/concepts/security/github_token) |
| 权限 | 未声明 `permissions` | 应显式设为 `contents: read`。GitHub 建议默认只读、逐 job 提升权限。[Secure use reference](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions#using-secrets) |
| 并发 | 未配置 | 应增加部署 concurrency，防止旧构建晚于新构建发布。GitHub 说明同组只允许一个运行任务；`cancel-in-progress: true` 还会取消正在运行的旧任务。[Concurrency](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs) |
| 环境 | 未配置 | 跨仓库方案可在源仓库使用 `production` environment、URL 与 environment secret，获得部署记录和保护规则；官方同仓库方案使用 `github-pages` environment。[Deployments](https://docs.github.com/en/actions/deployment/about-deployments/deploying-with-github-actions) |
| Action 版本 | major tag | GitHub 说明完整 commit SHA 是 action 唯一不可变引用；建议 SHA pin，并用 Dependabot/Renovate 更新。[Secure use reference](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions#using-third-party-actions) |
| 发布入口 | CI + 本地 `npm run deploy` | 两条路径容易漂移。建议删除 `predeploy`/`deploy` 与 `gh-pages` devDependency，用 `workflow_dispatch` 替代手动本地发布。此项是基于当前仓库的工程判断。 |

## 官方 artifact workflow 为什么更好

- GitHub 对自定义 Pages workflow 明确提供 `configure-pages`、`upload-pages-artifact`、`deploy-pages` 三个官方 action。[GitHub custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- `deploy-pages` 要求 `pages: write` 与 `id-token: write`，并推荐独立 deploy job、`github-pages` environment 和部署 URL。这让权限、OIDC 来源校验与部署历史都成为平台原生能力。[actions/deploy-pages](https://github.com/actions/deploy-pages#usage)
- `upload-pages-artifact` 会生成 Pages 所需 artifact；默认名称为 `github-pages`。artifact 是单个 gzip/tar、tar 小于 10 GB，且不能包含符号或硬链接。[GitHub custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages#configuring-the-upload-pages-artifact-action) · [actions/upload-pages-artifact](https://github.com/actions/upload-pages-artifact#artifact-validation)
- `configure-pages` 能读取站点的 `base_url`、`origin`、`host`、`base_path` 等元数据。[configure-pages/action.yml](https://github.com/actions/configure-pages/blob/main/action.yml)
- 不再需要 `DEPLOY_TOKEN`、第三方发布 action 或 `gh-pages` 生成物提交。后一句是基于上述架构差异的推论。

## 跨仓库限制与凭据选择

GitHub 明确说明 `GITHUB_TOKEN` 只可访问包含 workflow 的仓库；要修改仓库外资源，需要 PAT 或 GitHub App。[About authentication](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-to-the-api-with-a-personal-access-token) `peaceiris/actions-gh-pages` 也明确注明外部仓库不能使用 `GITHUB_TOKEN`，需 `personal_token` 或 deploy key。[External repository](https://github.com/peaceiris/actions-gh-pages#deploy-to-external-repository-external_repository)

若暂时保留两仓库：

- 简单方案：fine-grained PAT 只选择 `pli233/pli233.github.io`，只授予发布分支所需的 **Contents: write**，设置到期时间并定期轮换。fine-grained PAT 可以限制到单个仓库和具体权限。[Managing PATs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens)
- 更窄的 Git 凭据：目标仓库 write-enabled deploy key；它天然绑定一个仓库，但需要维护 SSH 私钥。[Deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys) · [peaceiris token options](https://github.com/peaceiris/actions-gh-pages#supported-tokens)
- 规模化方案：GitHub App installation token，短期有效且权限清晰，但对单个个人站点配置成本更高。GitHub 在内置 token 不够时建议 GitHub App 或 PAT。[Workflow authentication](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication#granting-additional-permissions)

`DEPLOY_TOKEN` 的名字不能证明权限是否最小；应在 GitHub 设置里实际核验。不要把 broad classic `repo` PAT 当默认选择。

## Vite 与 SPA 深链

当前 `vite.config.ts` 的 `base: "/"` 对 `https://pli233.github.io/` 用户站点是正确的。若改成 `https://pli233.github.io/peiyuan-portfolio/` 项目站点，才应设为 `"/peiyuan-portfolio/"`。[Vite base guidance](https://vite.dev/guide/static-deploy.html#github-pages)

项目使用 `BrowserRouter`，并已通过 `public/404.html` + `index.html` 内联脚本把 `/resume` 重新编码后交还给客户端路由。2026-07-19 的线上实测确认：直接请求 `https://pli233.github.io/resume` 的初始 HTTP 状态是 **404**，随后 `404.html` 脚本跳到 `/?/resume`，`index.html` 再恢复 `/resume`，所以启用 JavaScript 的浏览器最终能正常显示页面。这是“视觉可用，但初始响应仍是 404”，对不执行 JavaScript 的爬虫和 HTTP 状态监控并不理想。

GitHub Pages 对不存在路径只提供自定义 `404.html` 机制；官方 Pages actions 只是上传/部署 artifact，不会自动生成 SPA fallback。[GitHub custom 404](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) · [upload-pages-artifact](https://github.com/actions/upload-pages-artifact)

所以迁移到官方 Actions 时必须保留当前 404 workaround，或者另选：

- 预生成 `resume/index.html`，让直达请求返回真实 200；对仅两个路由的站点最利于爬虫。
- 换 `HashRouter`，部署最简单，但 URL 会带 `#`。

以上两项是架构选择，不是官方 Pages actions 自动提供的能力。

## 推荐执行顺序

### A. 近期强化当前两仓库方案

1. Node 20 → Node 24 LTS（或 `lts/*`）。
2. 增加 `workflow_dispatch`、`permissions: contents: read`、`concurrency`、`timeout-minutes`。
3. 给 deploy job 配 `production` environment 和 `url: https://pli233.github.io/`，将 token 改为 environment secret。
4. 在发布前执行 `npm run typecheck`、`npm run lint`、`npm run build`；构建失败即不发布。
5. 把 GitHub-owned actions 和 `peaceiris/actions-gh-pages` pin 到完整 SHA。
6. 核验 `DEPLOY_TOKEN`：优先单仓库 fine-grained PAT + Contents write + expiry，或 deploy key。
7. `actions/checkout` 使用 `persist-credentials: false`，因为发布使用另一份凭据。
8. 删除本地 `gh-pages` 发布脚本与依赖，以 `workflow_dispatch` 作为唯一手动入口。

对个人站点建议 `cancel-in-progress: true`：新提交应取代旧提交，Vite 官方模板也这样配置。[Vite workflow](https://vite.dev/guide/static-deploy.html#github-pages) 若组织要求每次发布完整留下结果，则用 `false`；无论哪种都应设置同一 concurrency group。

### B. 长期迁移到官方方案

将源码迁入 `pli233/pli233.github.io` 的默认分支，Pages Source 选择 **GitHub Actions**，然后采用：

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@<full-commit-sha>
      - uses: actions/setup-node@<full-commit-sha>
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm run build
      - uses: actions/upload-pages-artifact@<full-commit-sha>
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    timeout-minutes: 10
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/configure-pages@<full-commit-sha>
      - id: deployment
        uses: actions/deploy-pages@<full-commit-sha>
```

完整 SHA 应从各 action 的已验证 release 取得并交给更新机器人维护，不应手填未知 commit。Vite 的实时模板可作为当前版本基线。[Vite workflow](https://vite.dev/guide/static-deploy.html#github-pages)

## 最终建议

如果优先考虑**最小改动**，现在无需改仓库拓扑；先完成 A，现有部署就能达到可靠且较安全的水平。

如果优先考虑**长期最佳实践**，把源码合并进 `pli233/pli233.github.io` 并完成 B：这会去掉跨仓库 PAT、第三方部署 action、发布分支和重复手动脚本，是当前根域名约束下最干净的 GitHub Pages 架构。
