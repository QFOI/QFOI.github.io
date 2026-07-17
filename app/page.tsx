"use client";

import { useEffect, useState } from "react";

const studies = [
  {
    src: "/images/study-01.jpg",
    title: "Still Courtyard",
    place: "Cam Ranh · 2026",
    credit: "Unsplash / Duy Hoang",
  },
  {
    src: "/images/study-02.jpg",
    title: "Measured Light",
    place: "Mardin · 2026",
    credit: "Unsplash / Yasin Onuş",
  },
  {
    src: "/images/study-03.jpg",
    title: "Stone & Shadow",
    place: "Study No. 03",
    credit: "Unsplash / Long Chung",
  },
  {
    src: "/images/study-04.jpg",
    title: "A Place to Pause",
    place: "Wuxi · 2026",
    credit: "Unsplash / Alan Jiang",
  },
  {
    src: "/images/study-05.jpg",
    title: "Reflection",
    place: "Night Study · 2026",
    credit: "Unsplash / Duy Hoang",
  },
  {
    src: "/images/study-06.jpg",
    title: "Threshold",
    place: "Lindos · 2026",
    credit: "Unsplash / Timiciuc Andrei",
  },
];

const research = [
  {
    no: "01",
    title: "Science Agent",
    text: "Exploring agents that reason, use tools, and remain dependable across long scientific workflows.",
    meta: "Agentic systems · Scientific reasoning",
    href: "https://github.com/QFOI/Science-Agent",
  },
  {
    no: "02",
    title: "Learning to Optimise",
    text: "Notes and experiments at the intersection of reinforcement learning, search, and optimisation.",
    meta: "Reinforcement learning · Optimisation",
    href: "https://github.com/QFOI/Optimization",
  },
  {
    no: "03",
    title: "Distributed Intelligence",
    text: "Systems for scaling language-model work through decomposition, coordination, and careful evaluation.",
    meta: "LLM systems · Multi-agent collaboration",
    href: "https://github.com/QFOI/LLMxMapReduce-v3",
  },
];

const journal = [
  { date: "07 · 2026", title: "What makes an agent trustworthy?", tag: "Research note" },
  { date: "06 · 2026", title: "On attention, memory, and long horizons", tag: "Field note" },
  { date: "05 · 2026", title: "A small atlas of quiet systems", tag: "Essay" },
];

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const enter = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") setEntered(true);
    };
    window.addEventListener("keydown", enter);
    return () => window.removeEventListener("keydown", enter);
  }, []);

  return (
    <main className={entered ? "site is-entered" : "site"}>
      <button
        className="entry"
        type="button"
        onClick={() => setEntered(true)}
        aria-label="Enter Siyu Lin's portfolio"
        aria-hidden={entered}
        tabIndex={entered ? -1 : 0}
      >
        <span className="entry__wash" aria-hidden="true" />
        <span className="entry__topline">
          <span>QFOI · ARCHIVE</span>
          <span>BEIJING / CN</span>
          <span>MMXXVI</span>
        </span>

        <span className="entry__composition">
          <span className="entry__portrait-wrap">
            <span className="entry__portrait-ring" aria-hidden="true" />
            <img
              className="entry__portrait"
              src="/images/avatar.jpg"
              alt="Siyu Lin walking beneath spring trees"
            />
            <span className="entry__portrait-caption">SIYU LIN · 林思宇</span>
          </span>

          <span className="entry__axis" aria-hidden="true">
            <span>CT</span>
            <span className="entry__axis-line" />
            <span>001</span>
          </span>

          <span className="entry__statement">
            <span className="entry__coordinates">39°54′ N&nbsp;&nbsp; 116°23′ E</span>
            <span className="entry__quote">
              To look closely
              <br />
              is already a form
              <br />
              of thinking.
            </span>
            <span className="entry__note">
              Computer science, intelligent systems,
              <br />and the art of sustained attention.
            </span>
          </span>
        </span>

        <span className="entry__enter">
          <span>ENTER</span>
          <span className="entry__enter-rule" />
          <span>轻触进入</span>
        </span>
      </button>

      <div className="page" aria-hidden={!entered}>
        <header className="nav-shell">
          <a className="wordmark" href="#introduction" aria-label="Siyu Lin — home">
            <span>SL</span>
            <span className="wordmark__name">Siyu Lin</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#introduction">Introduction</a>
            <a href="#research">Research</a>
            <a href="#journal">Journal</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cv-link" href="#cv">
            CV <span aria-hidden="true">↘</span>
          </a>
        </header>

        <section className="hero" id="introduction" aria-labelledby="intro-title">
          <div className="hero__mosaic" aria-hidden="true">
            {studies.map((study, index) => (
              <figure className={`hero__tile hero__tile--${index + 1}`} key={study.src}>
                <img src={study.src} alt="" />
              </figure>
            ))}
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__folio" aria-hidden="true">
            <span>PORTFOLIO</span>
            <span>NO. 01 — 26</span>
          </div>
          <article className="intro-card">
            <p className="eyebrow">Introduction · 自序</p>
            <h1 id="intro-title">
              Siyu Lin
              <span>林思宇</span>
            </h1>
            <p className="intro-card__lead">
              I study intelligent systems—how they learn, reason, collaborate,
              and remain useful over long horizons.
            </p>
            <p className="intro-card__body">
              Computer Science at Yuanpei College, Peking University. I move
              between research, engineering, and photography, looking for the
              quiet structure beneath complicated things.
            </p>
            <div className="intro-card__interests">
              <span>INTERESTS</span>
              <p>Agentic AI · Reinforcement Learning · Scientific Discovery · Visual Culture</p>
            </div>
            <a className="text-link" href="#research">
              Continue to selected work <span aria-hidden="true">↓</span>
            </a>
          </article>
          <div className="hero__scroll" aria-hidden="true">
            <span>SCROLL TO DISCOVER</span>
            <span className="hero__scroll-line" />
          </div>
        </section>

        <section className="section research" id="research" aria-labelledby="research-title">
          <div className="section-heading">
            <p className="eyebrow">01 · Selected enquiries</p>
            <h2 id="research-title">Research</h2>
            <p className="section-heading__aside">
              Work in progress, shaped by curiosity and a preference for systems
              that earn our trust.
            </p>
          </div>
          <div className="research-list">
            {research.map((item) => (
              <a className="research-item" href={item.href} target="_blank" rel="noreferrer" key={item.no}>
                <span className="research-item__no">{item.no}</span>
                <span className="research-item__content">
                  <span className="research-item__meta">{item.meta}</span>
                  <strong>{item.title}</strong>
                  <span className="research-item__text">{item.text}</span>
                </span>
                <span className="research-item__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <aside className="cv-panel" id="cv">
            <div>
              <p className="eyebrow">Curriculum vitae</p>
              <h3>Education &amp; focus</h3>
            </div>
            <dl>
              <div>
                <dt>Present</dt>
                <dd>B.S. candidate · Yuanpei College, Peking University</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Computer Science · Intelligent Systems · Reinforcement Learning</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>Beijing, China</dd>
              </div>
            </dl>
            <a href="https://github.com/QFOI" target="_blank" rel="noreferrer">
              View full record on GitHub <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>

        <section className="section journal" id="journal" aria-labelledby="journal-title">
          <div className="journal__intro">
            <p className="eyebrow">02 · Notes in the margin</p>
            <h2 id="journal-title">Journal</h2>
            <p>
              Short observations from research, reading, and the unfinished
              work between an idea and a system.
            </p>
          </div>
          <div className="journal__entries">
            {journal.map((entry) => (
              <article className="journal-entry" key={entry.title}>
                <p><span>{entry.date}</span><span>{entry.tag}</span></p>
                <h3>{entry.title}</h3>
                <span className="journal-entry__status">Forthcoming</span>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="gallery__heading">
            <p className="eyebrow">03 · Photographic studies</p>
            <h2 id="gallery-title">Field of View</h2>
            <p>
              A visual notebook of thresholds, intervals, reflected light, and
              places that make time feel slower.
            </p>
          </div>
          <div className="gallery__grid">
            {studies.map((study, index) => (
              <figure className={`gallery-card gallery-card--${index + 1}`} key={study.title}>
                <img src={study.src} alt={`${study.title}, ${study.place}`} />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{study.title}</strong>
                    <small>{study.place}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="gallery__credit">
            Photography placeholders from Unsplash; replace with personal work for the final exhibition.
          </p>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__number">04</div>
          <p className="eyebrow">Contact · 会面</p>
          <h2 id="contact-title">Let’s make time<br />for a good question.</h2>
          <p className="contact__copy">
            I welcome thoughtful conversations around intelligent systems,
            research collaboration, and visual practice.
          </p>
          <div className="contact__links">
            <a href="https://github.com/QFOI" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.pku.edu.cn/" target="_blank" rel="noreferrer">Peking University <span>↗</span></a>
          </div>
          <p className="contact__availability"><span /> Beijing · Available by appointment</p>
        </section>

        <footer className="footer">
          <span>© 2026 SIYU LIN</span>
          <span>BEIJING · CHINA</span>
          <a href="#introduction">RETURN TO STILLNESS ↑</a>
        </footer>
      </div>
    </main>
  );
}
