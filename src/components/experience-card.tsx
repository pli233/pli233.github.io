import { useState } from "react"
import { CalendarDays, ChevronDown, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import type { Experience } from "@/types/portfolio"

interface ExperienceCardProps {
  readonly experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="surface-card overflow-visible py-0">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CardHeader className="grid gap-5 p-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start sm:p-6">
          <div className="logo-tile">
            <img
              src={experience.logo}
              alt=""
              width="56"
              height="56"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {experience.company}
              </h3>
              <Badge variant={experience.badge === "Full-time" ? "default" : "secondary"}>
                {experience.badge}
              </Badge>
            </div>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {experience.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {experience.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {experience.location}
              </span>
            </div>
          </div>

          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="w-fit justify-self-start text-muted-foreground sm:justify-self-end"
              />
            }
          >
            {open ? "Less" : "Details"}
            <ChevronDown
              data-icon="inline-end"
              className={cn("transition-transform", open && "rotate-180")}
            />
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent className="collapsible-panel overflow-hidden">
          <CardContent className="border-t border-border px-5 pb-6 pt-5 sm:ml-[6.5rem] sm:px-6">
            <p className="text-sm font-medium leading-6 text-foreground">
              {experience.details.summary}
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {experience.details.bullets.map((bullet) => (
                <li key={bullet} className="grid grid-cols-[0.5rem_1fr] gap-2.5">
                  <span className="mt-[0.65rem] h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {experience.details.technologies.map((technology) => (
                <Badge key={technology} variant="outline">
                  {technology}
                </Badge>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}
