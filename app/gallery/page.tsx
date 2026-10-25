import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Siyu Lin",
  description: "A photography gallery by Siyu Lin.",
};

const photos = [
  {
    src: "/images/gallery/03.jpg",
    alt: "Golden morning mist drifting through a wide forest valley",
    title: "Mist, Before Morning",
  },
  {
    src: "/images/gallery/39.jpg",
    alt: "A star-filled night sky above a moonlit volcanic valley",
    title: "Altitude, 02:13",
  },
  {
    src: "/images/gallery/45.jpg",
    alt: "A lone figure standing on a breakwater beneath an open sky",
    title: "The Long Pause",
  },
  {
    src: "/images/gallery/114.jpg",
    alt: "Rows of chairs crossed by long bands of golden light",
    title: "The Quiet Classroom",
  },
  {
    src: "/images/gallery/117.jpg",
    alt: "A long band of sunset reflected over calm water",
    title: "Water Keeps the Light",
  },
  {
    src: "/images/gallery/93.jpg",
    alt: "A sharp white chapel glowing against a pink dusk sky",
    title: "Chapel at Dusk",
  },
];

export default function GalleryPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Siyu Lin home">
          Siyu Lin <span>林思宇</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#about">About</a>
          <a href="/#experience">Experience</a>
          <a href="/#publications">Publications</a>
          <a href="/gallery">Gallery</a>
        </nav>
      </header>

      <main>
        <section className="gallery-intro">
          <p className="kicker">Visual notes · 视野之外</p>
          <h1>
            Field of <span>View</span>
          </h1>
          <p>
            Photography is a quieter parallel practice: an archive of attention,
            light, and the spaces between observations.
          </p>
        </section>

        <section className="gallery-grid" aria-label="Photography gallery">
          {photos.map((photo, index) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>
                <strong>{photo.title}</strong>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Siyu Lin</span>
        <a href="/">Back to home ↑</a>
      </footer>
    </div>
  );
}
