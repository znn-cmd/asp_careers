import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", isError = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-full border border-brand-gold/20 bg-black/50 px-5 text-sm text-brand-smoke placeholder:text-brand-gray/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold focus-visible:ring-offset-1 focus-visible:ring-offset-brand-black disabled:cursor-not-allowed disabled:opacity-60",
          isError && "border-red-500/70",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

