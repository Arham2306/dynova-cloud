import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SERVICES_PAGE_DATA } from '../data/servicesData';
import ServiceDetailTemplate from '../components/ServiceDetail/ServiceDetailTemplate';
import SEO from '../components/SEO/SEO';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  if (!slug || !SERVICES_PAGE_DATA[slug]) {
    // If slug not found, redirect to home
    return <Navigate to="/" replace />;
  }

  const serviceData = SERVICES_PAGE_DATA[slug];

  return (
    <>
      <SEO
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
      />
      <main>
        <ServiceDetailTemplate data={serviceData} />
      </main>
    </>
  );
};

export default ServiceDetailPage;
