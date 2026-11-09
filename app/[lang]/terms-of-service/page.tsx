import type { Metadata } from "next";

import { LegalPage, legalMetadata } from "@/components/legal/legal-page";
import { getLocale } from "@/lib/i18n/get-dictionary";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import { termsOfService } from "@/lib/legal/terms-of-service";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return legalMetadata(termsOfService[locale], locale, "/terms-of-service");
}

export default async function TermsOfServicePage() {
  const locale = await getLocale();
  return (
    <LegalPage
      doc={termsOfService[locale]}
      related={{
        path: "/privacy-policy",
        title: privacyPolicy[locale].title,
      }}
    />
  );
}
