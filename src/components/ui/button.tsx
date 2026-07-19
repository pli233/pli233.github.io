import { Button as ButtonPrimitive } from "@base-ui/react/button"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button-variants"
import { cn } from "@/lib/utils"

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  render,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size }), className)}
      nativeButton={nativeButton ?? !render}
      render={render}
      {...props}
    />
  )
}

export { Button }
