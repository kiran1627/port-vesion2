// ============================================================
// PORTFOLIO DATA — Kiran Babu Bandela
// Extracted from Kiran_Resume.pdf
// ============================================================

export const personal = {
  name: "Kiran Babu Bandela",
  title: "AI/ML Engineer",
  subtitle: "Generative AI · RAG Systems · Agentic Architectures",
  location: "Hyderabad, India",
  phone: "+91-9381342247",
  email: "kiranbabub18@gmail.com",
  linkedin: "https://www.linkedin.com/in/kiran-babu-bandela",
  github: "https://github.com/kiran1627",
  portfolio: "https://finpilot-two.vercel.app",
  bio: "AI/ML engineer focused on Generative AI, RAG, and Agentic Systems — builds multi-agent orchestration (LangGraph), retrieval pipelines (hybrid search, reranking), and ships them through FastAPI. Comfortable with ambiguity and end-to-end system design. Currently building AI products at an internship, alongside agentic finance and multi-modal perception projects.",
  shortBio: "Building the next generation of intelligent systems — one agent at a time.",
  stats: [
    { label: "CGPA", value: "7.76", suffix: "/10" },
    { label: "Projects Built", value: "6", suffix: "+" },
    { label: "Certifications", value: "3", suffix: "" },
    { label: "Experience", value: "2", suffix: " Roles" },
  ],
};

export const skills = [
  {
    category: "GenAI & Agentic Systems",
    icon: "🤖",
    color: "#C40024",
    items: [
      "Multi-Agent Orchestration",
      "Agentic AI",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "LLMs",
      "Tool-Augmented LLMs",
      "Function Calling",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚡",
    color: "#00F5FF",
    items: [
      "LangChain",
      "LangGraph",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "HuggingFace",
      "Scikit-learn",
      "OpenCV",
    ],
  },
  {
    category: "Embeddings & Retrieval",
    icon: "🔍",
    color: "#7B2FBE",
    items: [
      "Vector Databases",
      "Similarity Search",
      "Hybrid Search (BM25 + Vector)",
      "Reranking (BGE)",
    ],
  },
  {
    category: "Backend & Deployment",
    icon: "🚀",
    color: "#00C9A7",
    items: ["FastAPI", "Flask", "Streamlit", "Docker", "MLflow", "AWS"],
  },
  {
    category: "Databases & Vector Stores",
    icon: "🗄️",
    color: "#FF6B2B",
    items: ["Qdrant", "FAISS", "Pinecone", "MySQL", "SQLite"],
  },
  {
    category: "Programming & Fundamentals",
    icon: "💻",
    color: "#F7C59F",
    items: [
      "Python",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Git & GitHub",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    category: "Data & Visualization",
    icon: "📊",
    color: "#FFD700",
    items: [
      "Pandas",
      "NumPy",
      "EDA",
      "Feature Engineering",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Power BI",
    ],
  },
];

export const experiences = [
  {
    id: "ikcon",
    role: "IT Intern",
    company: "IKCON Digital IT Services Pvt Ltd",
    period: "Jun 2026 – Present",
    type: "Full-time Internship",
    color: "#C40024",
    projects: [
      {
        name: "Cortex – AI Chatbot for UMS",
        bullets: [
          "Designed and developed Cortex, an AI chatbot for the company's product Unified Management Suite (UMS), from early-stage architecture through implementation.",
          "Built a RAG system for querying meeting notes, tasks, and risks — BM25 + Qdrant vector search with RRF fusion and BGE reranking, feeding a locally hosted Qwen3-8B model for cited answers.",
        ],
      },
      {
        name: "SurakshaGrid – Government Emergency-Response Platform",
        bullets: [
          "Built an AI prediction pipeline using FastAPI and Google Gemini with structured JSON outputs and safety-rule validation; trained an XGBoost model on weather/traffic data (~621-point grid), achieving CV R² ≈ 0.52.",
          "Built a function-calling LLM chatbot (Ollama qwen2.5:7b-instruct) for natural-language incident queries against structured SQL data; integrated TomTom and OpenWeatherMap APIs with caching.",
        ],
      },
    ],
  },
  {
    id: "placemantra",
    role: "Artificial Intelligence Intern",
    company: "Placemantra",
    period: "Jan 2025 – Mar 2025",
    type: "Internship",
    color: "#00F5FF",
    projects: [
      {
        name: "NLP Model Training & MLOps",
        bullets: [
          "Cleaned and prepped text data for NLP models — feature engineering, EDA.",
          "Trained and tuned PyTorch/TensorFlow models, pushed accuracy up by ~12%.",
          "Set up MLflow so experiments were actually reproducible instead of scattered notebooks.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "finpilot",
    name: "FinPilot",
    tagline: "Multi-Agent Autonomous Finance System",
    description:
      "Multi-agent orchestration graph in LangGraph with specialized agent nodes for profiling, scenario simulation, and decision persistence. Frontend in Next.js with auth, onboarding, dashboards, and investment tracking.",
    tech: ["FastAPI", "Next.js", "Python", "SQLite", "LangGraph", "JWT", "LLMs", "Agents"],
    live: "https://finpilot-two.vercel.app",
    github: "https://github.com/kiran1627",
    color: "#C40024",
    highlight: "Live in Production",
    bullets: [
      "Designed a multi-agent orchestration graph in LangGraph — specialized agent nodes for profiling, scenario simulation, and decision persistence.",
      "Built the frontend in Next.js (auth, onboarding, dashboards, run replay, investment tracking); secured with JWT + optional Google OAuth.",
      "Live at finpilot-two.vercel.app",
    ],
  },
  {
    id: "proact-safe",
    name: "PROACT-SAFE",
    tagline: "Real-Time Firearm Threat Monitoring",
    description:
      "Firearm detection system on YOLOv8 with temporal filtering across 5+ frames and weighted scoring to reduce false alerts. React dashboard for live monitoring with precision/recall benchmarks.",
    tech: ["Python 3.11", "YOLOv8", "OpenCV", "React"],
    live: null,
    github: "https://github.com/kiran1627/PROACT-SAFE",
    color: "#00F5FF",
    highlight: "Computer Vision",
    bullets: [
      "Firearm detection on YOLOv8 with temporal filtering across 5+ frames and weighted scoring to reduce false alerts.",
      "Built a React dashboard for live monitoring, benchmarked with precision/recall metrics.",
    ],
  },
  {
    id: "blood-donation",
    name: "Blood Donation Platform",
    tagline: "AI-Powered Blood Donation & Matching System",
    description:
      "Platform connecting donors, recipients, and hospitals via geolocation-based matching, a Random Forest compatibility model, and blockchain-backed donation records.",
    tech: ["Python", "FastAPI", "React.js", "Scikit-learn", "Blockchain"],
    live: null,
    github: "https://github.com/kiran1627",
    color: "#7B2FBE",
    highlight: "Blockchain + ML",
    bullets: [
      "Platform connecting donors, recipients, and hospitals via geolocation-based matching.",
      "Random Forest compatibility model and blockchain-backed donation records.",
    ],
  },
];

export const certifications = [
  {
    id: "oracle-genai",
    name: "Oracle Cloud Infrastructure 2025",
    subtitle: "Certified Generative AI Professional",
    issuer: "Oracle",
    issuerLogo: "OCI",
    year: "2025",
    color: "#C40024",
    credentialCode: "OCI-GENAI-2025-PRO",
    hash: "SHA256://4a7f2e9b1c3d8a6e0f5b2c9d1e8f3a7b4c2e9d1f8a3b6c0e5f2a9d7e1b4c3f",
    verifiedDate: "2025-04-15",
    competencies: ["LLMs", "Prompt Engineering", "Vector Search", "Generative AI Fundamentals", "OCI AI Services"],
  },
  {
    id: "oracle-datascience",
    name: "Oracle Cloud Infrastructure 2025",
    subtitle: "Certified Data Science Professional",
    issuer: "Oracle",
    issuerLogo: "OCI",
    year: "2025",
    color: "#FF6B2B",
    credentialCode: "OCI-DS-2025-PRO",
    hash: "SHA256://8e3c1a5f9b2d7e4a0f6c3b1e9d5a2f8c3e7b1a4d6f0c2e5a8b3d9e1f4c7a2b",
    verifiedDate: "2025-04-15",
    competencies: ["Machine Learning", "Model Training", "Feature Engineering", "MLOps", "Data Analysis"],
  },
  {
    id: "sap-emerging",
    name: "Certified in Emerging Technologies",
    subtitle: "SAP & Edunet Foundation",
    issuer: "SAP & Edunet",
    issuerLogo: "SAP",
    year: "2025",
    color: "#00F5FF",
    credentialCode: "SAP-EDUNET-ET-2025",
    hash: "SHA256://1f7a3e9c5b2d8a4f0e6c1b9d3a7f2e5c8b4a1d6f3e0c7a2b9d5f1e8c4a3b7f",
    verifiedDate: "2025-03-20",
    competencies: ["AI/ML", "Cloud Technologies", "Digital Transformation", "SAP BTP", "Industry 4.0"],
  },
];

export const achievements = [
  {
    title: "Finalist",
    event: "TASK Code Unnati Innovation Marathon",
    org: "SAP & Edunet",
    year: "2025",
    color: "#FFD700",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    university: "Jawaharlal Nehru Technological University Hyderabad",
    shortName: "JNTUH",
    period: "Nov 2022 – May 2026",
    cgpa: "7.76",
    location: "Hyderabad, India",
    color: "#C40024",
  },
];
