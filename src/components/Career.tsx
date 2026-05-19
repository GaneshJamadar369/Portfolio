import "./styles/Career.css";

interface CareerItem {
  role: string;
  date: string;
  org: string;
  description: string;
  type: "education" | "work";
}

const educationItems: CareerItem[] = [
  {
    role: "HSC",
    date: "2021",
    org: "K.R.T. Arts, B.H. Commerce, and A.M. Science College",
    description:
      "Completed Higher Secondary Certificate with a focus on core sciences and mathematics. Scored 90%, laying the foundation for engineering studies.",
    type: "education",
  },
  {
    role: "B.Tech in Computer Science",
    date: "2023 – 2027",
    org: "Government College of Engineering, Chandrapur",
    description:
      "Pursuing B.Tech with a CGPA of 8.8/10.0, deepening expertise in Algorithms, Agentic AI Systems, and Software Engineering.",
    type: "education",
  },
  {
    role: "BS in Data Science",
    date: "2023 – Now",
    org: "Indian Institute of Technology, Madras",
    description:
      "Awarded a Fully Funded CSR Scholarship for academic potential and perseverance. Focusing on Data Science, Machine Learning, and Research methodologies.",
    type: "education",
  },
];

const experienceItems: CareerItem[] = [
  {
    role: "Research Intern — LLMs & KV Cache",
    date: "May 2026 – Present",
    org: "IIT Bombay · Mumbai",
    description:
      "Researching KV Cache compression for large language models — tackling the memory bottleneck in long-context transformer inference. Exploring token eviction, quantization-aware compression, and attention-efficient architectures to make LLMs faster and leaner at scale.",
    type: "work",
  },
  {
    role: "Agentic AI Intern",
    date: "Apr 2026 – Present",
    org: "LOQO AI · Remote",
    description:
      "Spearheading agentic prompt engineering and workflow optimization for a next-gen OTT video generation platform — think Netflix, built smarter. Shipping production AI pipelines and testing end-to-end autonomous workflows.",
    type: "work",
  },
  {
    role: "Technical Trainer & SDE",
    date: "Feb 2026 – Present",
    org: "Neuro Edge Technologies · Pune (Remote)",
    description:
      "Serving as technical faculty and SDE under a revenue-sharing model. Managing demand-driven training sessions in AI/ML and full-stack software development.",
    type: "work",
  },
  {
    role: "Research Intern — Cryptography",
    date: "Jan 2026 – Present",
    org: "KnotTheory.ai · Remote, Fremont CA",
    description:
      "Researching a Camera Zoom-based Paper-Pencil Cipher Encryption Scheme built atop the Merkle–Hellman Knapsack Cryptosystem. Collaborating internationally with researchers from Xi'an Jiaotong-Liverpool University.",
    type: "work",
  },
  {
    role: "Agentic AI Intern",
    date: "Nov 2025 – Feb 2026",
    org: "Infosys Springboard · Remote",
    description:
      "Built an autonomous learning agent using LangGraph and LLMs with reasoning and self-reflection capabilities. Engineered Feynman pedagogy workflows for adaptive questioning. Secured 1st Place at VSM Hackathon 2026.",
    type: "work",
  },
  {
    role: "Research Intern — Multimodal AI",
    date: "May 2024 – Apr 2025",
    org: "IIT Roorkee · Remote",
    description:
      "Architected a multimodal emotion recognition system fusing Speech (MFCC) and Text (BERT embeddings). Implemented cross-modal attention mechanisms and conducted ablation studies for superior accuracy.",
    type: "work",
  },
  {
    role: "Operations & Recruitment Associate",
    date: "Dec 2021 – Jul 2022",
    org: "Essbee Fire Services · Mumbai",
    description:
      "Led a 20-member team to streamline recruitment and daily operations. Managed 1,000+ database records with 100% accuracy. Coordinated national-level order logistics and finance collaboration.",
    type: "work",
  },
];

const CareerCard = ({ item, index }: { item: CareerItem; index: number }) => (
  <div className="career-card">
    {/* Dashed top border line */}
    <div className="career-border-top">
      <svg width="100%" height="100%">
        <line
          x1="0" y1="0" x2="100%" y2="0"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
          strokeDasharray="6,6"
        />
      </svg>
    </div>
    {/* Corner accent */}
    <div className="career-corner"></div>

    <div className="career-card-left">
      <div className="career-card-number">0{index + 1}</div>
      <div className="career-card-bar"></div>
    </div>
    <div className="career-card-content">
      <div className="career-card-header">
        <div className="career-card-title-group">
          <h4>{item.role}</h4>
          <h5>{item.org}</h5>
        </div>
        <span className="career-card-date">{item.date}</span>
      </div>
      <div className="career-card-reveal">
        <p>{item.description}</p>
        <div className="career-card-line"></div>
      </div>
    </div>
  </div>
);

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-cards">
          {educationItems.map((item, i) => (
            <CareerCard key={i} item={item} index={i} />
          ))}
        </div>

        <h2 style={{ marginTop: "100px" }}>
          Experience <span>&</span>
          <br /> Internships
        </h2>
        <div className="career-cards">
          {experienceItems.map((item, i) => (
            <CareerCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
