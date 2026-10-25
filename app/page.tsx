import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siyu Lin — Peking University",
  description:
    "Siyu Lin — Computer Science and Applied Mathematics student at Peking University working on reinforcement learning, synthetic data, multi-agent systems, and LLMs for robotics.",
};

const experiences = [
  {
    period: "2026—",
    place: "Tencent Hunyuan · RL & STEM Team, Top Talent Program",
    role: "Research Engineer Intern",
    detail:
      "Focused on enhancing models’ agentic reasoning abilities and exploring new topics in post-training.",
  },
  {
    period: "2026",
    place: "UC Berkeley",
    role: "Visiting Student Scholar · advised by Prof. Zeyu Zheng",
    detail:
      "Exploring reinforcement-learning infrastructure and scalable training systems.",
  },
  {
    period: "2025",
    place: "Peking University · HMI Lab",
    role: "Research Assistant · advised by Prof. Shanghang Zhang",
    detail:
      "Exploring post-training methods for vision-language-action (VLA) models and agent systems.",
  },
  {
    period: "2025",
    place: "JoinQuant",
    role: "Quantitative Research Intern",
    detail: "Alpha research and quantitative strategy development.",
  },
];

const publications = [
  {
    title: "Economy of Minds: Emerging Multi-Agent Intelligence with Economic Interactions",
    meta: "2026 · NeurIPS",
  },
  {
    title:
      "SEEA-R1: Tree-Structured Reinforcement Fine-Tuning for Self-Evolving Embodied Agents",
    meta: "2025 · NeurIPS",
  },
  {
    title: "LLMxMapReduce-V3: Interactive In-Depth Survey Generation",
    meta: "2025 · EMNLP System Demonstration",
  },
  {
    title: "SUPERChem: A Multimodal Reasoning Benchmark in Chemistry",
    meta: "2025 · arXiv preprint",
  },
  {
    title: "Loong: Synthesize Long Chain-of-Thoughts at Scale through Verifiers",
    meta: "2025 · NeurIPS Workshop",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Siyu Lin home">
          Siyu Lin <span>林思宇</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="/gallery">Gallery</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="kicker">Research profile · San Francisco / US</p>
            <h1 id="intro-title">
              Siyu Lin <span>林思宇</span>
            </h1>
            <p className="role">
              Undergraduate Student
              <br />
              Peking University
            </p>
            <a className="email" href="mailto:siyu_lin@stu.pku.edu.cn">
              siyu_lin@stu.pku.edu.cn
            </a>
          </div>
          <img
            className="profile-photo"
            src="/images/profile.jpg"
            alt="Siyu Lin working at a desk"
          />
        </section>

        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <div className="section-copy">
            <p>
              I am a Computer Science and Applied Mathematics student at Yuanpei College,
              Peking University. I have substantial experience in reinforcement learning,
              synthetic data, and multi-agent systems.
            </p>
            <p>
              I continue to explore the limits of scaling agentic systems and the frontiers
              of large language models in science and robotics. I am currently especially
              interested in LLMs for robotics.
            </p>
            <p>
              Please feel free to reach out if you would like to connect or collaborate.
              Beyond research, I keep a quieter visual practice through photography; a small
              selection is collected in the <a href="/gallery">gallery</a>.
            </p>
          </div>
        </section>

        <section className="content-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={experience.place}>
                <time>{experience.period}</time>
                <div>
                  <h3>{experience.place}</h3>
                  <p>{experience.role}</p>
                  <span>{experience.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section"
          id="publications"
          aria-labelledby="publications-title"
        >
          <h2 id="publications-title">Selected Publications</h2>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article key={publication.title}>
                <span className="publication-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>
                    {publication.title}{" "}
                    <span className="publication-meta">· {publication.meta}</span>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Siyu Lin</span>
        <span>Peking University · San Francisco, US</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
