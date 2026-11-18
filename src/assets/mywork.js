import verbiImage from "./VerBI.png";
import snapmasterImage from "./SnapMasterIcon.png";
import promptedgeImage from "./PromptEdge.jpg";
import younoImage from "./YouNo.jpg";
import youscriptImage from "./YouScript.jpg";

const projects = [
  {
    w_no: 1,
    w_name: "Freely (Soul)",
    w_category: "Web apps",
    w_status: "live",
    w_status_label: "Live web app",
    w_tagline: "English learning across web and mobile",
    w_desc:
      "An English-learning platform with AI conversations, grammar support, speaking practice, lessons and synced progress. The Node.js backend supports real-time communication, multiple AI providers and separate product modules, including the migrated Verbi API.",
    w_tech: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "AI APIs",
    ],
    w_link: "https://freely-web.netlify.app",
    w_link_label: "Explore Freely",
  },
  {
    w_no: 2,
    w_name: "VerBI",
    w_category: "Web apps",
    w_img: verbiImage,
    w_status: "live",
    w_status_label: "Live web app",
    w_tagline: "English learning for Tamil speakers",
    w_desc:
      "Grammar and mini-lessons with Tamil explanations, vocabulary and verb libraries, and Gemini-powered document Q&A. Originally built with Spring Boot and PostgreSQL, its API was ported to Node.js and MongoDB, then integrated into the Freely backend with separate accounts and data.",
    w_tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Gemini API",
      "Spring Boot",
      "PostgreSQL",
    ],
    w_link: "https://verbi-ai.netlify.app",
    w_link_label: "Explore VerBI",
  },
  {
    w_no: 3,
    w_name: "EditHero (VidhAstra)",
    w_category: "Creative tools",
    w_status: "dev",
    w_status_label: "In active development",
    w_tagline: "Editing tools for Adobe Premiere Pro",
    w_desc:
      "A Premiere Pro extension suite with CEP/UXP panels, an ExtendScript host bridge and AI-assisted editing workflows. Work includes transcription, captions, editing automation, a publishing pipeline, plan quotas and Razorpay integration, backed by Spring Boot.",
    w_tech: [
      "React",
      "TypeScript",
      "Spring Boot",
      "CEP / UXP",
      "ExtendScript",
      "Gemini API",
      "Razorpay",
    ],
    w_link: "https://edithero.netlify.app",
    w_link_label: "Visit EditHero",
  },
  {
    w_no: 4,
    w_name: "YouScript",
    w_category: "Extensions",
    w_img: youscriptImage,
    w_status: "live",
    w_status_label: "Chrome extension",
    w_tagline: "Read, navigate and work with YouTube transcripts",
    w_desc:
      "A YouTube transcript and chapter reader with searchable lines, playback-following highlights, timestamp navigation and subtitle exports. The product also includes Gemini-backed summary, Q&A and translation services with caching and usage limits in the shared Freely backend.",
    w_tech: ["JavaScript", "Chrome MV3", "Node.js", "MongoDB", "Gemini API"],
    w_link: "https://youscript-ytscript.netlify.app",
    w_link_label: "Visit YouScript",
    w_link2:
      "https://chromewebstore.google.com/detail/youscript-%E2%80%93-youtube-trans/afjkadehppclmlcklmmncmalmoehejcl",
    w_link2_label: "Chrome Web Store",
  },
  {
    w_no: 5,
    w_name: "SnapMaster",
    w_category: "Extensions",
    w_img: snapmasterImage,
    w_status: "live",
    w_status_label: "Chrome extension",
    w_tagline: "Screenshot capture and editing",
    w_desc:
      "Full-page, selected-area and visible-area screenshot capture with canvas stitching. An object-based editor brings annotation, layers, blur, beautification, PDF export and a local history gallery into the browser.",
    w_tech: ["JavaScript", "Chrome MV3", "Canvas", "IndexedDB", "React"],
    w_link: "https://snapmaster-screenshot.netlify.app",
    w_link_label: "Visit SnapMaster",
    w_link2:
      "https://chromewebstore.google.com/detail/snapmaster-–-screenshot-e/bllhjhfajpclmnlogplcfjjnlkmnlfmp",
    w_link2_label: "Chrome Web Store",
  },
  {
    w_no: 6,
    w_name: "YouNo",
    w_category: "Extensions",
    w_img: younoImage,
    w_status: "live",
    w_status_label: "Chrome extension",
    w_tagline: "A more focused YouTube experience",
    w_desc:
      "A distraction blocker with granular controls for recommendations, Shorts, comments and other YouTube surfaces. Includes searchable settings, saved presets, time-based switching, side-panel controls and backup/restore, with preferences stored locally.",
    w_tech: ["JavaScript", "Chrome MV3", "CSS injection", "React"],
    w_link: "https://youno-ytblocker.netlify.app/features",
    w_link_label: "Explore features",
    w_link2:
      "https://chromewebstore.google.com/detail/youno-distraction-blocker/dpkbdjejpnamackklnflnlllmacmelbj",
    w_link2_label: "Chrome Web Store",
  },
  {
    w_no: 7,
    w_name: "PromptEdge",
    w_category: "Extensions",
    w_img: promptedgeImage,
    w_status: "live",
    w_status_label: "Chrome extension",
    w_tagline: "Prompt creation and optimization",
    w_desc:
      "A browser extension for generating and refining prompts for AI tools. Built and published with the surrounding product work: store listing, release management and browser-extension integration.",
    w_tech: ["JavaScript", "Chrome Extension APIs"],
    w_link:
      "https://chromewebstore.google.com/detail/promptedge/bmghmbjhikdailncbdicbocjgedllnee",
    w_link_label: "Chrome Web Store",
  },
];
export default projects;
