import {
  BrainCircuit,
  Braces,
  Database,
  Layers3,
  Palette,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { TechnologyGroup, TechnologyIcon } from "@/types/portfolio"

const technologyIcons: Record<TechnologyIcon, LucideIcon> = {
  braces: Braces,
  brain: BrainCircuit,
  database: Database,
  layers: Layers3,
  palette: Palette,
  workflow: Workflow,
}

interface TechnologyCardProps {
  readonly group: TechnologyGroup
}

export function TechnologyCard({ group }: TechnologyCardProps) {
  const Icon = technologyIcons[group.icon]

  return (
    <Card className="surface-card h-full py-0">
      <CardContent className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-semibold tracking-[-0.015em] text-foreground">{group.title}</h3>
            <p className="text-xs text-muted-foreground">{group.items.length} tools</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {group.items.map((item) => (
            <Badge key={item} variant="outline" className="bg-background/70">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
