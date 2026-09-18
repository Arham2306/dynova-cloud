import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import SEO from '../components/SEO/SEO';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Inform client-side web crawlers that this route is not indexed
    let metaRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const created = !metaRobots;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    const previousContent = metaRobots.getAttribute('content');
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (created && metaRobots) {
        metaRobots.remove();
      } else if (metaRobots && previousContent !== null) {
        metaRobots.setAttribute('content', previousContent);
      } else if (metaRobots) {
        metaRobots.removeAttribute('content');
      }
    };
  }, []);

  return (
    <main className="relative min-h-[85vh] bg-[#000814] text-[#F5F7FA] font-sans flex items-center justify-center overflow-hidden px-6 py-32">
      <SEO
        title="404: Page Not Found | Dynova Cloud"
        description="The page you are looking for does not exist or has been moved. Explore Dynova Cloud services and web engineering solutions."
      />

      {/* Subtle Ambient Radial Glow matching Dynova Brand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,53,102,0.35)_0%,transparent_75%)]"
      />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        {/* Subtle decorative badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#001D3D]/80 border border-[#003566] text-[#FFC300] text-xs font-mono tracking-wider uppercase mb-6 shadow-sm">
          <Compass size={14} className="animate-spin-slow" />
          <span>Error 404 &bull; Route Unreachable</span>
        </div>

        {/* Hero 404 Digits */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F5F7FA] to-[#708096] mb-4 select-none">
          404
        </h1>

        {/* Error Headline */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
          Page Not Found
        </h2>

        {/* Explanatory Message */}
        <p className="text-base sm:text-lg text-[#AAB4C3] max-w-md mb-8 leading-relaxed">
          The page you requested doesn't exist, has been removed, or was permanently retired.
        </p>

        {/* Primary Navigation CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FFC300] text-[#000814] font-semibold text-sm hover:bg-[#FFD60A] transition-all duration-200 shadow-[0_0_24px_rgba(255,195,0,0.35)] active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
