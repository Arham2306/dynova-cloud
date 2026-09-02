import { useEffect } from 'react';

// =============================================================================
// SEO Component — Dynova Cloud
// Dynamically syncs document <head> elements (title, meta description,
// canonical link) from props. Ready for OG/Twitter overrides in the future.
// =============================================================================

export interface SEOProps {
  /** Page title — sets document.title */
  title?: string;
  /** Meta description content */
  description?: string;
  /** Canonical URL (full absolute URL) */
  canonical?: string;
  /** Open Graph title override (defaults to title) */
  ogTitle?: string;
  /** Open Graph description override (defaults to description) */
  ogDescription?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Open Graph page URL */
  ogUrl?: string;
  /** Twitter card type */
  twitterCard?: 'summary' | 'summary_large_image';
}

/**
 * Upserts a <meta> tag in <head>. Creates it if missing, updates if present.
 */
function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

/**
 * Upserts a <link> tag in <head> by rel attribute.
 */
function upsertLink(rel: string, href: string): void {
  const selector = `link[rel="${rel}"]`;
  let element = document.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

/**
 * Headless SEO component that syncs document head metadata from props.
 * Renders nothing to the DOM — all work happens via side effects.
 */
export function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
}: SEOProps): null {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    if (description) {
      upsertMeta('name', 'description', description);
    }
  }, [description]);

  useEffect(() => {
    if (canonical) {
      upsertLink('canonical', canonical);
    }
  }, [canonical]);

  // Open Graph tags
  useEffect(() => {
    const ogTitleValue = ogTitle || title;
    if (ogTitleValue) {
      upsertMeta('property', 'og:title', ogTitleValue);
    }
  }, [ogTitle, title]);

  useEffect(() => {
    const ogDescValue = ogDescription || description;
    if (ogDescValue) {
      upsertMeta('property', 'og:description', ogDescValue);
    }
  }, [ogDescription, description]);

  useEffect(() => {
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage);
    }
  }, [ogImage]);

  useEffect(() => {
    if (ogUrl) {
      upsertMeta('property', 'og:url', ogUrl);
    }
  }, [ogUrl]);

  // Twitter Card tags
  useEffect(() => {
    if (twitterCard) {
      upsertMeta('name', 'twitter:card', twitterCard);
    }
  }, [twitterCard]);

  useEffect(() => {
    const twitterTitle = ogTitle || title;
    if (twitterTitle && twitterCard) {
      upsertMeta('name', 'twitter:title', twitterTitle);
    }
  }, [ogTitle, title, twitterCard]);

  useEffect(() => {
    const twitterDesc = ogDescription || description;
    if (twitterDesc && twitterCard) {
      upsertMeta('name', 'twitter:description', twitterDesc);
    }
  }, [ogDescription, description, twitterCard]);

  useEffect(() => {
    if (ogImage && twitterCard) {
      upsertMeta('name', 'twitter:image', ogImage);
    }
  }, [ogImage, twitterCard]);

  return null;
}

export default SEO;
