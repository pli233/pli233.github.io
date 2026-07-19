import { copyFile, mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const staticRoutes = ["resume"] as const

function emitStaticRouteEntries(routes: readonly string[]): Plugin {
  return {
    name: "emit-static-route-entries",
    apply: "build",
    enforce: "post",
    async writeBundle(options) {
      const outputDirectory = resolve(options.dir ?? "dist")
      const indexFile = resolve(outputDirectory, "index.html")

      await Promise.all(
        routes.map(async (route) => {
          const routeIndex = resolve(outputDirectory, route, "index.html")
          await mkdir(dirname(routeIndex), { recursive: true })
          await copyFile(indexFile, routeIndex)
        }),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    emitStaticRouteEntries(staticRoutes),
  ],
})
