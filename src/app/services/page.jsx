export default function Services() {
  const coreServices = [
    {
      title: 'Landing Pages',
      desc: 'High-converting, mobile-first pages with scroll-based animations and CTA optimization.',
    },
    {
      title: 'Business Websites',
      desc: 'Multi-page static or CMS-powered sites for growing teams and solopreneurs.',
    },
    {
      title: 'Product Showcases',
      desc: 'Launch a pre-release MVP, get users, and build your waitlist with style.',
    },
    {
      title: 'Custom Builds',
      desc: 'From dashboards to booking tools — if it lives in the browser, we can build it.',
    },
  ]

  const bonusServices = [
    'Speed Optimization & Core Web Vitals',
    'Startup Brand Identity Packages',
    'One-Page SaaS Microsites',
    'Investor Pitch Sites',
    'Manpower Pages (for recruitment)',
    'Ghostwriting for Founders',
    'Migration from Wix / Squarespace',
    'AI automation for your recurring tasks',
  ]

  const industries = [
    'Tech Startups', 'Agencies', 'Consultants', 'Ecommerce', 'Clinics & Health', 'EdTech', 'Real Estate'
  ]

  const stack = ['Next.js', 'TailwindCSS', 'Vercel', 'Supabase', 'Stripe', 'Airtable', 'Framer Motion']

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white space-y-24">

      {/* Page Intro */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">What We Do</h2>
        <p className="text-white/80 text-lg mb-4">
          We build websites that look sharp, load fast, and don&apos;t break when you add an emoji in the CMS.
        </p>
        <p className="text-white/70 text-base">
          If your project deserves better than a cookie-cutter AI site, you&apos;re in the right place.
        </p>
      </div>

      {/* Core Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {coreServices.map(({ title, desc }) => (
          <div
            key={title}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all shadow-md"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
            <p className="text-white/80">{desc}</p>
          </div>
        ))}
      </div>

      {/* Bonus List */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Also Available (If You Ask Nicely)</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/70">
          {bonusServices.map((s, i) => (
            <li key={i} className="bg-slate-800 border border-slate-700 rounded-md px-4 py-2 text-left">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Our Process */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">How We Work</h3>
        <div className="space-y-6 text-white/80 text-lg">
          <p><strong>1. Free Discovery Call</strong><br />We figure out what you need and what you don&apos;t.</p>
          <p><strong>2. Fixed Quote</strong><br />No hourly drama. You get a flat rate for the full project.</p>
          <p><strong>3. Delivery & Launch</strong><br />You approve → we deploy → your brand goes live.</p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Industries We Serve</h3>
        <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
          {industries.map((item) => (
            <span key={item} className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack Logos */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Our Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4 text-white/60 text-xs uppercase tracking-wide">
          {stack.map((tool) => (
            <div key={tool} className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-md">
              {tool}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
