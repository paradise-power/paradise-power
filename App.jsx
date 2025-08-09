
import React, { useState, useEffect } from 'react'
import {
  CheckCircle, Phone, Mail, Zap, Cable, Sun, Wrench, Briefcase, Home, MapPin, Shield
} from 'lucide-react'

const CONFIG = {
  company: "Paradise Power",
  phoneDisplay: "(808) 280-8083",
  phoneHref: "tel:+18082808083",
  email: "zack@paradise-power.com",
  serviceArea: "Maui, HI",
  license: "XXXX-XXXX",
  solarUrl: "https://mauisolar.com",
  LOGO_SRC: "/images/logo.jpg",
  HERO_IMAGE: "/images/hero.jpg",
  PROJECTS: [
    { category: "Residential", image: "/images/project-residential.jpg" },
    { category: "Commercial", image: "/images/project-commercial.jpg" },
    { category: "Solar", image: "/images/project-solar.jpg" }
  ],
  SERVICES: [
    { icon: "Home", title: "Residential New Construction", points: ["Whole‑home wiring", "Panel installation", "Lighting design & layout"] },
    { icon: "Briefcase", title: "Commercial", points: ["Tenant improvements", "Service upgrades", "Lighting & controls"] },
    { icon: "Wrench", title: "Panel & Service Upgrades", points: ["Meter/main upgrades", "Subpanels", "Load calculations"] },
    { icon: "Sun", title: "Solar & Storage", points: ["PV tie‑ins", "Battery backups", "Critical loads"] },
    { icon: "Cable", title: "Tenant Improvements", points: ["Retail buildouts", "Restaurants", "Offices & warehouses"] },
    { icon: "Zap", title: "Lighting & Controls", points: ["LED retrofits", "Exterior/site lighting", "Smart dimming"] }
  ],
  ABOUT: "Locally owned and operated, Paradise Power delivers tidy installations, clear communication, and fair pricing. We understand island logistics and coordinate proactively so your job stays on schedule—from estimate to final inspection."
}

function iconFor(name) {
  const map = { Wrench: <Wrench />, Briefcase: <Briefcase />, Home: <Home />, Sun: <Sun />, Cable: <Cable />, Zap: <Zap /> }
  return map[name] ?? <Zap />
}

export default function App() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    console.assert(CONFIG.phoneHref.startsWith("tel:+"), "phoneHref should start with tel:+")
    console.assert(CONFIG.email.includes("@"), "email looks invalid")
  }, [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: CONFIG.company,
    url: 'https://paradise-power.com',
    areaServed: CONFIG.serviceArea,
    telephone: '+1-808-280-8083',
    email: CONFIG.email,
    address: { '@type': 'PostalAddress', addressRegion: 'HI' },
    openingHours: 'Mo,Tu,We,Th,Fr 08:00-17:00'
  }

  const heroStyle = {
    backgroundImage: `url(${CONFIG.HERO_IMAGE})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <main className="min-h-screen" style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: '#0284c7', color: 'white', fontSize: 14 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Phone size={16} />
            <a href={CONFIG.phoneHref} style={{ color: 'white', textDecoration: 'none' }}>{CONFIG.phoneDisplay}</a>
            <span style={{ opacity: 0.7 }}>•</span>
            <Mail size={16} />
            <a href={`mailto:${CONFIG.email}`} style={{ color: 'white', textDecoration: 'none' }}>{CONFIG.email}</a>
          </div>
          <div>Mon–Fri 8am–5pm</div>
        </div>
      </div>

      <header style={{ position: 'sticky', top: 0, zIndex: 20, backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.85)', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <img src={CONFIG.LOGO_SRC} alt="Paradise Power logo" style={{ height: 32, width: 'auto', borderRadius: 6 }} />
            <span style={{ fontWeight: 600, fontSize: 18 }}>{CONFIG.company}</span>
          </div>
          <nav style={{ display: 'none' }}>
            <a href="#services">Services</a>
          </nav>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a href={CONFIG.solarUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '8px 12px', borderRadius: 12, background: '#f59e0b', color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>Solar</a>
            <a href="#contact" style={{ padding: '8px 12px', borderRadius: 12, background: '#0284c7', color: 'white', fontWeight: 600, textDecoration: 'none' }}>Request a Quote</a>
          </div>
        </div>
      </header>

      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, ...heroStyle }} />
        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '96px 16px', color: 'white' }}>
          <p style={{ letterSpacing: 2, opacity: 0.9, fontSize: 12, textTransform: 'uppercase' }}>Licensed • Insured • {CONFIG.serviceArea}</p>
          <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginTop: 8 }}>Reliable Electrical Work for Homes & Businesses</h1>
          <p style={{ marginTop: 12, opacity: 0.95, maxWidth: 640 }}>From panel upgrades and tenant improvements to solar—Paradise Power keeps your projects on time, on budget, and up to code.</p>
        </div>
      </section>

      <section id="services" style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 16px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700 }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
          {CONFIG.SERVICES.map((s, i) => (
            <div key={i} style={{ border: '1px solid #e2e8f0', boxShadow: '0 1px 2px rgba(0,0,0,0.04)', padding: 20, borderRadius: 16, background: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ padding: 8, borderRadius: 12, background: '#f0f9ff', color: '#0369a1' }}>{iconFor(s.icon)}</div>
                <div style={{ fontWeight: 600 }}>{s.title}</div>
              </div>
              <ul style={{ marginTop: 14, color: '#475569', fontSize: 14, paddingLeft: 0, listStyle: 'none' }}>
                {s.points.map((p, j) => (
                  <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
                    <CheckCircle size={16} style={{ color: '#0284c7', marginTop: 2 }} /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 16px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700 }}>Recent Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
            {CONFIG.PROJECTS.map((proj, i) => (
              <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <img src={proj.image} alt={`${proj.category} Project`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ padding: 14, fontWeight: 600, textAlign: 'center' }}>{proj.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 16px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700 }}>About {CONFIG.company}</h2>
        <p style={{ color: '#334155', lineHeight: 1.7, maxWidth: 850 }}>{CONFIG.ABOUT}</p>
        <ul style={{ marginTop: 16, color: '#475569', fontSize: 14, paddingLeft: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
          <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Shield size={16} style={{ color: '#0284c7' }} /> Licensed & insured — LIC # {CONFIG.license}</li>
          <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><MapPin size={16} style={{ color: '#0284c7' }} /> Based in {CONFIG.serviceArea}</li>
        </ul>
      </section>

      <section id="contact" style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 16px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700 }}>Get a Quote</h2>
        <p style={{ color: '#475569' }}>Send your scope, timeline, and any photos/links. We usually reply the same business day.</p>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ marginTop: 20, padding: 20, borderRadius: 16, border: '1px solid #e2e8f0', background: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'grid', gap: 12 }}>
            <label> Name <input required style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #cbd5e1' }} /></label>
            <label> Email <input type="email" required style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #cbd5e1' }} /></label>
            <label> Phone <input type="tel" style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #cbd5e1' }} /></label>
            <label> Location / Island <input style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #cbd5e1' }} /></label>
            <label> Project Details <textarea placeholder="Scope, timeline, photos/links if any" style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #cbd5e1', minHeight: 120 }} /></label>
            <button type="submit" style={{ padding: '12px 16px', borderRadius: 14, background: '#0284c7', color: 'white', fontWeight: 700, border: 'none' }}>Send Request</button>
            {sent && <p style={{ color: '#16a34a', fontSize: 14 }}>Thanks! We received your info. To make this live, deploy to Vercel and connect paradise-power.com.</p>}
          </div>
        </form>
      </section>

      <footer style={{ background: '#0f172a', color: '#cbd5e1' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 16px', display: 'grid', gap: 24 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Zap size={20} style={{ color: '#38bdf8' }} />
            <span style={{ fontWeight: 600 }}>{CONFIG.company}</span>
          </div>
          <div style={{ fontSize: 14 }}>LIC # {CONFIG.license} • {new Date().getFullYear()} {CONFIG.company}</div>
        </div>
      </footer>
    </main>
  )
}
