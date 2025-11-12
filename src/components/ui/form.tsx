import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import {
  Controller,
  type ControllerProps,
  FormProvider,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const Form = FormProvider;

const FormField = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>,
) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState, formState }) =>
        props.render({
          field,
          fieldState,
          formState,
        })
      }
    />
  );
};

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-brand-gray data-[error=true]:text-red-400",
      className,
    )}
    {...props}
  />
));
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => (
  <Slot
    ref={ref}
    className={cn("w-full data-[error=true]:border-red-500/70", className)}
    {...props}
  />
));
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-brand-gray/70", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const body = children ?? null;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      className={cn("text-xs font-medium text-red-400", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};

