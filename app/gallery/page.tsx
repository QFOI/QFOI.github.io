import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Siyu Lin",
  description: "A photography gallery by Siyu Lin.",
};

const photos = [
  {
    src: "/images/gallery/03.jpg",
    alt: "Mist, Before Morning",
    title: "Mist, Before Morning",
  },
  {
    src: "/images/gallery/13.jpg",
    alt: "Reeds at Dusk",
    title: "Reeds at Dusk",
  },
  {
    src: "/images/gallery/15.jpg",
    alt: "Pale Horizon",
    title: "Pale Horizon",
  },
  {
    src: "/images/gallery/18-1.jpg",
    alt: "Crater Lake I",
    title: "Crater Lake I",
  },
  {
    src: "/images/gallery/18-2.jpg",
    alt: "Crater Lake II",
    title: "Crater Lake II",
  },
  {
    src: "/images/gallery/18-3.jpg",
    alt: "Crater Lake III",
    title: "Crater Lake III",
  },
  {
    src: "/images/gallery/19.jpg",
    alt: "Through the Gorge",
    title: "Through the Gorge",
  },
  {
    src: "/images/gallery/25.jpg",
    alt: "Moon, Boat, Branch",
    title: "Moon, Boat, Branch",
  },
  {
    src: "/images/gallery/29.jpg",
    alt: "Still Crescent",
    title: "Still Crescent",
  },
  {
    src: "/images/gallery/31.jpg",
    alt: "A Line of Evening",
    title: "A Line of Evening",
  },
  {
    src: "/images/gallery/36.jpg",
    alt: "Valley, Held",
    title: "Valley, Held",
  },
  {
    src: "/images/gallery/39.jpg",
    alt: "Altitude, 02:13",
    title: "Altitude, 02:13",
  },
  {
    src: "/images/gallery/40.jpg",
    alt: "Blue Hour Ridge",
    title: "Blue Hour Ridge",
  },
  {
    src: "/images/gallery/45.jpg",
    alt: "The Long Pause",
    title: "The Long Pause",
  },
  {
    src: "/images/gallery/46.jpg",
    alt: "A Chair for Light",
    title: "A Chair for Light",
  },
  {
    src: "/images/gallery/59.jpg",
    alt: "Eaves in Spring",
    title: "Eaves in Spring",
  },
  {
    src: "/images/gallery/72.jpg",
    alt: "One Golden Tower",
    title: "One Golden Tower",
  },
  {
    src: "/images/gallery/76.jpg",
    alt: "Mountain Veil",
    title: "Mountain Veil",
  },
  {
    src: "/images/gallery/78.jpg",
    alt: "White Forest I",
    title: "White Forest I",
  },
  {
    src: "/images/gallery/79.jpg",
    alt: "White Forest II",
    title: "White Forest II",
  },
  {
    src: "/images/gallery/80.jpg",
    alt: "White Forest III",
    title: "White Forest III",
  },
  {
    src: "/images/gallery/83.jpg",
    alt: "Frozen Sun",
    title: "Frozen Sun",
  },
  {
    src: "/images/gallery/86.jpg",
    alt: "Between Columns",
    title: "Between Columns",
  },
  {
    src: "/images/gallery/88.jpg",
    alt: "White Silence I",
    title: "White Silence I",
  },
  {
    src: "/images/gallery/89.jpg",
    alt: "White Silence II",
    title: "White Silence II",
  },
  {
    src: "/images/gallery/91.jpg",
    alt: "White Silence III",
    title: "White Silence III",
  },
  {
    src: "/images/gallery/93.jpg",
    alt: "Chapel at Dusk",
    title: "Chapel at Dusk",
  },
  {
    src: "/images/gallery/94.jpg",
    alt: "First Flight I",
    title: "First Flight I",
  },
  {
    src: "/images/gallery/95.jpg",
    alt: "First Flight II",
    title: "First Flight II",
  },
  {
    src: "/images/gallery/96.jpg",
    alt: "First Flight III",
    title: "First Flight III",
  },
  {
    src: "/images/gallery/97.jpg",
    alt: "After the Bell",
    title: "After the Bell",
  },
  {
    src: "/images/gallery/102.jpg",
    alt: "Lighthouse in Blue",
    title: "Lighthouse in Blue",
  },
  {
    src: "/images/gallery/108.jpg",
    alt: "Afterimage",
    title: "Afterimage",
  },
  {
    src: "/images/gallery/109.jpg",
    alt: "Seat at Dusk",
    title: "Seat at Dusk",
  },
  {
    src: "/images/gallery/112.jpg",
    alt: "Red Wall, Passing Shadow",
    title: "Red Wall, Passing Shadow",
  },
  {
    src: "/images/gallery/114.jpg",
    alt: "The Quiet Classroom",
    title: "The Quiet Classroom",
  },
  {
    src: "/images/gallery/115.jpg",
    alt: "Corridor of Light",
    title: "Corridor of Light",
  },
  {
    src: "/images/gallery/117.jpg",
    alt: "Water Keeps the Light",
    title: "Water Keeps the Light",
  },
  {
    src: "/images/gallery/120.jpg",
    alt: "Night Passage",
    title: "Night Passage",
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
