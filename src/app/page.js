// src/app/page.jsx
export default function Home() {
  return (
    <>
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
        We Build Launchpads <br className="hidden md:block" /> for Bold Brands
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
        LaunchLab is a design-first dev studio helping startups ship sleek, modern websites that convert.
      </p>
      <a
        href="/contact"
        className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-cyan-300 transition"
      >
        Get a Free Quote
      </a>
    </section>
    {/* Testimonials Section */}
<section className="px-6 py-20 bg-gradient-to-t from-slate-900 to-slate-800 text-white text-center space-y-12">
  <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">Client Testimonials</h2>
  <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mt-8">
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
      <p className="italic text-white/80">“We got a full rebrand + website in under 10 days. Smooth experience, great communication. 10/10.”</p>
      <h4 className="text-cyan-300 mt-4 font-semibold">Samantha V.</h4>
      <p className="text-white/50 text-xs">Founder, Voxel Studio</p>
    </div>
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
      <p className="italic text-white/80">“LaunchLab gave us our first real site after years of running on Notion pages. Conversions jumped 38%.”</p>
      <h4 className="text-cyan-300 mt-4 font-semibold">Marcus T.</h4>
      <p className="text-white/50 text-xs">CEO, DevUp Labs</p>
    </div>
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
      <p className="italic text-white/80">“I still don&apos;t know how they do it this fast. Two Zoom calls later, we were live. Incredible polish.”</p>
      <h4 className="text-cyan-300 mt-4 font-semibold">Ayla K.</h4>
      <p className="text-white/50 text-xs">Freelance Consultant</p>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="min-h-[60vh] px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-900 text-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">Ready to Build?</h2>
  <p className="text-white/80 max-w-xl mx-auto mb-8">
    Send us an email and we&apos;ll get back within 24 hours. Short calls, scoped pricing, no fluff.
  </p>
  
  <a
    href="mailto:hello@launchlab.fake"
    className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-cyan-300 transition"
  >
    Contact Us
  </a>
</section>

    </>
  )
}
