import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().min(1, "Enter your company or project name."),
  need: z.string().trim().min(10, "Tell us a bit more about what you need."),
  budget: z.string().trim().min(1, "Select a budget range."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const budgetOptions = [
  { value: "under-5k", label: "Under $5k" },
  { value: "5k-15k", label: "$5k – $15k" },
  { value: "15k-40k", label: "$15k – $40k" },
  { value: "40k-plus", label: "$40k+" },
  { value: "not-sure", label: "Not sure yet" },
];
