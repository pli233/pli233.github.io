import type { MouseEvent } from "react"
import { navigationItems } from "@/data/portfolio"
import { cn } from "@/lib/utils"
import type { NavigationItem } from "@/types/portfolio"

interface SectionRailProps {
  readonly activeSection: string | null
  readonly onNavigate: (
    event: MouseEvent<HTMLAnchorElement>,
    item: NavigationItem,
  ) => void
}

const railItems = navigationItems.filter((item) => item.id !== "overview")

export function SectionRail({ activeSection, onNavigate }: SectionRailProps) {
  return (
    <nav
      aria-label="Section shortcuts"
      className="pointer-events-auto fixed left-0 top-1/2 hidden -translate-y-1/2 xl:block"
    >
      <ul>
        {railItems.map((item) => {
          const isActive = activeSection === item.id

          return (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(event) => onNavigate(event, item)}
                aria-current={isActive ? "location" : undefined}
                aria-label={`Navigate to ${item.label}`}
                className="group relative flex h-9 w-28 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-0.5 w-3 origin-left rounded-full bg-border transition-[width,background-color] duration-200 ease-out motion-reduce:transition-none",
                    "group-hover:w-[0.9rem] group-hover:bg-foreground group-focus-visible:w-[0.9rem] group-focus-visible:bg-foreground",
                    isActive && "w-[0.9rem] bg-muted-foreground",
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none ml-2 -translate-x-1 whitespace-nowrap text-xs font-medium text-muted-foreground opacity-0 transition-[opacity,transform,color] duration-200 ease-out motion-reduce:transition-none",
                    "group-hover:translate-x-0 group-hover:text-foreground group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:text-foreground group-focus-visible:opacity-100",
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
