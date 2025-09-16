import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ButtonLoading({
  className,
  type,
  text,
  loading,
  onClick = null,
  ...props
}) {
  return (
    <Button
      className={cn("", className)}
      type={type}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {loading && <Loader2Icon className="animate-spin" />}
      {text}
    </Button>
  );
}
