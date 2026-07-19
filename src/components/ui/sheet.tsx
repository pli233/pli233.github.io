import type { ComponentProps } from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function Sheet(props: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal(props: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/15 opacity-100 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
        className,
      )}
      {...props}
    />
  )
}

interface SheetContentProps extends SheetPrimitive.Popup.Props {
  readonly side?: "top" | "right" | "bottom" | "left"
  readonly showCloseButton?: boolean
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col bg-popover text-popover-foreground transition-[transform,opacity] duration-300 ease-out data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
          "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:data-[ending-style]:translate-x-full data-[side=right]:data-[starting-style]:translate-x-full",
          "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:data-[ending-style]:-translate-x-full data-[side=left]:data-[starting-style]:-translate-x-full",
          "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:data-[ending-style]:-translate-y-full data-[side=top]:data-[starting-style]:-translate-y-full",
          "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:data-[ending-style]:translate-y-full data-[side=bottom]:data-[starting-style]:translate-y-full",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <SheetPrimitive.Close
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close navigation"
                className="absolute right-4 top-4"
              />
            }
          >
            <X />
          </SheetPrimitive.Close>
        ) : null}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1 p-4", className)} {...props} />
}

function SheetFooter({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="sheet-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return <SheetPrimitive.Title className={cn("text-base font-semibold text-foreground", className)} {...props} />
}

function SheetDescription({ className, ...props }: SheetPrimitive.Description.Props) {
  return <SheetPrimitive.Description className={cn("text-sm text-muted-foreground", className)} {...props} />
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
}
