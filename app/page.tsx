"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

type GalleryPhoto = {
  id: string;
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
};

type GalleryBlock = {
  type: "lead" | "duo" | "trio" | "solo" | "small" | "cinema";
  photos: string[];
};

type GalleryChapter = {
  no: string;
  title: string;
  chinese: string;
  line: string;
  tone: "warm" | "charcoal" | "mist" | "night";
  blocks: GalleryBlock[];
};

const photos: Record<string, GalleryPhoto> = {
  "03": { id: "03", src: "/images/gallery/03.jpg", title: "Mist, Before Morning", alt: "Golden morning mist drifting through a wide forest valley", width: 1620, height: 1080 },
  "13": { id: "13", src: "/images/gallery/13.jpg", title: "Reeds at Dusk", alt: "Fine reeds silhouetted against a muted evening sky", width: 1620, height: 1080 },
  "15": { id: "15", src: "/images/gallery/15.jpg", title: "Pale Horizon", alt: "A pale, minimal sea horizon with distant figures", width: 1620, height: 1080 },
  "18-1": { id: "18-1", src: "/images/gallery/18-1.jpg", title: "Crater Lake I", alt: "Vertical view into a mountain crater lake", width: 1080, height: 1620 },
  "18-2": { id: "18-2", src: "/images/gallery/18-2.jpg", title: "Crater Lake II", alt: "Blue crater lake framed by dark volcanic rock", width: 1080, height: 1620 },
  "18-3": { id: "18-3", src: "/images/gallery/18-3.jpg", title: "Crater Lake III", alt: "A final vertical study of the crater lake and distant ridges", width: 1080, height: 1620 },
  "19": { id: "19", src: "/images/gallery/19.jpg", title: "Through the Gorge", alt: "A narrow gorge falling toward a green mountain valley", width: 1080, height: 1620 },
  "25": { id: "25", src: "/images/gallery/25.jpg", title: "Moon, Boat, Branch", alt: "A boat and crescent moon held inside a dark lattice of branches", width: 1620, height: 1080 },
  "29": { id: "29", src: "/images/gallery/29.jpg", title: "Still Crescent", alt: "A quiet crescent shoreline in pastel light", width: 1620, height: 1080 },
  "31": { id: "31", src: "/images/gallery/31.jpg", title: "A Line of Evening", alt: "Dark mountain silhouettes under a fading amber sky", width: 1620, height: 1080 },
  "36": { id: "36", src: "/images/gallery/36.jpg", title: "Valley, Held", alt: "A green mountain valley held between steep ridges", width: 1500, height: 1080 },
  "39": { id: "39", src: "/images/gallery/39.jpg", title: "Altitude, 02:13", alt: "A star-filled night sky above a moonlit volcanic valley", width: 1470, height: 1080 },
  "40": { id: "40", src: "/images/gallery/40.jpg", title: "Blue Hour Ridge", alt: "Mountain ridges emerging in cool blue dawn light", width: 1440, height: 1080 },
  "45": { id: "45", src: "/images/gallery/45.jpg", title: "The Long Pause", alt: "A lone figure standing on a breakwater beneath an open sky", width: 1620, height: 1080 },
  "46": { id: "46", src: "/images/gallery/46.jpg", title: "A Chair for Light", alt: "An orange chair and table cut by a rectangle of sunlight", width: 1620, height: 1080 },
  "59": { id: "59", src: "/images/gallery/59.jpg", title: "Eaves in Spring", alt: "Pavilion eaves and flowering branches around the sun", width: 1080, height: 1440 },
  "72": { id: "72", src: "/images/gallery/72.jpg", title: "One Golden Tower", alt: "An illuminated pagoda rising between dark branches", width: 1080, height: 1922 },
  "76": { id: "76", src: "/images/gallery/76.jpg", title: "Mountain Veil", alt: "Layered mountains receding into silver mist", width: 1440, height: 1080 },
  "78": { id: "78", src: "/images/gallery/78.jpg", title: "White Forest I", alt: "Snow-covered trees viewed from above", width: 1440, height: 1080 },
  "79": { id: "79", src: "/images/gallery/79.jpg", title: "White Forest II", alt: "A solitary person beneath a winter halo", width: 600, height: 800 },
  "80": { id: "80", src: "/images/gallery/80.jpg", title: "White Forest III", alt: "A dense forest softened by fresh snow", width: 1440, height: 1080 },
  "83": { id: "83", src: "/images/gallery/83.jpg", title: "Frozen Sun", alt: "Orange winter sun reflected across a frozen lake", width: 1922, height: 1080 },
  "86": { id: "86", src: "/images/gallery/86.jpg", title: "Between Columns", alt: "A coral sunset seen through monumental dark columns", width: 1922, height: 1080 },
  "88": { id: "88", src: "/images/gallery/88.jpg", title: "White Silence I", alt: "A snow-covered corner tower reflected in still water", width: 1920, height: 1080 },
  "89": { id: "89", src: "/images/gallery/89.jpg", title: "White Silence II", alt: "Red palace walls and white tiled roofs in snow", width: 1620, height: 1080 },
  "91": { id: "91", src: "/images/gallery/91.jpg", title: "White Silence III", alt: "Layered palace roofs receding through snowfall", width: 1620, height: 1080 },
  "93": { id: "93", src: "/images/gallery/93.jpg", title: "Chapel at Dusk", alt: "A sharp white chapel glowing against a pink dusk sky", width: 1080, height: 1440 },
  "94": { id: "94", src: "/images/gallery/94.jpg", title: "First Flight I", alt: "Sea birds circling a soft sunrise", width: 1080, height: 1440 },
  "95": { id: "95", src: "/images/gallery/95.jpg", title: "First Flight II", alt: "A flock of birds crossing the morning sea", width: 2016, height: 1134 },
  "96": { id: "96", src: "/images/gallery/96.jpg", title: "First Flight III", alt: "A single bird passing above a low sun", width: 1080, height: 1440 },
  "97": { id: "97", src: "/images/gallery/97.jpg", title: "After the Bell", alt: "The same chapel at night with two figures below", width: 1080, height: 1440 },
  "102": { id: "102", src: "/images/gallery/102.jpg", title: "Lighthouse in Blue", alt: "A small lighthouse beside a blue-grey sea", width: 1621, height: 1080 },
  "108": { id: "108", src: "/images/gallery/108.jpg", title: "Afterimage", alt: "A narrow abstract streak of warm sunset cloud", width: 1620, height: 1080 },
  "109": { id: "109", src: "/images/gallery/109.jpg", title: "Seat at Dusk", alt: "An empty bench facing a lake at dusk", width: 1920, height: 1080 },
  "112": { id: "112", src: "/images/gallery/112.jpg", title: "Red Wall, Passing Shadow", alt: "Tree shadows moving across a red wall and grey roof", width: 1080, height: 1440 },
  "114": { id: "114", src: "/images/gallery/114.jpg", title: "The Quiet Classroom", alt: "Rows of chairs crossed by long bands of golden light", width: 1080, height: 1439 },
  "115": { id: "115", src: "/images/gallery/115.jpg", title: "Corridor of Light", alt: "A long corridor ending in warm afternoon light", width: 1080, height: 1439 },
  "117": { id: "117", src: "/images/gallery/117.jpg", title: "Water Keeps the Light", alt: "A long band of sunset reflected over calm water", width: 2159, height: 1080 },
  "120": { id: "120", src: "/images/gallery/120.jpg", title: "Night Passage", alt: "A narrow stone passage lit by warm lamps at night", width: 1080, height: 1440 },
};

const heroStudies = [photos["03"], photos["39"], photos["93"], photos["88"], photos["45"], photos["114"]];

const galleryChapters: GalleryChapter[] = [
  {
    no: "I",
    title: "First Light",
    chinese: "光的边缘",
    line: "Light arrives before language. I follow what it reveals, and what it chooses to leave quiet.",
    tone: "warm",
    blocks: [
      { type: "lead", photos: ["03"] },
      { type: "duo", photos: ["13", "46"] },
      { type: "cinema", photos: ["39"] },
      { type: "solo", photos: ["40"] },
      { type: "duo", photos: ["31", "83"] },
      { type: "cinema", photos: ["108"] },
    ],
  },
  {
    no: "II",
    title: "At Altitude",
    chinese: "山的时间",
    line: "At elevation, scale becomes physical: stone, weather, and distance redraw the measure of a day.",
    tone: "charcoal",
    blocks: [
      { type: "duo", photos: ["19", "36"] },
      { type: "trio", photos: ["18-1", "18-2", "18-3"] },
      { type: "solo", photos: ["76"] },
      { type: "trio", photos: ["78", "79", "80"] },
    ],
  },
  {
    no: "III",
    title: "Water Holds Memory",
    chinese: "水的记忆",
    line: "A horizon is never empty. It keeps every passing body, colour, and interval for one more moment.",
    tone: "mist",
    blocks: [
      { type: "duo", photos: ["15", "45"] },
      { type: "duo", photos: ["25", "29"] },
      { type: "trio", photos: ["94", "95", "96"] },
      { type: "duo", photos: ["102", "109"] },
      { type: "lead", photos: ["117"] },
    ],
  },
  {
    no: "IV",
    title: "Thresholds",
    chinese: "门槛之后",
    line: "Architecture is a way of editing light. Every doorway decides what may enter, and what remains outside.",
    tone: "night",
    blocks: [
      { type: "solo", photos: ["93"] },
      { type: "small", photos: ["97"] },
      { type: "cinema", photos: ["86"] },
      { type: "duo", photos: ["112", "59"] },
      { type: "duo", photos: ["72", "120"] },
      { type: "trio", photos: ["88", "89", "91"] },
      { type: "duo", photos: ["114", "115"] },
    ],
  },
];

const gallerySequence = galleryChapters.flatMap((chapter) =>
  chapter.blocks.flatMap((block) => block.photos.map((id) => ({ ...photos[id], chapter: chapter.title }))),
);

const photoIndexById = new Map(gallerySequence.map((photo, index) => [photo.id, index]));

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

const notes = [
  { date: "07 · 2026", title: "What makes an agent trustworthy?", tag: "Research note" },
  { date: "06 · 2026", title: "On attention, memory, and long horizons", tag: "Field note" },
  { date: "05 · 2026", title: "A small atlas of quiet systems", tag: "Essay" },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const lastPhotoTrigger = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (entered || activePhotoIndex !== null) return;
    const enter = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") setEntered(true);
    };
    window.addEventListener("keydown", enter);
    return () => window.removeEventListener("keydown", enter);
  }, [activePhotoIndex, entered]);

  useEffect(() => {
    if (!entered) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [entered]);

  useEffect(() => {
    if (activePhotoIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActivePhotoIndex(null);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActivePhotoIndex((current) => current === null ? null : (current - 1 + gallerySequence.length) % gallerySequence.length);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActivePhotoIndex((current) => current === null ? null : (current + 1) % gallerySequence.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activePhotoIndex]);

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    window.setTimeout(() => lastPhotoTrigger.current?.focus(), 0);
  };

  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    lastPhotoTrigger.current = trigger;
    setActivePhotoIndex(index);
  };

  const activePhoto = activePhotoIndex === null ? null : gallerySequence[activePhotoIndex];

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
            <span className="entry__portrait-clip">
              <img className="entry__portrait" src="/images/profile.jpg" alt="Siyu Lin working at a desk" />
            </span>
            <span className="entry__portrait-caption">SIYU LIN · 林思宇</span>
          </span>

          <span className="entry__axis" aria-hidden="true">
            <span>CT</span>
            <span className="entry__axis-line" />
            <span>039</span>
          </span>

          <span className="entry__statement">
            <span className="entry__coordinates">39°54′ N&nbsp;&nbsp; 116°23′ E</span>
            <span className="entry__quote">To look closely<br />is already a form<br />of thinking.</span>
            <span className="entry__note">Computer science, intelligent systems,<br />and the art of sustained attention.</span>
          </span>
        </span>

        <span className="entry__enter">
          <span>ENTER</span>
          <span className="entry__enter-rule" />
          <span>轻触进入</span>
        </span>
      </button>

      <div className="page" aria-hidden={!entered} inert={!entered ? true : undefined}>
        <header className="nav-shell">
          <a className="wordmark" href="#introduction" aria-label="Siyu Lin — home">
            <span>SL</span><span className="wordmark__name">Siyu Lin</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#introduction">Introduction</a>
            <a href="#research">Research</a>
            <a href="#blogs">Blogs</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="cv-link" href="#cv">CV <span aria-hidden="true">↘</span></a>
        </header>

        <section className="hero" id="introduction" aria-labelledby="intro-title">
          <div className="hero__mosaic" aria-hidden="true">
            {heroStudies.map((study, index) => (
              <figure className={`hero__tile hero__tile--${index + 1}`} key={study.id}>
                <img src={study.src} alt="" width={study.width} height={study.height} fetchPriority={index < 2 ? "high" : undefined} />
              </figure>
            ))}
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__folio" aria-hidden="true"><span>PORTFOLIO</span><span>NO. 01 — 26</span></div>
          <article className="intro-card">
            <p className="eyebrow">Introduction · 自序</p>
            <h1 id="intro-title">Siyu Lin<span>林思宇</span></h1>
            <p className="intro-card__lead">I study intelligent systems—how they learn, reason, collaborate, and remain useful over long horizons.</p>
            <p className="intro-card__body">Computer Science at Yuanpei College, Peking University. I move between research, engineering, and photography, looking for the quiet structure beneath complicated things.</p>
            <div className="intro-card__interests"><span>INTERESTS</span><p>Agentic AI · Reinforcement Learning · Scientific Discovery · Visual Culture</p></div>
            <a className="text-link" href="#research">Continue to selected work <span aria-hidden="true">↓</span></a>
          </article>
          <div className="hero__scroll" aria-hidden="true"><span>SCROLL TO DISCOVER</span><span className="hero__scroll-line" /></div>
        </section>

        <section className="section research" id="research" aria-labelledby="research-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">01 · Selected enquiries</p>
            <h2 id="research-title">Research</h2>
            <p className="section-heading__aside">Work in progress, shaped by curiosity and a preference for systems that earn our trust.</p>
          </div>
          <div className="research-list">
            {research.map((item) => (
              <a className="research-item" href={item.href} target="_blank" rel="noreferrer" key={item.no} data-reveal>
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
          <aside className="cv-panel" id="cv" data-reveal>
            <div><p className="eyebrow">Curriculum vitae</p><h3>Education &amp; focus</h3></div>
            <dl>
              <div><dt>Present</dt><dd>B.S. candidate · Yuanpei College, Peking University</dd></div>
              <div><dt>Focus</dt><dd>Computer Science · Intelligent Systems · Reinforcement Learning</dd></div>
              <div><dt>Based</dt><dd>Beijing, China</dd></div>
            </dl>
            <a href="https://github.com/QFOI" target="_blank" rel="noreferrer">View full record on GitHub <span aria-hidden="true">↗</span></a>
          </aside>
        </section>

        <section className="section journal" id="blogs" aria-labelledby="blogs-title">
          <div className="journal__intro" data-reveal>
            <p className="eyebrow">02 · Notes in the margin</p>
            <h2 id="blogs-title">Blogs</h2>
            <p>Short observations from research, reading, and the unfinished work between an idea and a system.</p>
          </div>
          <div className="journal__entries">
            {notes.map((entry) => (
              <article className="journal-entry" key={entry.title} data-reveal>
                <p><span>{entry.date}</span><span>{entry.tag}</span></p>
                <h3>{entry.title}</h3>
                <span className="journal-entry__status">Forthcoming</span>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="gallery__heading" data-reveal>
            <p className="eyebrow">03 · Photographic archive</p>
            <div><h2 id="gallery-title">Field of View</h2><span className="gallery__chinese">视野之外</span></div>
            <p>Thirty-nine photographs selected from a larger personal archive, arranged as four movements rather than a chronology.</p>
          </div>

          {galleryChapters.map((chapter) => (
            <article className={`gallery-chapter gallery-chapter--${chapter.tone}`} key={chapter.no}>
              <header className="gallery-chapter__header" data-reveal>
                <span className="gallery-chapter__no">{chapter.no}</span>
                <div><p>{chapter.chinese}</p><h3>{chapter.title}</h3></div>
                <p className="gallery-chapter__line">{chapter.line}</p>
              </header>

              <div className="gallery-chapter__body">
                {chapter.blocks.map((block, blockIndex) => (
                  <div className={`gallery-block gallery-block--${block.type}`} key={`${chapter.no}-${blockIndex}`}>
                    {block.photos.map((id, photoIndex) => {
                      const photo = photos[id];
                      const globalIndex = photoIndexById.get(id) ?? 0;
                      const frameStyle = {
                        "--photo-ratio": `${photo.width} / ${photo.height}`,
                        "--delay": `${photoIndex * 90}ms`,
                      } as CSSProperties;
                      return (
                        <figure className={`gallery-frame gallery-frame--${id}`} style={frameStyle} key={id} data-reveal>
                          <button className="gallery-frame__button" type="button" onClick={(event) => openPhoto(globalIndex, event.currentTarget)} aria-label={`Open ${photo.title}`}>
                            <span className="gallery-frame__media">
                              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
                            </span>
                            <span className="gallery-frame__open" aria-hidden="true">VIEW ↗</span>
                          </button>
                          <figcaption><span>{String(globalIndex + 1).padStart(2, "0")}</span><strong>{photo.title}</strong><small>Study {photo.id}</small></figcaption>
                        </figure>
                      );
                    })}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__number">04</div>
          <p className="eyebrow">Contact · 会面</p>
          <h2 id="contact-title">Let’s make time<br />for a good question.</h2>
          <p className="contact__copy">I welcome thoughtful conversations around intelligent systems, research collaboration, and visual practice.</p>
          <div className="contact__links">
            <a href="https://github.com/QFOI" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.pku.edu.cn/" target="_blank" rel="noreferrer">Peking University <span>↗</span></a>
          </div>
          <p className="contact__availability"><span /> Beijing · Available by appointment</p>
        </section>

        <footer className="footer"><span>© 2026 SIYU LIN</span><span>BEIJING · CHINA</span><a href="#introduction">RETURN TO STILLNESS ↑</a></footer>
      </div>

      {activePhoto && activePhotoIndex !== null ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${activePhoto.title} image viewer`} onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}>
          <button className="lightbox__close" type="button" onClick={closeLightbox} aria-label="Close image viewer">CLOSE ×</button>
          <button className="lightbox__nav lightbox__nav--previous" type="button" onClick={() => setActivePhotoIndex((activePhotoIndex - 1 + gallerySequence.length) % gallerySequence.length)} aria-label="Previous photograph">←</button>
          <figure className="lightbox__figure">
            <img src={activePhoto.src} alt={activePhoto.alt} width={activePhoto.width} height={activePhoto.height} style={{ maxWidth: `${Math.min(activePhoto.width, 1800)}px` }} />
            <figcaption><span>{String(activePhotoIndex + 1).padStart(2, "0")} / {gallerySequence.length}</span><strong>{activePhoto.title}</strong><small>{activePhoto.chapter}</small></figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" type="button" onClick={() => setActivePhotoIndex((activePhotoIndex + 1) % gallerySequence.length)} aria-label="Next photograph">→</button>
        </div>
      ) : null}
    </main>
  );
}
