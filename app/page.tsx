export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score Features by{" "}
          <span className="text-[#58a6ff]">Effort vs Impact</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop guessing what to build next. Input your feature requests, rate effort (1–5) and business impact (1–5), and get an instant priority ranking — so your team ships what matters most.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $49/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* How it works */}
      <section className="mb-24 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Add Features", desc: "List all your feature requests in one place." },
          { step: "2", title: "Score Each", desc: "Rate effort (1–5) and business impact (1–5)." },
          { step: "3", title: "Get Rankings", desc: "Auto-sorted by impact/effort ratio instantly." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited features & projects",
              "Impact/effort scoring matrix",
              "Visual priority dashboard",
              "Export rankings to CSV",
              "Team collaboration (up to 5)"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the scoring work?",
              a: "You rate each feature's effort (1 = easy, 5 = hard) and business impact (1 = low, 5 = high). The app divides impact by effort to produce a priority score and sorts your list automatically."
            },
            {
              q: "Can I share rankings with my team?",
              a: "Yes. The Pro plan supports up to 5 team members who can view and edit the scoring matrix together in real time."
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 7-day money-back guarantee. If the tool doesn't help you prioritize better, just email us for a full refund — no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Feature Prioritizer. All rights reserved.
      </footer>
    </main>
  );
}
