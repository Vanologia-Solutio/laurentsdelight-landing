/** A paragraph, or a bulleted list. */
export type LegalBlock = string | { list: string[] };

export type LegalSection = {
  /** Anchor id, also used by the table of contents. */
  id: string;
  heading: string;
  body: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  /** Short description for search engines. */
  description: string;
  intro: string;
  sections: LegalSection[];
};

/** ISO date the legal documents were last updated. */
export const LEGAL_UPDATED = "2026-11-09";

/** Contact details referenced by both documents. */
export const LEGAL_EMAIL = "hello@laurentsdelight.com";
