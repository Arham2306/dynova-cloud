// =============================================================================
// SEO Helper Library — Dynova Cloud
// Typed, parameterized functions for metadata generation and JSON-LD schemas.
// All data is passed in as arguments — nothing is hardcoded.
// =============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RouteMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

export interface GeneratedMetadata {
  title: string;
  description: string;
  canonical: string | undefined;
  og: {
    title: string;
    description: string;
    image: string | undefined;
  };
}

export interface OrganizationAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  email?: string;
  telephone?: string;
  description?: string;
  sameAs?: string[];
  address?: OrganizationAddress;
  foundingDate?: string;
}

export interface ServiceData {
  name: string;
  description: string;
  url?: string;
  category?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WebSiteData {
  name: string;
  url: string;
  description?: string;
  inLanguage?: string;
}

// ---------------------------------------------------------------------------
// JSON-LD Schema Types (output shapes)
// ---------------------------------------------------------------------------

export interface JsonLdBase {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// generateMetadata
// ---------------------------------------------------------------------------

/**
 * Generates page-level metadata from a route configuration.
 * Returns a structured object suitable for setting document.title,
 * meta description, canonical link, and OG properties.
 */
export function generateMetadata(config: RouteMetadata): GeneratedMetadata {
  return {
    title: config.title,
    description: config.description,
    canonical: config.canonicalPath,
    og: {
      title: config.title,
      description: config.description,
      image: config.ogImage,
    },
  };
}

// ---------------------------------------------------------------------------
// generateOrganizationSchema
// ---------------------------------------------------------------------------

/**
 * Generates a Schema.org Organization (or LocalBusiness) JSON-LD object.
 */
export function generateOrganizationSchema(data: OrganizationData): JsonLdBase {
  const schema: JsonLdBase = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
  };

  if (data.email) schema.email = data.email;
  if (data.telephone) schema.telephone = data.telephone;
  if (data.description) schema.description = data.description;
  if (data.foundingDate) schema.foundingDate = data.foundingDate;

  if (data.sameAs && data.sameAs.length > 0) {
    schema.sameAs = data.sameAs;
  }

  if (data.address) {
    schema.address = {
      '@type': 'PostalAddress',
      ...data.address,
    };
  }

  return schema;
}

// ---------------------------------------------------------------------------
// generateServicesSchema
// ---------------------------------------------------------------------------

/**
 * Generates an array of Schema.org Service JSON-LD objects.
 * Each service references the providing organization.
 */
export function generateServicesSchema(
  services: ServiceData[],
  provider: { name: string; url: string }
): JsonLdBase[] {
  return services.map((service) => {
    const schema: JsonLdBase = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: provider.name,
        url: provider.url,
      },
    };

    if (service.url) schema.url = service.url;
    if (service.category) schema.category = service.category;

    return schema;
  });
}

// ---------------------------------------------------------------------------
// generateFAQSchema
// ---------------------------------------------------------------------------

/**
 * Generates a Schema.org FAQPage JSON-LD object from an array of Q&A items.
 */
export function generateFAQSchema(items: FAQItem[]): JsonLdBase {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// generateWebSiteSchema
// ---------------------------------------------------------------------------

/**
 * Generates a Schema.org WebSite JSON-LD object for brand authority markup.
 */
export function generateWebSiteSchema(data: WebSiteData): JsonLdBase {
  const schema: JsonLdBase = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
  };

  if (data.description) schema.description = data.description;
  if (data.inLanguage) schema.inLanguage = data.inLanguage;

  return schema;
}
