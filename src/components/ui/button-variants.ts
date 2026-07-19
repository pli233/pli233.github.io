import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold outline-none transition-[transform,background-color,border-color,color,box-shadow] duration-150 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90",
        outline:
          "border border-border bg-background/80 text-foreground shadow-sm hover:border-primary/25 hover:bg-muted",
        secondary: "border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "border border-transparent text-foreground hover:bg-muted",
        destructive: "border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "h-auto rounded-none border-0 p-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        xs: "h-7 rounded-lg px-2.5 text-xs",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 px-5 text-sm",
        icon: "h-10 w-10 p-0",
        "icon-xs": "h-7 w-7 rounded-lg p-0",
        "icon-sm": "h-9 w-9 rounded-lg p-0",
        "icon-lg": "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
