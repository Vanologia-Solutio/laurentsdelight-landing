import type { Metadata } from "next";

import { LegalPage, legalMetadata } from "@/components/legal/legal-page";
import { getLocale } from "@/lib/i18n/get-dictionary";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import { termsOfService } from "@/lib/legal/terms-of-service";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return legalMetadata(privacyPolicy[locale], locale, "/privacy-policy");
}

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  return (
    <LegalPage
      doc={privacyPolicy[locale]}
      related={{
        path: "/terms-of-service",
        title: termsOfService[locale].title,
      }}
    />
  );
}
