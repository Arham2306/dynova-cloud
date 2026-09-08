import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#000814] text-[#F5F7FA] font-sans relative overflow-x-hidden">
      <SEO
        title="Privacy Policy | Dynova Cloud"
        description="This Privacy Policy explains how Dynova Cloud collects, uses, and safeguards your personal information when you visit dynova.cloud."
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
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-[#AAB4C3] m-0">
            Last Updated: September 2, 2026
          </p>
        </header>

        {/* Content Flow */}
        <div className="space-y-14 text-[15px] sm:text-base leading-relaxed text-[#CBD5E1]">
          {/* Intro */}
          <p className="text-base sm:text-lg text-[#F5F7FA]/90 leading-relaxed m-0">
            Dynova Cloud (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit{' '}
            <a
              href="https://dynova.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC300] hover:text-[#FFD60A] font-medium hover:underline transition-colors"
            >
              dynova.cloud
            </a>{' '}
            (the &ldquo;Site&rdquo;).
          </p>

          {/* 1. Information We Collect */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              1. Information We Collect
            </h2>

            <div className="space-y-2.5">
              <h3 className="text-base font-semibold text-[#F5F7FA] m-0">
                Information you provide directly:
              </h3>
              <p className="m-0 text-[#94A3B8]">
                When you submit our project inquiry / lead form, we collect:
              </p>
              <ul className="space-y-1.5 pl-1">
                {[
                  'Full name',
                  'Work email address',
                  'Phone number (optional)',
                  'Required service selection',
                  'Project brief and goals',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] mt-[7px] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 mt-6">
              <h3 className="text-base font-semibold text-[#F5F7FA] m-0">
                Information collected automatically:
              </h3>
              <p className="m-0 text-[#94A3B8]">
                When you visit our Site, we may automatically collect:
              </p>
              <ul className="space-y-1.5 pl-1">
                {[
                  'IP address and approximate location',
                  'Browser type and device information',
                  'Pages visited and time spent on the Site',
                  'Referring website or source',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] mt-[7px] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5 mt-6">
              <h3 className="text-base font-semibold text-[#F5F7FA] m-0">
                Cookies and tracking technologies:
              </h3>
              <p className="m-0 text-[#CBD5E1]">
                We use cookies and similar tracking tools (such as Google Analytics and Meta/Facebook Pixel) to understand how visitors use our Site and to measure the effectiveness of our marketing campaigns. You can disable cookies through your browser settings, though some Site features may not function properly as a result.
              </p>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              2. How We Use Your Information
            </h2>
            <p className="m-0 text-[#94A3B8]">
              We use the information we collect to:
            </p>
            <ul className="space-y-1.5 pl-1">
              {[
                'Respond to your project inquiries and schedule consultations',
                'Provide, maintain, and improve our services',
                "Send you information about our services, if you've opted in",
                'Analyze Site usage and improve user experience',
                'Measure and optimize our advertising campaigns (Google Ads, Meta Ads)',
                'Comply with legal obligations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] mt-[7px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-[#FFC300] pl-4 py-2 text-[#F5F7FA] font-medium text-sm sm:text-base bg-[#FFC300]/[0.04] rounded-r-md">
              We do not sell your personal information to third parties.
            </div>
          </section>

          {/* 3. How We Share Your Information */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              3. How We Share Your Information
            </h2>
            <p className="m-0 text-[#94A3B8]">
              We may share your information with:
            </p>
            <ul className="space-y-1.5 pl-1">
              {[
                'Service providers who help us operate our business (e.g., hosting providers, email/CRM tools, analytics platforms)',
                'Advertising platforms (Google, Meta) for campaign performance tracking, in aggregated or pseudonymized form where possible',
                'Legal authorities, if required by law or to protect our rights',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] mt-[7px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 text-[#CBD5E1]">
              We do not share your information with third parties for their own independent marketing purposes without your consent.
            </p>
          </section>

          {/* 4. Data Retention */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              4. Data Retention
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, respond to inquiries, or comply with legal obligations. Lead form submissions are retained for up to 24 months from the date of submission unless you request earlier deletion.
            </p>
          </section>

          {/* 5. Your Rights */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              5. Your Rights
            </h2>
            <p className="m-0 text-[#94A3B8]">
              Depending on your location, you may have the right to:
            </p>
            <ul className="space-y-1.5 pl-1">
              {[
                'Access the personal information we hold about you',
                'Request correction or deletion of your information',
                'Object to or restrict certain processing of your information',
                'Withdraw consent where processing is based on consent',
                'Request a copy of your data in a portable format',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] mt-[7px] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 text-[#CBD5E1]">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@dynova.cloud" className="text-[#FFC300] hover:underline font-mono">
                info@dynova.cloud
              </a>
              .
            </p>
            <p className="m-0 text-[#94A3B8]">
              If you are located in the European Economic Area (EEA) or United Kingdom, you have rights under the General Data Protection Regulation (GDPR). If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          {/* 6. Data Security */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              6. Data Security
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Third-Party Links */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              7. Third-Party Links
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              8. Children&apos;s Privacy
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              Our Site is not directed at individuals under the age of 18, and we do not knowingly collect personal information from children.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              9. International Data Transfers
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              If you are accessing our Site from outside the country in which our servers and service providers are located, your information may be transferred to and processed in a country with different data protection laws than your own. By using the Site, you consent to this transfer.
            </p>
          </section>

          {/* 10. Changes to This Policy */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              10. Changes to This Policy
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              We may update this Privacy Policy from time to time. The updated version will be indicated by a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="space-y-5 pt-10 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              11. Contact Us
            </h2>
            <p className="m-0 text-[#CBD5E1]">
              If you have questions about this Privacy Policy or how we handle your data, contact us at:
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

export default PrivacyPolicyPage;
