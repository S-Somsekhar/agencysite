export default function Pricing() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white text-center space-y-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Transparent Pricing</h2>
        <p className="text-white/80 text-lg">
          No hidden fees. No hourly fluff. Just fixed rates for clean builds.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Starter</h3>
          <p className="text-white/70 mb-4">Perfect for solo founders & side-projects</p>
          <ul className="text-sm text-white/60 space-y-2 mb-4">
            <li>✅ 1-page scroll site</li>
            <li>✅ Custom design</li>
            <li>✅ Deployed on Vercel</li>
          </ul>
          <p className="text-3xl font-bold text-white">$299</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-cyan-400 shadow-xl">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Pro</h3>
          <p className="text-white/70 mb-4">Best for growing startups and personal brands</p>
          <ul className="text-sm text-white/60 space-y-2 mb-4">
            <li>✅ Up to 5 pages</li>
            <li>✅ Animated hero + CTAs</li>
            <li>✅ Light CMS included</li>
          </ul>
          <p className="text-3xl font-bold text-white">$499</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Custom</h3>
          <p className="text-white/70 mb-4">Need something special? We got you.</p>
          <ul className="text-sm text-white/60 space-y-2 mb-4">
            <li>✅ Unlimited pages</li>
            <li>✅ Complex UI logic</li>
            <li>✅ Custom CMS / API builds</li>
          </ul>
          <p className="text-2xl font-semibold text-white">Let&apos;s Talk →</p>
        </div>
      </div>
    </section>
  )
}
