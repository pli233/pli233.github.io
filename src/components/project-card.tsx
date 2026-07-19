import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/portfolio"

interface ProjectCardProps {
  readonly project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="surface-card project-card h-full gap-0 py-0">
      <div className={cn("project-image-frame", project.surface)}>
        <img
          src={project.image}
          alt={`${project.title} product preview`}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-full w-full transition-transform duration-500 ease-out group-hover/card:scale-[1.025]",
            project.imageTreatment === "contain" ? "object-contain p-8 sm:p-10" : "object-cover",
          )}
        />
      </div>
      <CardContent className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary" className="capitalize">
            {project.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{project.role}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-4 text-sm leading-6 text-foreground/80">{project.impact}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technology.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t border-border bg-muted/40 px-5 py-4 sm:px-6">
        <span className="text-xs font-medium text-muted-foreground">Selected work</span>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Visit
          <ArrowUpRight data-icon="inline-end" />
        </a>
      </CardFooter>
    </Card>
  )
}
