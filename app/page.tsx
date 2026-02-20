const EMAIL = "osmanfatihkilic@gmail.com";

const experience = [
  { company: "Just Appraised", title: "ML Engineer Team Lead", date: "2026–Present" },
  { company: "Just Appraised", title: "Senior ML Engineer II", date: "2025–2026" },
  { company: "Just Appraised", title: "Senior ML Engineer", date: "2022–2025" },
  { company: "Just Appraised", title: "ML Engineer", date: "2021–2022" },
  { company: "Yapi Kredi Technology", title: "Junior ML Engineer", date: "2019–2021" },
  { company: "CognitiveScale", title: "ML Engineer Intern", date: "2018" },
  { company: "UT Austin", title: "Research Assistant", date: "2017–2018" },
  { company: "Bilkent University", title: "Research Assistant", date: "2015–2017" },
  { company: "Turkish Aerospace (TAI)", title: "Industry Co-op", date: "2014–2015" },
];

const publications = [
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
];

const skills = [
  "Python", "PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost",
  "SQL", "Pandas", "NumPy", "OpenAI API", "Hugging Face",
  "LangChain", "LlamaIndex", "FAISS", "Pinecone", "Docker",
  "Airflow", "MLflow", "Azure AI", "AWS", "FastAPI",
  "Git", "CI/CD", "Elasticsearch", "PostgreSQL",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-6">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <header className="pt-20 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">
          Osman Fatih Kilic
        </h1>
        <p className="text-stone-500 text-lg mb-6 font-light">
          ML Engineer Team Lead · Istanbul
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="text-stone-500 hover:text-stone-900 transition-colors duration-200"
          >
            Email ↗
          </a>
          <a
            href="https://linkedin.com/in/osmanfatihkilic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-900 transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/osmanfatih"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-900 transition-colors duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="/cv.pdf"
            download="Osman_Fatih_Kilic_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-900 text-stone-50 text-xs font-medium rounded-full hover:bg-stone-700 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
            Download CV
          </a>
        </div>
      </header>

      {/* About */}
      <section className="py-12 border-t border-stone-100">
        <SectionLabel>About</SectionLabel>
        <p className="text-stone-600 leading-relaxed max-w-lg">
          Machine learning engineer with a decade of experience spanning NLP,
          distributed systems, and applied AI. Currently leading an ML team
          building intelligent valuation systems. Background in signal
          processing research with publications in IEEE venues.
        </p>
      </section>

      {/* Experience */}
      <section className="py-12 border-t border-stone-100">
        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-1">
          {experience.map((role, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-4 py-2 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                <span className="text-sm font-medium text-stone-800">
                  {role.company}
                </span>
                <span className="text-sm text-stone-400">{role.title}</span>
              </div>
              <span className="text-xs text-stone-400 whitespace-nowrap shrink-0 tabular-nums">
                {role.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-12 border-t border-stone-100">
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium text-stone-800">
              M.S. Electrical Engineering
            </div>
            <div className="text-sm text-stone-400 mt-0.5">
              Bilkent University · 3.57/4.0 · 2015–2017
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-stone-800">
              B.S. Electrical Engineering
            </div>
            <div className="text-sm text-stone-400 mt-0.5">
              Bilkent University · 3.85/4.0 · 2011–2015
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 border-t border-stone-100">
        <SectionLabel>Awards</SectionLabel>
        <div className="space-y-2">
          {[
            { year: "2017", text: "Research Fellowship, UT Austin" },
            { year: "2016", text: "IEEE Best Student Paper Award, SIU Conference" },
            { year: "2011–15", text: "High Honor Student & Comprehensive Scholarship, Bilkent" },
          ].map((a, i) => (
            <div key={i} className="flex items-baseline gap-3 text-sm">
              <span className="text-stone-400 tabular-nums shrink-0 w-12">{a.year}</span>
              <span className="text-stone-600">{a.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 border-t border-stone-100">
        <SectionLabel>Selected Publications</SectionLabel>
        <div className="space-y-3">
          {publications.map((pub, i) => (
            <div key={i} className="text-sm leading-relaxed">
              <span className="text-stone-700">{pub.title}</span>
              <span className="text-stone-400"> — {pub.venue}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 border-t border-stone-100">
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 bg-stone-100 text-stone-500 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 border-t border-stone-100 text-xs text-stone-400">
        <p>Istanbul, Turkey · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
