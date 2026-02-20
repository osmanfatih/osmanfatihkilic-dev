export default function Home() {
  const email = "osmanfatihkilic@gmail.com";

  return (
    <>
      {/* Hero */}
      <header className="pt-24 pb-20">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Osman Fatih Kilic
        </h1>
        <p className="text-[var(--muted)] text-[17px] mb-5">
          ML Engineer Team Lead · Istanbul
        </p>
        <div className="flex gap-5 text-sm">
          <a
            href={`mailto:${email}`}
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/osmanfatihkilic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/osmanfatih"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* About */}
      <section className="py-10 border-t border-[var(--border)]">
        <h2 className="text-xs font-medium uppercase tracking-[1.5px] text-[var(--muted)] mb-7">
          About
        </h2>
        <p className="text-[var(--text)] text-base max-w-[520px]">
          Machine learning engineer with a decade of experience spanning NLP,
          distributed systems, and applied AI. Currently leading an ML team
          building intelligent valuation systems. Background in signal
          processing research with publications in IEEE venues.
        </p>
      </section>

      {/* Experience */}
      <section className="py-10 border-t border-[var(--border)]">
        <h2 className="text-xs font-medium uppercase tracking-[1.5px] text-[var(--muted)] mb-7">
          Experience
        </h2>
        {[
          { company: "Just Appraised", title: "ML Engineer Team Lead", date: "2026–Present" },
          { company: "Just Appraised", title: "Senior ML Engineer II", date: "2025–2026" },
          { company: "Just Appraised", title: "Senior ML Engineer", date: "2022–2025" },
          { company: "Just Appraised", title: "ML Engineer", date: "2021–2022" },
          { company: "Yapi Kredi Technology", title: "Junior ML Engineer", date: "2019–2021" },
          { company: "CognitiveScale", title: "ML Engineer Intern", date: "2018" },
          { company: "UT Austin", title: "Research Assistant", date: "2017–2018" },
          { company: "Bilkent University", title: "Research Assistant", date: "2015–2017" },
          { company: "Turkish Aerospace (TAI)", title: "Industry Co-op", date: "2014–2015" },
        ].map((role, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline py-1.5 gap-4"
          >
            <div className="text-[15px]">
              <span className="font-medium">{role.company}</span>{" "}
              <span className="text-[var(--muted)]">— {role.title}</span>
            </div>
            <span className="text-[13px] text-[var(--accent)] whitespace-nowrap shrink-0">
              {role.date}
            </span>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="py-10 border-t border-[var(--border)]">
        <h2 className="text-xs font-medium uppercase tracking-[1.5px] text-[var(--muted)] mb-7">
          Education
        </h2>
        <div className="space-y-2">
          <div>
            <div className="text-[15px] font-medium">M.S. Electrical Engineering</div>
            <div className="text-[14px] text-[var(--muted)]">Bilkent University · 3.57/4.0 · 2015–2017</div>
          </div>
          <div>
            <div className="text-[15px] font-medium">B.S. Electrical Engineering</div>
            <div className="text-[14px] text-[var(--muted)]">Bilkent University · 3.85/4.0 · 2011–2015</div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-10 border-t border-[var(--border)]">
        <h2 className="text-xs font-medium uppercase tracking-[1.5px] text-[var(--muted)] mb-7">
          Awards
        </h2>
        <div className="space-y-1">
          {[
            { year: "2017", text: "Research Fellowship, UT Austin" },
            { year: "2016", text: "IEEE Best Student Paper Award, SIU Conference" },
            { year: "2011–15", text: "High Honor Student & Comprehensive Scholarship, Bilkent" },
          ].map((a, i) => (
            <div key={i} className="text-[15px]">
              <span className="text-[var(--muted)] text-[13px] mr-2">{a.year}</span>
              — {a.text}
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="py-10 border-t border-[var(--border)]">
        <h2 className="text-xs font-medium uppercase tracking-[1.5px] text-[var(--muted)] mb-7">
          Selected Publications
        </h2>
        <div className="space-y-2">
          {[
            { title: "Conversation Management in Task-Oriented Turkish Dialogue Agents with Dialogue Act Classification", venue: "KDIR, 2020" },
            { title: "Large Scale Intent Detection in Turkish Short Sentences with Contextual Word Embeddings", venue: "KDIR, 2020" },
            { title: "Domain-Independent, Task-Oriented Chatbot Creation and Conversation Policy Management Framework", venue: "Workshop on Hybrid Intelligence for NLP Tasks, 2020" },
            { title: "Near-Optimal Distributed Estimation for a Network of Sensing Units Operating Under Communication Constraints", venue: "CDC, 2018" },
            { title: "Team-Optimal Online Estimation of Dynamic Parameters over Distributed Networks", venue: "Signal Processing, 2018" },
            { title: "Resource-Aware Event Triggered Distributed Estimation Over Adaptive Networks", venue: "Digital Signal Processing, 2017" },
            { title: "An Efficient Mixture of Experts Method for Big Data Applications", venue: "ICASSP, 2017" },
            { title: "Computationally Highly Efficient Mixture of Adaptive Filters", venue: "Signal Image and Video Processing, 2016" },
            { title: "Adaptive Hierarchical Space Partitioning for Online Classification", venue: "EUSIPCO, 2016" },
            { title: "Visual Guidance System for Satellite Rendezvous Applications", venue: "RAST, 2015" },
          ].map((pub, i) => (
            <div key={i} className="text-[14px] leading-relaxed">
              {pub.title}{" "}
              <span className="text-[var(--muted)]">— {pub.venue}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-10 border-t border-[var(--border)]">
        <h2 className="text-xs font-medium uppercase tracking-[1.5px] text-[var(--muted)] mb-7">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost",
            "SQL", "Pandas", "NumPy", "OpenAI API", "Hugging Face",
            "LangChain", "LlamaIndex", "FAISS", "Pinecone", "Docker",
            "Airflow", "MLflow", "Azure AI", "AWS", "FastAPI",
            "Git", "CI/CD", "Elasticsearch", "PostgreSQL",
          ].map((skill) => (
            <span
              key={skill}
              className="text-[13px] px-3.5 py-1 bg-[var(--tag-bg)] rounded-full text-[var(--muted)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[var(--border)] text-[13px] text-[var(--accent)]">
        <div className="flex gap-4 mb-4">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4L12 13 2 4"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/osmanfatih"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M12 .3a12 12 0 00-3.8 23.38c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 011.84 1.24 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 011.24-3.22 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.38 11.38 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 01.12 3.18 4.64 4.64 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92a2.87 2.87 0 01.82 2.23v3.29c0 .32.21.7.82.58A12 12 0 0012 .3"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/osmanfatihkilic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--text)] text-[var(--bg)] hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.75 1.75 0 0024 22.27V1.73A1.75 1.75 0 0022.22 0z"/>
            </svg>
          </a>
        </div>
        <span>Istanbul, Turkey</span>
      </footer>
    </>
  );
}
