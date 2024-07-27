import { cn } from "@/lib/export const copyText = async (text: string, message: string = "Copied") => {   await navigator.clipboard.writeText(text);   toast.success(message); };"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
