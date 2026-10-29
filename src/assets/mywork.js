import verbi_img from './VerBI.png';
import snapmaster_img from './SnapMasterIcon.png';
import promptedge_img from './PromptEdge.jpg';

// status: "live" | "dev" | "prototype"  (drives the badge colour in MyWork.css)
const mywork_data = [
  {
    w_no: 1,
    w_name: "EditHero (VidhAstra)",
    w_status: "dev",
    w_status_label: "In active development",
    w_tagline: "Premiere Pro extension suite + AI backend",
    w_desc:
      "A dual-host (CEP + UXP) Adobe Premiere Pro extension with 20+ editing tools: AI transcription and viral captions, silence remover, multicam, reframe, colour grading, motion tracking, 3D carousel and an MCP bridge so Claude can drive Premiere. A full script → export → metadata → thumbnail → YouTube publish pipeline sits on a Spring Boot backend with plan gating, quotas and Razorpay payments.",
    w_tech: ["React", "TypeScript", "Spring Boot", "ExtendScript", "Razorpay", "Gemini"],
    w_link: "https://edithero.netlify.app",
    w_link_label: "Visit website"
  },
  {
    w_no: 2,
    w_name: "SnapMaster – Screenshot & Editor",
    w_img: snapmaster_img,
    w_status: "live",
    w_status_label: "Live · v3 editor rolling out",
    w_tagline: "Chrome extension",
    w_desc:
      "Full-page, area and visible-area screenshots. Full-page capture scrolls and stitches on an offscreen canvas, handling inner scrollers and fixed headers. The v3 editor is object-based with ~25 tools, layers, beautify, blur, PDF export, history gallery and auto-copy.",
    w_tech: ["JavaScript", "Chrome MV3", "Canvas", "IndexedDB", "React (website)"],
    w_link: "https://chromewebstore.google.com/detail/snapmaster-–-screenshot-e/bllhjhfajpclmnlogplcfjjnlkmnlfmp",
    w_link_label: "Chrome Web Store",
    w_link2: "https://snapmaster-screenshot.netlify.app",
    w_link2_label: "Website"
  },
  {
    w_no: 3,
    w_name: "VerBI",
    w_img: verbi_img,
    w_status: "live",
    w_status_label: "Live",
    w_tagline: "English learning for Tamil speakers",
    w_desc:
      "Grammar lessons explained in Tamil, AI-powered doubt clarification and interactive speaking practice, backed by a Spring Boot API and PostgreSQL with Gemini for the AI features.",
    w_tech: ["React", "Spring Boot", "PostgreSQL", "Gemini API"],
    w_link: "https://verbi-ai.netlify.app",
    w_link_label: "Open app"
  },
  {
    w_no: 4,
    w_name: "PromptEdge",
    w_img: promptedge_img,
    w_status: "live",
    w_status_label: "Live",
    w_tagline: "Chrome extension",
    w_desc: "Published on the Chrome Web Store.",
    w_tech: ["JavaScript", "Chrome Extension APIs"],
    w_link: "https://chromewebstore.google.com/detail/promptedge/bmghmbjhikdailncbdicbocjgedllnee",
    w_link_label: "Chrome Web Store"
  },

  // Hidden until development is finished: TARKA, YOUDONT, Kalyanam, WriteWise, Sruti
  /*
  {
    w_no: 5,
    w_name: "TARKA – AI Browser Assistant",
    w_status: "dev",
    w_status_label: "Built · v1.0",
    w_tagline: "Chrome extension",
    w_desc:
      "An in-browser AI agent: side-panel chat on any page, page-aware answers, screenshot Q&A, slash commands, YouTube summaries, file drop and page monitoring.",
    w_tech: ["JavaScript", "Chrome MV3", "Side Panel API", "LLM APIs"]
  },
  {
    w_no: 6,
    w_name: "YOUDONT",
    w_status: "dev",
    w_status_label: "Built · v1.6.9",
    w_tagline: "Chrome extension",
    w_desc:
      "Removes YouTube distractions: related videos, Shorts, comments, homepage recommendations and trending, with per-section toggles.",
    w_tech: ["JavaScript", "Chrome MV3", "CSS injection"]
  },
  {
    w_no: 7,
    w_name: "Kalyanam",
    w_status: "dev",
    w_status_label: "In development",
    w_tagline: "Wedding hall booking platform",
    w_desc:
      "BookMyShow-style venue booking for three roles (user, owner, admin): atomic 5-minute date locks, Razorpay payments, owner venue management and admin approvals across a web app, a mobile app and one API.",
    w_tech: ["Next.js", "React Native", "Node.js", "MongoDB", "Razorpay"]
  },
  {
    w_no: 8,
    w_name: "WriteWise",
    w_status: "dev",
    w_status_label: "In development",
    w_tagline: "Local-first writing assistant",
    w_desc:
      "A Grammarly-style grammar and style platform that runs on local models (Ollama) with Gemini as an option, built as a tested monorepo.",
    w_tech: ["TypeScript", "Ollama", "Gemini", "Monorepo"]
  },
  {
    w_no: 9,
    w_name: "Sruti",
    w_status: "prototype",
    w_status_label: "Research prototype",
    w_tagline: "Tanglish speech recognition",
    w_desc:
      "An own Tamil + English (Tanglish) speech model for EditHero captions: pseudo-label distillation, Kaggle T4 training and int8 CPU deployment. The pipeline works end to end; model training is still ahead.",
    w_tech: ["Python", "PyTorch", "ASR", "ONNX / int8"]
  }
  */
];

export default mywork_data;
