"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, CalendarClock, Mail, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BookCallButton } from "@/components/BookCallButton";
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
    <section id="contact" className="relative section-spacing overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <GlowBackdrop />

      <div className="container-page flex flex-col items-center gap-12">
        <Reveal className="flex w-full flex-col items-center">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Tell us what your business needs."
            description="Book a quick call or send a message — either way, we reply within one working day."
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="card-glow is-active w-full max-w-5xl overflow-hidden rounded-lg border border-charcoal-800 bg-charcoal-900/70 backdrop-blur-md"
        >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <aside className="flex flex-col gap-8 border-b border-charcoal-800 bg-charcoal-900/60 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-copper-400/10 px-3 py-1 font-mono text-caption uppercase tracking-wide text-copper-400">
                <CalendarClock aria-hidden="true" className="h-3.5 w-3.5" />
                Fastest option
              </span>
              <h3 className="text-h3-mobile md:text-h3 text-paper-50">Book a free 15-minute call</h3>
              <p className="text-body text-ash-400">
                Pick a time that suits you. We&apos;ll listen, ask a few questions, and tell you
                honestly what would help your business most.
              </p>
            </div>

            <BookCallButton className="w-full min-h-[48px] sm:w-auto">Choose a time</BookCallButton>

            <ol className="flex flex-col gap-4 border-t border-charcoal-800 pt-6">
              {[
                { icon: Clock, text: "Pick a slot — takes 30 seconds" },
                { icon: Mail, text: "Get a calendar invite with a video link" },
                { icon: CheckCircle2, text: "Leave the call with a clear next step" },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.text} className="flex items-start gap-3 text-[15px] text-paper-50/90">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-charcoal-800 bg-charcoal-950 font-mono text-[11px] text-copper-400">
                      {index + 1}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-ash-400" />
                      {step.text}
                    </span>
                  </li>
                );
              })}
            </ol>
          </aside>

          <div className="p-6 md:p-10">
            <h3 className="mb-6 text-h3-mobile md:text-h3 text-paper-50">Or send us a message</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="grid w-full grid-cols-1 gap-5 text-left md:grid-cols-2"
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
            <Button type="submit" disabled={status === "loading"} className="min-h-[48px] w-full sm:w-auto">
              {status === "loading" ? (
                <>
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </Button>
            <a href={`mailto:${SITE.email}`} className="text-body text-ash-400 underline-offset-4 hover:text-copper-400 hover:underline">
              or email {SITE.email}
            </a>
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
        </div>
        </Reveal>
      </div>
    </section>
  );
}
