import React, { useState } from 'react';

const SERUM_URL = 'https://47skin.com/products/anti-blemish-scar-repair-serum';

function EmailContent() {
  return (
    <article className="email" aria-label="Speculative 47 Skin email design">
      <header className="email-brand">
        <div className="brand-logotype" aria-label="47 Skin">47<span>SKIN</span></div>
        <span className="brand-rule" aria-hidden="true" />
      </header>

      <section className="feature" aria-label="Campaign visual">
        <div className="feature-copy">
          <div className="eyebrow">THE SKIN CONVERSATION <span className="tiny-star" aria-hidden="true">✳</span> 01</div>
          <h1>FOR BREAKOUTS <em>AND THE MARKS</em> THEY LEAVE BEHIND.</h1>
          <div className="feature-stroke" aria-hidden="true" />
        </div>
        <div className="feature-art">
          <img src="/assets/editorial-skin-abstract.svg" alt="Abstract editorial composition inspired by natural skin tones and organic contours" />
        </div>
      </section>

      <div className="email-copy">
        <p>Hello,</p>
        <p>Breakouts are not always the end of the story. For some people, a visible mark remains long after the spot has settled.</p>
        <p>And when you're dealing with recurring breakouts, that can feel like another concern to think about, even after the original blemish has cleared.</p>
        <p>That's why we're taking a closer look at the relationship between breakouts and the marks they leave behind, and introducing you to the 47 Skin Anti-Blemish &amp; Scar Repair Serum.</p>
        <p>Over the coming weeks, we'll explore what the serum is designed to do, the science behind its Silver Chitoderm® formula and the published findings that can help you understand its benefits.</p>
        <p>For now, take a closer look at the serum and see what it's all about..</p>
        <div className="cta-wrap">
          <a className="email-cta" href={SERUM_URL} target="_blank" rel="noopener noreferrer">Explore the serum <span aria-hidden="true">↗</span></a>
        </div>
        <div className="signoff"><p>Warmly,</p><p>The 47 Skin team</p></div>
      </div>
      <footer className="email-footer"><div className="footer-symbol" aria-hidden="true">47</div><span>SKIN</span></footer>
    </article>
  );
}

export default function App() {
  const [preview, setPreview] = useState('desktop');
  return (
    <main className="page">
      <div className="portfolio-top"><span className="portfolio-marker" aria-hidden="true" /> <span>EMAIL DESIGN / PORTFOLIO STUDY</span><span className="series-tag">01 — AWARENESS</span></div>
      <div className="workspace">
        <div className="preview-toolbar">
          <div className="toolbar-name"><span className="toolbar-dot" aria-hidden="true" /> Email preview</div>
          <div className="view-switch" role="group" aria-label="Preview width">
            <button type="button" className={preview === 'desktop' ? 'active' : ''} aria-pressed={preview === 'desktop'} onClick={() => setPreview('desktop')}>Desktop</button>
            <button type="button" className={preview === 'mobile' ? 'active' : ''} aria-pressed={preview === 'mobile'} onClick={() => setPreview('mobile')}>Mobile</button>
          </div>
        </div>
        <div className={`message-shell ${preview === 'mobile' ? 'is-mobile' : ''}`}>
          <div className="mail-meta">
            <div className="mail-meta-kicker">MESSAGE PREVIEW <span>·</span> CONCEPT ONLY</div>
            <h2>Before the mark fades</h2>
            <div className="meta-subject">A fresh look at two connected skin concerns</div>
            <div className="sender-row"><div className="sender-avatar" aria-hidden="true">47</div><div className="sender-data"><strong>47 Skin <span className="mock-label">(illustrative sender)</span></strong><span>Preview only · no email was sent</span></div></div>
          </div>
          <EmailContent />
        </div>
      </div>
      <p className="disclosure">Speculative email concept; not sent by 47 Skin. Not commissioned by or affiliated with 47 Skin.</p>
    </main>
  );
}
