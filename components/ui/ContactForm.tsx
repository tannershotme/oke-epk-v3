"use client";

import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { BOOKING_EMAIL } from "@/data/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          eventType: "",
          message: "",
        });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-2xl font-bold text-white mb-2">
          Message sent.
        </div>
        <p className="text-zinc-400">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-indigo-500/50 focus:bg-white/[0.08] focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={formData.organization}
          onChange={handleChange}
          className={inputClasses}
        />
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="" disabled>
            Event format
          </option>
          <option value="keynote">Keynote</option>
          <option value="fireside">Fireside Chat</option>
          <option value="workshop">Workshop</option>
          <option value="other">Other</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your event, audience, and goals..."
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className={inputClasses + " resize-none"}
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <PrimaryButton type="submit" className={formState === "submitting" ? "opacity-70 pointer-events-none" : ""}>
          {formState === "submitting" ? "Sending..." : "Check availability"}
        </PrimaryButton>
        <span className="text-zinc-500 text-sm">
          Prefer email?{" "}
          <a
            href={`mailto:${BOOKING_EMAIL}`}
            className="text-zinc-400 underline underline-offset-4 hover:text-white transition-colors"
          >
            {BOOKING_EMAIL}
          </a>
        </span>
      </div>
      {formState === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
