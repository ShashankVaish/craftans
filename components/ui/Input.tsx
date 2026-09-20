import { forwardRef } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

const fieldClasses =
  "w-full rounded-sm border border-charcoal-800 bg-charcoal-900 px-4 py-3 text-body text-paper-50 placeholder:text-ash-400 transition-colors duration-150 focus:border-copper-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-400/40";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

export function FieldWrapper({ label, htmlFor, error, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-mono text-caption uppercase tracking-wide text-ash-400">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-caption text-copper-400">
          {error}
        </p>
      )}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => (
    <input ref={ref} className={`${fieldClasses} ${className}`} {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => (
  <textarea ref={ref} className={`${fieldClasses} min-h-[120px] resize-y ${className}`} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className = "", children, ...props }, ref) => (
  <select ref={ref} className={`${fieldClasses} ${className}`} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";
