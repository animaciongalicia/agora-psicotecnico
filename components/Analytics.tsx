"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Carga Google Analytics 4 SOLO tras consentimiento de cookies.
 * El banner dispara `agora:consent-granted` al aceptar.
 * Además, si ya está aceptado en localStorage, se carga en el mount.
 */
export function Analytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    try {
      const stored = localStorage.getItem("agora-cookie-consent");
      if (stored && JSON.parse(stored).choice === "accept") {
        setReady(true);
      }
    } catch {
      /* noop */
    }
    const onGrant = () => setReady(true);
    window.addEventListener("agora:consent-granted", onGrant);
    return () => window.removeEventListener("agora:consent-granted", onGrant);
  }, []);

  if (!GA_ID || !ready) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
