export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Product Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Map Git Commits to<br />
          <span className="text-[#58a6ff]">Customer Feature Requests</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your git history to Zendesk, Intercom, and Linear tickets. Auto-generate customer-facing changelogs with real impact metrics — no manual work required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">For product managers, customer success &amp; engineering managers</p>

        {/* Feature highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Webhook Processing', desc: 'Receive commit events and ticket updates in real time via webhooks.' },
            { title: 'Auto-Mapping', desc: 'AI-assisted linking of commits to open feature requests and support tickets.' },
            { title: 'Impact Changelogs', desc: 'Publish customer-facing release notes with affected ticket counts and user reach.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited git repositories',
              'Zendesk, Intercom & Linear integrations',
              'Automated changelog generation',
              'Impact metrics dashboard',
              'Webhook event processing',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which integrations are supported?',
              a: 'We support GitHub, GitLab, and Bitbucket for git, plus Zendesk, Intercom, and Linear for tickets. More integrations are on the roadmap.'
            },
            {
              q: 'How does commit-to-ticket mapping work?',
              a: 'The app parses commit messages for ticket IDs and keywords, then uses heuristics to link commits to open requests. You can also manually adjust mappings.'
            },
            {
              q: 'Can I customize the customer-facing changelog?',
              a: 'Yes. You control which commits appear, the tone of the release notes, and which customer segments are notified for each release.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Git Changelog Customer Mapper. All rights reserved.
      </footer>
    </main>
  )
}
