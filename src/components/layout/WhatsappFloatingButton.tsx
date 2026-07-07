"use client";

import { useEffect, useState } from "react";
import { buildWhatsappUrl } from "@/lib/site-config";

export default function WhatsappFloatingButton() {
  const [showLabel, setShowLabel] = useState(false);

  // Gently invite the tap once, a few seconds after the page settles.
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 2500);
    const hide = setTimeout(() => setShowLabel(false), 8000);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, []);

  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp to book a tour"
      onMouseEnter={() => setShowLabel(true)}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span
        className={`whitespace-nowrap rounded-full bg-nile-night px-4 py-2 font-body text-sm text-papyrus shadow-lg transition-all duration-300 ${
          showLabel
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        }`}
      >
        Book on WhatsApp
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl ring-4 ring-[#25D366]/25 transition-transform duration-200 hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.42.71 4.673 1.934 6.567L4 29l7.62-1.897a11.94 11.94 0 0 0 4.384.83h.005C22.63 27.933 28 22.556 28 15.929 28 9.302 22.63 3 16.004 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.334l-.35-.207-4.522 1.126 1.148-4.41-.228-.362A9.56 9.56 0 0 1 5.6 15.004C5.6 9.99 9.99 5.6 16.004 5.6c5.39 0 9.996 4.607 9.996 9.996 0 5.39-4.607 9.996-9.996 9.996v.008Zm5.478-7.44c-.3-.15-1.77-.874-2.045-.974-.274-.1-.474-.15-.673.15-.2.3-.773.973-.948 1.174-.174.2-.35.224-.648.075-.3-.15-1.264-.466-2.408-1.485-.89-.794-1.49-1.774-1.665-2.074-.174-.3-.02-.462.13-.612.134-.133.3-.35.448-.524.15-.174.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.673-1.62-.923-2.22-.243-.583-.49-.504-.673-.513-.174-.008-.374-.01-.573-.01-.2 0-.524.075-.798.374-.274.3-1.047 1.024-1.047 2.497s1.072 2.895 1.222 3.095c.15.2 2.11 3.22 5.112 4.514.714.308 1.27.492 1.704.63.716.228 1.368.196 1.883.119.574-.086 1.77-.724 2.02-1.423.25-.7.25-1.298.174-1.423-.075-.125-.274-.2-.573-.35Z" />
        </svg>
      </span>
    </a>
  );
}
