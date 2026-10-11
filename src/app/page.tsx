import type { ReactNode } from "react";

const contactEmail = "your-email@example.com";
const whatsappNumber = "254743973232";
const formspreeEndpoint = "https://formspree.io/f/xrpelloj";

const services = [
  {
    number: "01",
    title: "Technical SEO audits & crawl diagnostics",
    description:
      "Find and fix the technical barriers keeping search engines from crawling, understanding, and indexing your site.",
    points: ["Crawl and indexation analysis", "Core Web Vitals & site speed", "Architecture, canonicals & redirects"],
    icon: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8M8 13h5M8 17h3" />
        <path d="m16 16 2 2 4-4" />
      </>
    ),
  },
  {
    number: "02",
    title: "On-page SEO & web content strategy",
    description:
      "Turn the way your customers search into useful, well-structured pages that earn visibility and drive enquiries.",
    points: ["Keyword and intent mapping", "Content briefs & page optimisation", "Internal linking and metadata"],
    icon: (
      <>
        <path d="M5 3h10l4 4v14H5z" />
        <path d="M14 3v5h5M8 12h8M8 16h8" />
      </>
    ),
  },
  {
    number: "03",
    title: "Local SEO & Google Business Profile",
    description:
      "Help nearby customers find and choose your business with consistent local signals and an optimised profile.",
    points: ["Google Business Profile optimisation", "Local landing pages & citations", "Reviews and local visibility tracking"],
    icon: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

const tools = [
  { name: "Google Search Console", mark: "G", className: "tool-google" },
  { name: "Ahrefs", mark: "a", className: "tool-ahrefs" },
  { name: "PageSpeed Insights", mark: "◒", className: "tool-pagespeed" },
  { name: "Sitebulb", mark: "S", className: "tool-sitebulb" },
];

// <!-- EDIT YOUR CASE STUDY HERE: Replace sample metrics and descriptions with verified client results. -->
const caseStudies = [
  {
    category: "LOCAL SEARCH · SAMPLE RESULT",
    title: "Client Rank Growth",
    metric: "12 → 3",
    label: "sample local map pack position",
    detail: "Example improvement after refining the Google Business Profile and building location-focused service pages.",
    trend: "↗",
  },
  {
    category: "TECHNICAL SEO · SAMPLE RESULT",
    title: "Crawl Error Resolution",
    metric: "92%",
    label: "sample crawl errors resolved",
    detail: "Example audit outcome covering broken URLs, redirect chains, and indexation blockers.",
    trend: "✓",
  },
  {
    category: "SITE MIGRATION · SAMPLE RESULT",
    title: "301 Redirect Mapping",
    metric: "148",
    label: "sample URLs mapped",
    detail: "Example migration work mapping legacy pages to relevant destinations to protect search equity.",
    trend: "✓",
  },
  {
    category: "CONTENT STRATEGY · SAMPLE RESULT",
    title: "Organic Traffic Increase",
    metric: "+64%",
    label: "sample organic clicks",
    detail: "Example growth after overhauling category page copy around customer needs and search intent.",
    trend: "↗",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nairobi Search Studio",
  description:
    "Technical SEO audits, content strategy, and local search optimisation for businesses in Nairobi and across Kenya.",
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  email: contactEmail,
  url: "https://yourdomain.co.ke",
  priceRange: "$$",
  knowsAbout: [
    "Technical SEO",
    "Local SEO",
    "Google Business Profile",
    "Web analytics",
    "Content strategy",
  ],
};

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h13m-5-5 5 5-5 5" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Nairobi Search Studio home">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>nairobi<span className="brand-light">search</span></span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="button button-dark nav-cta" href="#contact">
            Get free SEO audit <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              SEO for ambitious Kenyan businesses
            </div>
            <h1>
              Be the answer
              <br />
              <span>they find first.</span>
            </h1>
            <p className="hero-description">
              More organic traffic. Better search visibility. A clear plan to
              help your Kenyan business grow — built around how your customers
              actually search.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#contact">
                Get your free SEO audit <ArrowIcon />
              </a>
              <a className="text-link" href="#results">
                See the results <ArrowIcon diagonal />
              </a>
            </div>
            <div className="trust-row">
              <span className="trust-caption">The right tools. Clear insights.</span>
              <div className="tool-list" aria-label="SEO tools">
                {tools.map((tool) => (
                  <span className="tool-chip" key={tool.name} title={tool.name}>
                    <span className={`tool-mark ${tool.className}`} aria-hidden="true">
                      {tool.mark}
                    </span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustrative organic search growth dashboard">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="growth-card">
              <div className="growth-topline">
                <span className="growth-indicator"><span /> ORGANIC PERFORMANCE</span>
                <span className="growth-period">LAST 6 MONTHS</span>
              </div>
              <p className="growth-heading">A healthier search presence</p>
              <div className="growth-score">
                <span>+84%</span>
                <span className="growth-change">↗ growing</span>
              </div>
              <div className="chart" aria-hidden="true">
                <div className="chart-gridline gridline-one" />
                <div className="chart-gridline gridline-two" />
                <div className="chart-gridline gridline-three" />
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c4f36a" stopOpacity=".34" />
                      <stop offset="100%" stopColor="#c4f36a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 126 C34 122 42 112 73 116 S121 105 146 110 S183 94 214 100 S250 90 281 94 S318 65 348 75 S382 51 411 60 S458 29 500 17 V150 H0Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 126 C34 122 42 112 73 116 S121 105 146 110 S183 94 214 100 S250 90 281 94 S318 65 348 75 S382 51 411 60 S458 29 500 17"
                    fill="none"
                    stroke="#c4f36a"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="500" cy="17" r="5" fill="#c4f36a" />
                </svg>
              </div>
              <div className="chart-months">
                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              </div>
              <div className="growth-footer">
                <span><i className="legend-dot" />Organic clicks</span>
                <span>↑ Visibility with purpose</span>
              </div>
            </div>
            <div className="visual-note">
              <span className="note-icon">↗</span>
              <span><strong>Built around your business</strong><br />Not a one-size-fits-all checklist</span>
            </div>
            <div className="visual-location"><span>⌖</span> Nairobi, Kenya</div>
          </div>
          <div className="hero-bottom">
            <span>STRATEGY FIRST. MEASURABLE BY DESIGN.</span>
            <a href="#services">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading">
            <div>
              <SectionLabel>WHAT I DO</SectionLabel>
              <h2>Make search work<br /><span>harder for you.</span></h2>
            </div>
            <p className="section-intro">
              Practical SEO that connects the technical details to the business
              outcomes that matter — enquiries, customers, and sustainable growth.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-icon">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {service.icon}
                    </svg>
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}><span aria-hidden="true">↗</span>{point}</li>
                  ))}
                </ul>
                <a className="card-link" href="#contact" aria-label={`Ask about ${service.title}`}>
                  Discuss this service <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="results-section" id="results">
          <div className="section-wrap results-inner">
            <div className="section-heading results-heading">
              <div>
                <SectionLabel>THE WORK, IN NUMBERS</SectionLabel>
                <h2>Small fixes.<br /><span>Meaningful momentum.</span></h2>
              </div>
              <p className="section-intro">
                Every project starts with a baseline and a plan. These
                illustrative examples show the kinds of improvements a focused
                SEO programme can target.
              </p>
            </div>
            <div className="case-grid">
              {/* <!-- EDIT YOUR CASE STUDY HERE: Update the sample content in the caseStudies array above. --> */}
              {caseStudies.map((study) => (
                <article className="case-card" key={study.category}>
                  <div className="case-category"><span />{study.category}</div>
                  <h3>{study.title}</h3>
                  <div className="case-metric">
                    <span>{study.metric}</span>
                    <span className="metric-trend" aria-hidden="true">{study.trend}</span>
                  </div>
                  <p className="case-label">{study.label}</p>
                  <p className="case-detail">{study.detail}</p>
                </article>
              ))}
            </div>
            <p className="results-note">
              Sample metrics for layout purposes only. Replace with verified
              client results before publishing.
            </p>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-art" aria-hidden="true">
            <div className="about-circle circle-back" />
            <div className="about-circle circle-front">
              <span className="about-monogram">NS</span>
              <span className="about-monogram-caption">SEARCH, WITH PURPOSE</span>
            </div>
            <span className="about-coordinate">01°17′S 36°49′E</span>
            <div className="about-stamp"><span>LOCAL</span><span>BY NATURE</span><span>✳</span></div>
          </div>
          <div className="about-copy">
            <SectionLabel>A LITTLE ABOUT ME</SectionLabel>
            <h2>Good SEO is<br /><span>good business.</span></h2>
            <p>
              I help businesses make sense of search — from the technical
              details under the hood to the local searches happening right
              around the corner.
            </p>
            <p>
              My work brings together careful technical SEO auditing, thoughtful
              web analytics, and local search strategy. You get clear priorities,
              honest reporting, and a partner who explains what the numbers
              actually mean.
            </p>
            <div className="about-values">
              <span><b>01</b> Clear, actionable audits</span>
              <span><b>02</b> Decisions grounded in data</span>
              <span><b>03</b> Strategy made for Kenya</span>
            </div>
            <a className="text-link about-link" href="#contact">Let’s talk about your goals <ArrowIcon /></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <SectionLabel>YOUR NEXT STEP</SectionLabel>
              <h2>Let’s find your<br /><span>next growth lever.</span></h2>
              <p>
                Tell me a little about your business. I’ll take a look at your
                search presence and get back to you with a few useful first
                observations — no pressure, no jargon.
              </p>
              <div className="contact-details">
                <a href={`mailto:${contactEmail}`}>
                  <span className="contact-detail-icon" aria-hidden="true">↗</span>
                  <span><small>EMAIL ME</small><strong>{contactEmail}</strong></span>
                </a>
                <a href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20SEO%20for%20my%20business.`} target="_blank" rel="noreferrer">
                  <span className="contact-detail-icon whatsapp-icon" aria-hidden="true">◉</span>
                  <span><small>CHAT ON WHATSAPP</small><strong>Let’s start a conversation</strong></span>
                </a>
              </div>
              <p className="contact-location"><span aria-hidden="true">⌖</span> Based in Nairobi, Kenya · Working across Kenya</p>
            </div>
            <form className="contact-form" action={formspreeEndpoint} method="POST">
              <div className="form-heading">
                <h3>Tell me about your project</h3>
                <span>Usually replies within 1 business day</span>
              </div>
              <label>
                <span>Your name</span>
                <input type="text" name="Name" autoComplete="name" placeholder="Jane Wanjiku" required />
              </label>
              <label>
                <span>Email address</span>
                <input type="email" name="Email" autoComplete="email" placeholder="jane@yourbusiness.co.ke" required />
              </label>
              <label>
                <span>Website URL <em>(optional)</em></span>
                <input type="url" name="Website" autoComplete="url" placeholder="https://yourbusiness.co.ke" />
              </label>
              <label>
                <span>How can I help?</span>
                <textarea name="Message" rows={4} placeholder="What would you like to improve in search?" required />
              </label>
              <button className="button button-lime form-submit" type="submit">
                Send your enquiry <ArrowIcon />
              </button>
              <p className="form-privacy">Your details are only used to respond to your enquiry.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span>nairobi<span className="brand-light">search</span></span>
          </a>
          <p>Thoughtful SEO for a more visible Kenya.</p>
          <div className="footer-right">
            <span>Nairobi, Kenya</span>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>© 2026 Nairobi Search Studio</span>
          <span>Built for the long game.</span>
        </div>
      </footer>
    </>
  );
}
