"use client";

import PlausibleProvider from "next-plausible";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProvider domain="darkmode.tax">{children}</PlausibleProvider>
  );
}
