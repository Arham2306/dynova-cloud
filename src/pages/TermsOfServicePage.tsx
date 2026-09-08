import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO/SEO';

export const TermsOfServicePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-[#F5F7FA] font-sans relative overflow-x-hidden">
      <SEO
        title="Terms of Service | Dynova Cloud"
        description="These Terms of Service govern your access to and use of dynova.cloud and Dynova Cloud's services."
      />

      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,53,102,0.3)_0%,transparent_75%)]"
      />

      {/* Main Article Container */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-40 sm:pt-48 pb-28">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-[#FFC300] transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-white/10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-[#AAB4C3] m-0">
            Last Updated: September 2, 2026
          </p>
        </header>

        {/* Content Flow */}
        <div className="space-y-14 text-[15px] sm:text-base leading-relaxed text-[#CBD5E1]">
          {/* Intro */}
          <p className="text-base sm:text-lg text-[#F5F7FA]/90 leading-relaxed m-0">
            Welcome to{' '}
            <a
              href="https://dynova.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC300] hover:text-[#FFD60A] font-medium hover:underline transition-colors"
            >
              dynova.cloud
            </a>{' '}
            (the &ldquo;Site&rdquo;), operated by Dynova Cloud (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our Site, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, please do not use the Site.
          </p>

          {/* 1. Use of the Site */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              1. Use of the Site
            </h2>
            <p className="m-0 text-[#94A3B8]">
              You may use our Site only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="space-y-1.5 pl-1">
              {[
                'Use the Site in any way that violates applicable laws or regulations',
                'Attempt to gain unauthorized access to any part of the Site or its systems',
                "Interfere with or disrupt the Site's functionality or security",
                'Scrape, copy, or reproduce Site content without our written permission',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] mt-[7px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 2. Services Described on This Site */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              2. Services Described on This Site
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              Dynova Cloud provides digital growth services, including but not limited to search engine optimization (SEO), paid media management, Shopify development, and brand/web design. Descriptions of our services on this Site are for informational purposes and do not constitute a binding offer. All engagements are subject to a separate signed agreement or statement of work between Dynova Cloud and the client.
            </p>
          </section>

          {/* 3. Project Inquiries and Lead Forms */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              3. Project Inquiries and Lead Forms
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              Submitting an inquiry through our contact or project intake form does not create a client relationship or contractual obligation. A formal engagement begins only once both parties sign a separate services agreement or contract.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              4. Intellectual Property
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              All content on this Site, including text, graphics, logos, images, and code, is the property of Dynova Cloud or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any Site content without our prior written consent.
            </p>
          </section>

          {/* 5. Case Studies and Results */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              5. Case Studies and Results
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              Any performance metrics, case studies, or results referenced on this Site reflect specific client engagements under specific conditions. Past results do not guarantee similar outcomes for future clients, as results depend on many factors outside our control, including market conditions, budget, and client-side implementation.
            </p>
          </section>

          {/* 6. Third-Party Links and Services */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              6. Third-Party Links and Services
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              Our Site may reference or link to third-party platforms (e.g., Google, Meta, Shopify). We are not responsible for the content, policies, or practices of any third-party sites or services.
            </p>
          </section>

          {/* 7. Disclaimer of Warranties */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              7. Disclaimer of Warranties
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              8. Limitation of Liability
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              To the fullest extent permitted by law, Dynova Cloud shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* 9. Indemnification */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              9. Indemnification
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              You agree to indemnify and hold harmless Dynova Cloud, its officers, employees, and affiliates from any claims, damages, or expenses arising from your use of the Site or violation of these Terms.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              10. Governing Law
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              These Terms are governed by the laws of [Insert Jurisdiction — still needs your input], without regard to conflict of law principles. Any disputes arising from these Terms will be resolved in the courts located in [same jurisdiction].
            </p>
          </section>

          {/* 11. Changes to These Terms */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              11. Changes to These Terms
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms. The &ldquo;Last Updated&rdquo; date at the top reflects the most recent revision.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              12. Contact Us
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              If you have questions about these Terms, contact us at:
            </p>
            <div className="!mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-1.5">
              <p className="font-semibold text-white text-base m-0">Dynova Cloud</p>
              <p className="text-sm text-[#AAB4C3] m-0">
                Email:{' '}
                <a href="mailto:info@dynova.cloud" className="text-[#FFC300] hover:underline font-mono">
                  info@dynova.cloud
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
