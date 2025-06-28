export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white space-y-24">

      {/* About Intro */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Who We Are</h2>
        <p className="text-white/80 text-lg">
          LaunchLab is a design-led dev team building high-performance websites for ambitious brands and creators.
        </p>
      </div>

      {/* Mission + Team Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">Our Mission</h3>
          <p className="text-white/80">
            We believe that your website should work *for* your brand, not against it. That&apos;s why every build we ship is handcrafted, mobile-first, and SEO-optimized — no drag-and-drop junk, ever.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">The Team</h3>
          <p className="text-white/80">
            We&apos;re a tight-knit team of 6 — working async across Lisbon, Bangkok, and Toronto. No middlemen, no fluff. Just solid work and fast turnarounds.
          </p>
        </div>
      </div>

      {/* Stats Block */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-8">Why Clients Trust Us</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80 text-sm">
          <div><span className="text-3xl font-bold text-white block">32+</span> Projects Delivered</div>
          <div><span className="text-3xl font-bold text-white block">11</span> Sectors Served</div>
          <div><span className="text-3xl font-bold text-white block">3</span> Continents Worked From</div>
          <div><span className="text-3xl font-bold text-white block">0</span> AI Templates Used</div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-2xl font-semibold text-cyan-300 mb-4">Award-Winning. Kinda.</h4>
        <ul className="text-white/70 space-y-2 text-sm">
          <li>🏆 Top 69 Under 69 Web Studios – 2024</li>
          <li>🥈 Runner-Up: Best Button Alignment – Portugal Tech Conf</li>
          <li>🎖 Wix Exit Survivors Club – Certified 2023</li>
        </ul>
      </div>

      {/* Founder Card */}
<div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md max-w-2xl mx-auto text-center">
  <img
    src="/founder.png"
    alt="Alex F., Founder"
    className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-cyan-400"
  />
  <h3 className="text-xl font-semibold text-cyan-300">Alex F.</h3>
  <p className="text-white/70 text-sm italic mb-2">Founder, LaunchLab</p>
  <p className="text-white/80 text-sm">
    Built his first website at 17. Believes most websites are 70% bloat and 30% lorem ipsum. Obsessed with fast loads, clean code, and stupid-good UI.
  </p>
</div>
      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <h4 className="text-2xl font-semibold text-cyan-300 mb-6 text-center">Our Journey</h4>
        <ul className="space-y-4 border-l-2 border-cyan-400 pl-6 text-white/80 text-sm">
          <li><strong>2022:</strong> We quit our day jobs and started freelancing full-time</li>
          <li><strong>2023:</strong> Launched our 10th site — and the idea for LaunchLab was born</li>
          <li><strong>2024:</strong> Built 30+ pages, 11 sectors, 0 templates — still going strong</li>
          <li><strong>2025:</strong> Scaling aggressively, expanding our business globally</li>
        </ul>
      </div>
    </section>
  )
}
