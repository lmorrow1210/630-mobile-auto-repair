"use client";

import { useId, useState, type FormEvent } from "react";
import { business } from "@/data/business";
import { trackEvent, deviceCategory } from "@/lib/analytics";
import { smsHrefForClient } from "@/lib/sms";

type FormState = {
  name: string;
  phone: string;
  vehicle: string;
  problem: string;
  location: string;
  timing: string;
  /** honeypot — real users never fill this in */
  company: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  problem: "",
  location: "",
  timing: "",
  company: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

/**
 * There's no form backend/API for this project. Per the business owner's
 * direction, "submitting" composes the request into a pre-filled SMS to
 * 630 Mobile Auto Repair and opens the visitor's messaging app — nothing is
 * transmitted anywhere else, and nothing pretends to have "submitted" to a
 * server that doesn't exist.
 */
export function QuoteForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "opened" | "error">("idle");
  const [started, setStarted] = useState(false);
  const idPrefix = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (!started) {
      setStarted(true);
      trackEvent("quote_form_start", { device: deviceCategory() });
    }
  }

  function validate(v: FormState): Errors {
    const next: Errors = {};
    if (!v.name.trim()) next.name = "Enter your name.";
    if (!/^[\d\s().+-]{7,}$/.test(v.phone.trim())) next.phone = "Enter a valid mobile phone number.";
    if (!v.vehicle.trim()) next.vehicle = "Enter your vehicle's year, make, and model.";
    if (!v.problem.trim()) next.problem = "Briefly describe the problem.";
    if (!/^\d{5}$/.test(v.location.trim()) && v.location.trim().length < 3) {
      next.location = "Enter a ZIP code or service location.";
    }
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return; // prevent duplicate submissions

    if (values.company.trim()) {
      // Honeypot tripped — silently no-op rather than tipping off a bot.
      return;
    }

    const foundErrors = validate(values);
    setErrors(foundErrors);
    trackEvent("quote_form_submit", { device: deviceCategory() });

    if (Object.keys(foundErrors).length > 0) {
      trackEvent("quote_form_error", { device: deviceCategory() });
      return;
    }

    setStatus("submitting");

    try {
      const body = [
        `New quote request from ${business.name} website:`,
        `Name: ${values.name.trim()}`,
        `Phone: ${values.phone.trim()}`,
        `Vehicle: ${values.vehicle.trim()}`,
        `Problem: ${values.problem.trim()}`,
        `Location/ZIP: ${values.location.trim()}`,
        values.timing.trim() ? `Preferred timing: ${values.timing.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const href = smsHrefForClient(business.phoneE164, body);
      window.location.href = href;
      setStatus("opened");
      trackEvent("quote_form_success", { device: deviceCategory() });
    } catch {
      setStatus("error");
      trackEvent("quote_form_error", { device: deviceCategory() });
    }
  }

  const fieldId = (name: string) => `${idPrefix}-${name}`;

  return (
    <div className="rounded-xl border border-(--color-line) bg-white p-6 md:p-8">
      <h2 className="font-display text-2xl font-bold text-(--color-ink)">Request My Quote</h2>
      <p className="mt-2 text-sm text-(--color-ink-soft) leading-relaxed">
        We&rsquo;ll review your vehicle details and respond by phone or text. No obligation.
      </p>

      <form noValidate onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        {/* Honeypot — hidden from sighted and screen-reader users, bots still see it. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={fieldId("company")}>Company</label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>

        <Field
          id={fieldId("name")}
          label="Name"
          error={errors.name}
          input={
            <input
              id={fieldId("name")}
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${fieldId("name")}-error` : undefined}
              className={inputClass(!!errors.name)}
            />
          }
        />

        <Field
          id={fieldId("phone")}
          label="Mobile Phone Number"
          error={errors.phone}
          input={
            <input
              id={fieldId("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${fieldId("phone")}-error` : undefined}
              className={inputClass(!!errors.phone)}
            />
          }
        />

        <Field
          id={fieldId("vehicle")}
          label="Vehicle Year, Make & Model"
          error={errors.vehicle}
          input={
            <input
              id={fieldId("vehicle")}
              name="vehicle"
              type="text"
              placeholder="e.g. 2016 Honda Civic"
              autoComplete="off"
              value={values.vehicle}
              onChange={(e) => update("vehicle", e.target.value)}
              aria-invalid={!!errors.vehicle}
              aria-describedby={errors.vehicle ? `${fieldId("vehicle")}-error` : undefined}
              className={inputClass(!!errors.vehicle)}
            />
          }
        />

        <Field
          id={fieldId("problem")}
          label="Describe the Problem"
          error={errors.problem}
          input={
            <textarea
              id={fieldId("problem")}
              name="problem"
              rows={3}
              value={values.problem}
              onChange={(e) => update("problem", e.target.value)}
              aria-invalid={!!errors.problem}
              aria-describedby={errors.problem ? `${fieldId("problem")}-error` : undefined}
              className={inputClass(!!errors.problem)}
            />
          }
        />

        <Field
          id={fieldId("location")}
          label="ZIP Code or Service Location"
          error={errors.location}
          input={
            <input
              id={fieldId("location")}
              name="location"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              value={values.location}
              onChange={(e) => update("location", e.target.value)}
              aria-invalid={!!errors.location}
              aria-describedby={errors.location ? `${fieldId("location")}-error` : undefined}
              className={inputClass(!!errors.location)}
            />
          }
        />

        <Field
          id={fieldId("timing")}
          label="Preferred Timing (optional)"
          input={
            <input
              id={fieldId("timing")}
              name="timing"
              type="text"
              placeholder="e.g. this weekend, weekday evenings"
              value={values.timing}
              onChange={(e) => update("timing", e.target.value)}
              className={inputClass(false)}
            />
          }
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-(--color-accent) px-6 py-3 text-base font-semibold text-(--color-accent-contrast) transition-colors hover:bg-(--color-accent-dark) disabled:opacity-60"
        >
          {status === "submitting" ? "Opening Messages…" : "Request My Quote"}
        </button>

        <p aria-live="polite" className="text-sm">
          {status === "opened" && (
            <span className="text-(--color-focus)">
              Your messaging app should be opening with your details filled in — just hit send. If it
              didn&rsquo;t open, call or text us directly at {business.phoneDisplay}.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-700">
              Something went wrong opening your messaging app. Please call or text{" "}
              <a href={business.telHref} className="underline">
                {business.phoneDisplay}
              </a>{" "}
              instead.
            </span>
          )}
        </p>

        <p className="text-xs text-(--color-ink-soft) leading-relaxed">
          Submitting sends your details as a text message to {business.name}{" "}
          and permits a service-related phone or text reply. We won&rsquo;t enroll you in marketing
          texts.
        </p>
      </form>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `min-h-12 w-full rounded-md border bg-white px-3.5 py-2.5 text-base text-(--color-ink) outline-none transition-colors ${
    hasError ? "border-red-600" : "border-(--color-line) focus:border-(--color-ink)"
  }`;
}

function Field({
  id,
  label,
  error,
  input,
}: {
  id: string;
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-(--color-ink)">
        {label}
      </label>
      {input}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
