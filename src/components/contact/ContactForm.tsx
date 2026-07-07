"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import { buildWhatsappUrl } from "@/lib/site-config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [tour, setTour] = useState("");
  const [dates, setDates] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Hello Abado Pyramids & Sphinx Tours, my name is ${name || "..."}.`,
      tour && `I'm interested in: ${tour}.`,
      dates && `Preferred dates: ${dates}.`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);

    const url = buildWhatsappUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Your name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-2 w-full rounded-sm border border-limestone bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
          placeholder="e.g. Sarah Mitchell"
        />
      </div>

      <div>
        <label htmlFor="tour" className="block text-sm font-medium text-ink">
          Which tour are you interested in?
        </label>
        <input
          id="tour"
          type="text"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          className="mt-2 w-full rounded-sm border border-limestone bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
          placeholder="e.g. Pyramids of Giza & The Great Sphinx"
        />
      </div>

      <div>
        <label htmlFor="dates" className="block text-sm font-medium text-ink">
          Preferred dates
        </label>
        <input
          id="dates"
          type="text"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="mt-2 w-full rounded-sm border border-limestone bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
          placeholder="e.g. 12–15 August, 4 travelers"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-ink">
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="mt-2 w-full resize-none rounded-sm border border-limestone bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
          placeholder="Hotel name, accessibility needs, group size..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Continue on WhatsApp
      </Button>
      <p className="text-xs text-ink/50">
        This opens WhatsApp with your details pre-filled — nothing is sent until you press send there.
      </p>
    </form>
  );
}
