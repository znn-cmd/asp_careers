import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isError = false, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-3xl border border-brand-gold/20 bg-black/50 px-5 py-4 text-sm text-brand-smoke placeholder:text-brand-gray/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold focus-visible:ring-offset-1 focus-visible:ring-offset-brand-black disabled:cursor-not-allowed disabled:opacity-60",
          isError && "border-red-500/70",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

