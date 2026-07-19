import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring [&>svg]:h-3 [&>svg]:w-3",
  {
    variants: {
      variant: {
        default: "border-primary/15 bg-primary text-primary-foreground",
        secondary: "border-border/70 bg-secondary text-secondary-foreground",
        destructive: "border-destructive/15 bg-destructive/10 text-destructive",
        outline: "border-border bg-background/60 text-muted-foreground",
        ghost: "border-transparent text-muted-foreground hover:bg-muted",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      { className: cn(badgeVariants({ variant }), className) },
      props,
    ),
    render,
    state: { slot: "badge", variant },
  })
}

export { Badge }
