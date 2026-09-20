import type { ContactFormValues } from "@/lib/validators";
import { SITE } from "@/lib/constants";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

/**
 * Posts to a Formspree-style endpoint when NEXT_PUBLIC_FORM_ENDPOINT is set
 * (architecture.md §1: no backend, so a third-party form endpoint receives
 * submissions). Falls back to a mailto link so the form still "delivers" in
 * environments where the endpoint hasn't been configured yet.
 */
export async function submitContactForm(values: ContactFormValues) {
  if (!FORM_ENDPOINT) {
    const body = `Name: ${values.name}\nCompany: ${values.company}\nBudget: ${values.budget}\n\n${values.need}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `New project enquiry — ${values.company}`
    )}&body=${encodeURIComponent(body)}`;
    return;
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }
}
