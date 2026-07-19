import { CalendarDays, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Education } from "@/types/portfolio"

interface EducationCardProps {
  readonly education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="surface-card h-full py-0">
      <CardContent className="flex h-full flex-col gap-5 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="logo-tile">
            <img
              src={education.logo}
              alt=""
              width="56"
              height="56"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
          <Badge variant="secondary">{education.degree}</Badge>
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
            {education.school}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.program}</p>
        </div>
        <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {education.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {education.location}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
