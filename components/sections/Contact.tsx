"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { Button, ButtonLink } from "@/components/ui/Button";
import { FieldWrapper, Input, Textarea, Select } from "@/components/ui/Input";
import { contactFormSchema, budgetOptions, type ContactFormValues } from "@/lib/validators";
import { submitContactForm } from "@/lib/submitContactForm";
import { SITE } from "@/lib/constants";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      await submitContactForm(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative section-spacing">
      <GlowBackdrop />

      <div className="container-page flex flex-col items-center gap-10 text-center">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Tell us what the business needs."
          description="Fill this out, or skip straight to a call — either way, we reply within a day."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="grid w-full max-w-2xl grid-cols-1 gap-5 text-left md:grid-cols-2"
        >
          <FieldWrapper label="Name" htmlFor="name" error={errors.name?.message}>
            <Input id="name" autoComplete="name" {...register("name")} />
          </FieldWrapper>

          <FieldWrapper label="Email" htmlFor="email" error={errors.email?.message}>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
          </FieldWrapper>

          <FieldWrapper label="Company" htmlFor="company" error={errors.company?.message}>
            <Input id="company" autoComplete="organization" {...register("company")} />
          </FieldWrapper>

          <FieldWrapper label="Budget" htmlFor="budget" error={errors.budget?.message}>
            <Select id="budget" defaultValue="" {...register("budget")}>
              <option value="" disabled>
                Select a range
              </option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FieldWrapper>

          <div className="md:col-span-2">
            <FieldWrapper label="What do you need?" htmlFor="need" error={errors.need?.message}>
              <Textarea id="need" {...register("need")} />
            </FieldWrapper>
          </div>

          <div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </Button>

            <ButtonLink
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Or book a 15-min call &rarr;
            </ButtonLink>
          </div>

          <div className="md:col-span-2" role="status" aria-live="polite">
            {status === "success" && (
              <p className="flex items-center gap-2 text-body text-copper-400">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                Thanks — we got it and will reply within a day.
              </p>
            )}
            {status === "error" && (
              <p className="text-body text-copper-400">
                Couldn&apos;t send — check your connection and try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
