import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio,
} from './tweaks-panel.jsx';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 200;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join(',')]);
  return active;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(['home', 'about', 'portfolio', 'contact']);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const cls = (id) => 'nav-link' + (active === id ? ' active' : '');
  return (
    <nav className={'nav ' + (scrolled ? 'scrolled' : '')}>
      <a href="#home" className="nav-logo">
        <img src="images/logo-white.png" alt="Nick Lepoutre" />
        <span className="word">NL Production LLC</span>
      </a>
      <div className="nav-links">
        <a href="#about" className={cls('about')}><span className="num">01</span>About</a>
        <a href="#portfolio" className={cls('portfolio')}><span className="num">02</span>Work</a>
        <a href="#contact" className="nav-cta">Contact ↗</a>
      </div>
    </nav>
  );
}

function Hero({ tweaks }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);
  const fmt = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' }) + ' ET';

  return (
    <header id="home" className={'hero ' + (tweaks.heroVariant === 'type' ? 'hero-type-only' : '')}>
      <div className="hero-media">
        <img src="images/blink-stadium.jpg" alt="Live concert production"/>
      </div>
      <div className="hero-grid"></div>

      <div className="hero-inner">
        <div className="hero-top">
          <div><span className="live">Currently Booking · Q4 2026 / 2027</span></div>
          <div className="right"><span>{fmt} · Orlando, FL</span></div>
        </div>

        <div>
          <div className="reveal" style={{ '--rd': '40ms' }}>
            <div className="eyebrow"><span className="dot"></span>Nick Lepoutre · NL Production LLC</div>
          </div>
          <h1 className="hero-title h-display" style={{ marginTop: 24 }}>
            <span className="line reveal" style={{ '--rd': '120ms' }}>High-pressure shows.</span>
            <span className="line reveal" style={{ '--rd': '220ms' }}><em>Calm execution.</em></span>
          </h1>
          <div className="hero-sub">
            <p className="hero-tagline reveal" style={{ '--rd': '320ms' }}>
              <strong>disguise specialist.</strong> Programming and operating media servers, LED, and video systems for theatre, arena, and stadium productions worldwide.
            </p>
            <div className="reveal" style={{ '--rd': '420ms', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#portfolio" className="btn">View Work <span className="arrow"></span></a>
              <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ '--rd': '520ms' }}>
          <div className="hero-trusted">Trusted for high-pressure productions worldwide</div>
          <div className="hero-bottom">
            <div className="hero-stat">
              <span className="label">Years Touring</span>
              <span className="value">10<em>+</em></span>
            </div>
            <div className="hero-stat">
              <span className="label">Discipline</span>
              <span className="value">Arena · Stadium · Festival</span>
            </div>
            <div className="hero-stat">
              <span className="label">Specialist</span>
              <span className="value">disguise</span>
            </div>
            <div className="hero-stat">
              <span className="label">Systems</span>
              <span className="value">LED + Video</span>
            </div>
            <div className="hero-stat">
              <span className="label">Availability</span>
              <span className="value serif"><em>Worldwide</em></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const SKILLS = [
  { num: '01', name: 'disguise (d3) Operation & Programming', cat: 'Media Server' },
  { num: '02', name: 'Resolume & Notch Integration', cat: 'Real-time Content' },
  { num: '03', name: 'LED Processing — Brompton, NovaStar', cat: 'LED Systems' },
  { num: '04', name: 'Video Processing — Barco E2, Analog Way', cat: 'Switching' },
  { num: '05', name: 'SMPTE Timecode Synchronization', cat: 'Timing' },
  { num: '06', name: 'Touring Network Design', cat: 'Infrastructure' },
  { num: '07', name: 'Video Signal Flow & Routing', cat: 'Systems' },
  { num: '08', name: 'Broadcast Camera Systems', cat: 'IMAG' },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="meta">
            <span className="section-num">SECTION 01</span>
            <span className="eyebrow">About</span>
          </div>
          <h2 className="h-display">A decade behind the screens<em>, on the world's biggest stages.</em></h2>
        </div>

        <div className="about-grid">
          <div className="about-photo reveal">
            <img src="images/headshot.jpg" alt="Nick Lepoutre"/>
            <div className="corners"><span></span><span></span><span></span><span></span></div>
            <span className="tag">Nick Lepoutre · Owner</span>
          </div>

          <div className="about-body">
            <p className="about-lede reveal">
              Owner of NL Production LLC, specializing in Disguise media servers, touring video systems, and large-scale LED deployments for live entertainment, corporate events, and high-pressure productions where failure isn't an option.
            </p>
            <p className="reveal" style={{ '--rd': '60ms' }}>
              Over the past decade, I've worked arena tours, stadium shows, festivals, and one-off events for artists including Blink-182, Ed Sheeran, Jonas Brothers, Dermot Kennedy, Mastodon, and TLC.
            </p>
            <p className="reveal" style={{ '--rd': '120ms' }}>
              My work covers media server operation, playback systems, LED processing, signal flow, system builds, and show integration. Whether a production needs a dedicated media server engineer, chief LED engineer, or someone who can bridge both, I'm brought in to keep systems running cleanly.
            </p>
            <p className="reveal" style={{ '--rd': '180ms' }}>
              Known for staying calm under pressure, solving problems fast, and being easy to work with on the road.
            </p>
            
            <div className="about-stats reveal" style={{ '--rd': '180ms' }}>
              <div className="stat">
                <span className="lab">Based</span>
                <span className="val">Orlando, FL</span>
              </div>
              <div className="stat">
                <span className="lab">Coverage</span>
                <span className="val"><em>Worldwide</em></span>
              </div>
              <div className="stat">
                <span className="lab">Education</span>
                <span className="val" style={{ fontSize: 14 }}>Entertainment Design & Technology</span>
                <span className="val" style={{ fontSize: 13, color: 'var(--fg-3)', marginTop: 2 }}>Specialization in Live Show Production</span>
              </div>
            </div>

            <div className="reveal" style={{ '--rd': '220ms' }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Who I Work With</div>
              <div className="who-list">
                {['Production Managers', 'Tour Managers', 'Creative Directors', 'Vendors', 'Touring Production Teams', 'Corporate Event Producers'].map((item) => (
                  <span key={item} className="who-item">{item}</span>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ '--rd': '240ms' }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Technical Capabilities</div>
              <div className="skills-list">
                {SKILLS.map(s => (
                  <div key={s.num} className="skill-row">
                    <div className="num">{s.num}</div>
                    <div className="name">{s.name}</div>
                    <div className="cat">{s.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SHOWS = [
  { span: 'span-7', img: 'images/ed-sheeran-mathematics.jpg', title: 'Ed Sheeran — Mathematics Tour', meta: ['Stadium', 'Worldwide', '2022'], role: 'Camera Operator / LED Lead', tag: 'STADIUM / LED', desc: 'Camera operation and LED lead support for a 360° in-the-round system, including management of large-scale fiber infrastructure.' },
  { span: 'span-5', img: 'images/blink-stadium.jpg', title: 'Blink-182 — World Tour', meta: ['Stadium', 'Arena', 'Worldwide', '2023–24'], role: 'Media Server Engineer', tag: 'STADIUM / MEDIA SERVER', desc: 'Hippo media server operation supporting content playback and real-time IMAG across large-scale LED deployments.' },
  { span: 'span-5', img: 'images/blink-arena.jpg', title: 'Blink-182 — Arena Run', meta: ['Arena', 'North America'], role: 'Media Server Operator', tag: 'ARENA / MEDIA SERVER', desc: 'Resolume server operation focused on content playback, IMAG signal integrity, timecode synchronization, and backup redundancy for arena-scale deployment.' },
  { span: 'span-7', img: 'images/dermot-kennedy.jpg', title: 'Dermot Kennedy — Arena Tour', meta: ['Arena', '2019'], role: 'Media Server Tech / LED Lead', tag: 'ARENA / LED', desc: 'Media server support and lead LED engineering, ensuring system reliability and show-ready performance across the run.' },
  { span: 'span-6', img: 'images/LucyDacus.jpg', title: 'Lucy Dacus — Theatre Run', meta: ['Theatre', 'Worldwide'], role: 'Media Server Engineer / LED Lead', tag: 'THEATRE / MEDIA SERVER', desc: 'Disguise media server programming, operation, and LED leadership across the full theatre production.' },
  { span: 'span-6', img: 'images/mastodon.jpg', title: 'Mastodon — Tour', meta: ['Theatre', 'Tour'], role: 'Video Engineer', tag: 'THEATRE / VIDEO SYSTEMS', desc: 'Sole video engineer responsible for media server, LED systems, and end-to-end video workflow.' },
  { span: 'span-4', img: 'images/tlc.jpg', title: 'TLC — CrazySexyCool Tour', meta: ['Tour', '2021'], role: 'LED Engineer', tag: 'TOUR / LED', desc: 'LED engineer handling system setup, maintenance, and show support throughout the tour.' },
  { span: 'span-4', img: 'images/volbeat.jpg', title: 'Volbeat — Arena Tour', meta: ['Arena', 'USA & Europe', '2022'], role: 'Video Crew Chief / LED Lead', tag: 'ARENA / LED', desc: 'Managed video and LED crew across USA and European arena runs. Lead LED engineer for the full tour.' },
  { span: 'span-4', img: 'images/logic_tour.jpg', title: 'Logic — Arena / Theatre Tour', meta: ['Arena', 'Theatre', 'USA', '2017'], role: 'Video Director / Resolume Programmer & Operator', tag: 'ARENA / MEDIA SERVER', desc: 'FOH video direction with full Resolume programming and operation, including timecode synchronization, IMAG execution, and live cue control across the tour.' },
];

function Shows() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="meta">
            <span className="section-num">SECTION 02</span>
            <span className="eyebrow">Selected Work</span>
          </div>
          <h2 className="h-display">Recent tours<em>, residencies, broadcasts.</em></h2>
        </div>

        <div className="shows">
          {SHOWS.map((s, i) => (
            <article key={i} className={'show-card reveal ' + s.span} style={{ '--rd': (i % 2) * 100 + 'ms' }}>
              <div className="frame">
                <img src={s.img} alt={s.title}/>
                <div className="corners"><span></span><span></span><span></span><span></span></div>
                <span className="label">REC · {String(i+1).padStart(2,'0')}</span>
                <span className="timestamp">{s.tag}</span>
              </div>
              <div className="body">
                <h3>{s.title}</h3>
                <span className="role">{s.role}</span>
                <div className="meta">
                  {s.meta.map((m, j) => (
                    <React.Fragment key={j}>
                      <span>{m}</span>
                      {j < s.meta.length - 1 && <span className="sep">/</span>}
                    </React.Fragment>
                  ))}
                </div>
                {s.desc && <p className="desc">{s.desc}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRESS = [
  {
    brand: 'Panasonic',
    project: 'Ed Sheeran — Mathematics Tour',
    tag: 'PTZ CAMERA SYSTEM',
    desc: 'Production featured as part of a global case study on innovative touring camera workflows.',
    href: 'https://eu.connect.panasonic.com/gb/en/case-studies/ground-breaking-ptz-camera-use-ed-sheeran-global-mathematics-tour',
  },
  {
    brand: 'Green Hippo',
    project: 'Blink-182 — Arena Tour',
    tag: 'MEDIA SERVER / LED',
    desc: 'LED and media server systems highlighted using Hippotizer Tierra+ MK2.',
    href: 'https://www.green-hippo.com/blink-182-arena-tour-led-stage-screens-dazzle-hippotizer-tierra-mk2/',
  },
];

function FeaturedIn() {
  return (
    <section id="press" className="section press">
      <div className="wrap">
        <div className="press-header reveal">
          <span className="eyebrow"><span className="dot"></span>Featured In</span>
        </div>
        <div className="press-grid">
          {PRESS.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
               className="press-card reveal" style={{ '--rd': i * 100 + 'ms' }}>
              <div className="press-tag eyebrow">{p.tag}</div>
              <div className="press-brand">{p.brand}</div>
              <div className="press-project">{p.project}</div>
              <p className="press-desc">{p.desc}</p>
              <span className="press-cta">Read Article <span className="arrow"></span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['Blink-182', 'Ed Sheeran', 'Dermot Kennedy', 'Mastodon', 'TLC', 'Jonas Brothers', 'Lucy Dacus', 'Volbeat', 'Logic'];
  const node = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 64 }}>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span className={i % 2 === 1 ? 'alt' : ''}>{t}</span>
          <span className="star">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{node}{node}</div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="section-num reveal">SECTION 04 · CONTACT</span>
            <h2 className="h-display reveal" style={{ marginTop: 16 }}>
              Big visuals.<br/><em>Zero drama.</em>
            </h2>
          </div>
          <div className="contact-side">
            <div className="contact-block reveal">
              <span className="lab">Email</span>
              <a href="mailto:contact@nlproductions.video">contact@nlproductions.video</a>
            </div>
<div className="contact-block reveal" style={{ '--rd': '120ms' }}>
              <span className="lab">Based</span>
              <span className="val">Orlando, FL · Available worldwide</span>
            </div>
            <div className="contact-block reveal" style={{ '--rd': '180ms' }}>
              <span className="lab">Social</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/nick-lepoutre-10124687" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="https://www.instagram.com/nlproductions.video" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              </div>
            </div>
            <div className="contact-cta reveal" style={{ '--rd': '240ms' }}>
              <a href="mailto:contact@nlproductions.video" className="btn btn-accent">Check Availability <span className="arrow"></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <span>© MMXXVI · NL Production LLC</span>
        <span>Nick Lepoutre · Media Server Engineer</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

const DEFAULT_TWEAKS = {
  accent: '#f5e642',
  heroVariant: 'image',
  density: 'spacious',
};

function NLTweaks() {
  const [tw, setTweak] = useTweaks(DEFAULT_TWEAKS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tw.accent);
    document.body.classList.toggle('density-compact', tw.density === 'compact');
  }, [tw]);

  return (
    <>
      <App tweaks={tw} />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor label="Accent color" value={tw.accent} onChange={(v) => setTweak('accent', v)} />
          <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
            {['#ff5b2c', '#d4ff3a', '#7dd3fc', '#c8a96a', '#ffffff'].map(c => (
              <button key={c} onClick={() => setTweak('accent', c)}
                style={{ width: 24, height: 24, border: tw.accent === c ? '2px solid #fff' : '1px solid rgba(255,255,255,0.2)', background: c, cursor: 'pointer', borderRadius: 4 }}/>
            ))}
          </div>
        </TweakSection>
        <TweakSection title="Hero">
          <TweakRadio label="Treatment" value={tw.heroVariant}
            options={[{ label: 'Image', value: 'image' }, { label: 'Type-only', value: 'type' }]}
            onChange={(v) => setTweak('heroVariant', v)} />
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio label="Spacing" value={tw.density}
            options={[{ label: 'Spacious', value: 'spacious' }, { label: 'Compact', value: 'compact' }]}
            onChange={(v) => setTweak('density', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function App({ tweaks }) {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero tweaks={tweaks} />
      <About />
      <Marquee />
      <Shows />
      <FeaturedIn />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NLTweaks />);
