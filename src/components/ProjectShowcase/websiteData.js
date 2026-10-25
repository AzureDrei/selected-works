const placeholderProject = (id, platform) => ({
  id,
  platform,
  title: `Placeholder Project ${id}`,
  description: "A short description of this automation project goes here.",
  image: "/projects/placeholder-main.webp",
  overview:
    "Describe the problem this project solves, how the workflow operates, and the outcome it delivers.",
  tools: ["Tool One", "Tool Two", "Tool Three"],
  gallery: [
    "/projects/placeholder-detail-1.webp",
    "/projects/placeholder-detail-2.webp",
    "/projects/placeholder-detail-3.webp",
  ],
  demoUrl: "",
  githubUrl: "",
});

export const automationProjects = [
  {
    platform: "n8n",
    description: "Workflow orchestration and integrations.",
    projects: [
      {
        id: 1,
        platform: "n8n",
        title: "AI-Powered Booking & Payment Verification",
        description:
          "A knowledge-based chatbot connected to payment verification and automated booking.",
        image: "/pictures/automation/knowledge-based-ai-booking-system.jpg",
        overview:
          "An AI-powered booking workflow that answers user questions using a knowledge base, collects payment receipts, and routes them to an administrator for approval. Once approved, the workflow processes the booking and integrates with Google Calendar.",
        tools: [
          "n8n",
          "Google Gemini",
          "Google Drive",
          "Discord",
          "Google Calendar",
        ],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 2,
        platform: "n8n",
        title: "n8n-to-MongoDB Backend Integration",
        description:
          "A custom backend integration connecting GoHighLevel to n8n through HTTP requests, with Node.js, Express, and MongoDB for contact data management.",
        image: "/pictures/automation/GHL-mongoDB-1.jpg",
        overview:
          "A backend integration project exploring how workflow automation tools can communicate with a custom-built API. The project connects GoHighLevel webhooks to n8n, which forwards contact data through HTTP requests to a Node.js and Express backend, with MongoDB planned as the persistent data store. It demonstrates how low-code automation can work alongside custom backend development to create a flexible integration pipeline.",
        tools: [
          "n8n",
          "Node.js",
          "Express.js",
          "MongoDB",
          "ngrok",
          "GoHighLevel",
        ],
        gallery: [
          "/pictures/automation/GHL-mongoDB-2.jpg",
          "/pictures/automation/GHL-mongoDB-3.jpg",
          "/pictures/automation/GHL-mongoDB-4.jpg",
          "/pictures/automation/GHL-mongoDB-5.jpg",
        ],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 3,
        platform: "n8n",
        title: "Knowledge-Based Chatbot with Automated GHL Booking",
        description:
          "An AI-powered booking assistant that extracts customer details, manages GoHighLevel contacts, and automates appointment scheduling using n8n.",
        image: "/pictures/automation/knowledge-based-chatbot-GHL-booking.jpg",
        overview:
          "An AI-powered, knowledge-based chatbot designed to answer customer questions, collect relevant booking information, and automate appointment scheduling through GoHighLevel. The workflow uses a connected knowledge source to provide contextual responses while extracting customer details and checking for existing contacts. It integrates with GoHighLevel to create new contacts when necessary and facilitate appointment booking through the calendar system.",
        tools: ["n8n", "Google Gemini", "GoHighLevel"],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 4,
        platform: "n8n",
        title: "QuoteCanvas — AI Quote & Image Generator",
        description:
          "QuoteCanvas is an automated content generation project designed to turn inspirational quotes into visually engaging graphics. It combines text generation and image selection to streamline the creation of shareable content, reducing the need to manually source quotes, find suitable images, and assemble each design.",
        image: "/pictures/automation/QuoteCanvas.jpg",
        overview:
          "An AI-powered, knowledge-based chatbot designed to answer customer questions, collect relevant booking information, and automate appointment scheduling through GoHighLevel. The workflow uses a connected knowledge source to provide contextual responses while extracting customer details and checking for existing contacts. It integrates with GoHighLevel to create new contacts when necessary and facilitate appointment booking through the calendar system.",
        tools: ["n8n", "Google Gemini", "Pixabay"],
        gallery: [
          "/pictures/automation/QuoteCanvas-1.jpg",
          "/pictures/automation/QuoteCanvas-2.jpg",
          "/pictures/automation/QuoteCanvas-3.jpg",
        ],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 5,
        platform: "n8n",
        title: "Facebook AI Chatbot Integration",
        description:
          "An AI-powered Facebook chatbot that uses a knowledge source to answer user questions through an automated n8n workflow.",
        image: "/pictures/automation/fb-ai-chatbot.jpg",
        overview:
          "This project integrates a Facebook chatbot with an AI agent through n8n to automate responses to incoming messages. By connecting a document-based knowledge source with Google Gemini and conversational memory, the chatbot can provide context-aware answers to user inquiries, creating a more convenient and responsive messaging experience.",
        tools: ["n8n", "Google Gemini", "Facebook Messenger"],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },
    ],
  },
  {
    platform: "Zapier",
    description: "Connected applications and automated tasks.",
    projects: [
      {
        id: 1,
        platform: "Zapier",
        title: "WeatherWatch — Automated Weather Reporting",
        description:
          "A scheduled weather automation that retrieves weather data, logs it in Google Sheets, and sends automated updates to Discord using Zapier.",
        image: "/pictures/automation/zapier-openweathermap.jpg",
        overview:
          "WeatherWatch is an automated weather reporting workflow designed to collect and organize weather information without manual intervention. Using a scheduled trigger, the workflow retrieves weather data through a webhook, records the results in Google Sheets, and delivers updates to a Discord channel. It provides a simple way to maintain a weather log while keeping relevant information accessible through automated notifications.",
        tools: ["Zapier", "Openweather", "Discord"],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 2,
        platform: "Zapier",
        title: "LeadFlow — Automated Lead Enrichment & Scoring",
        description:
          "An automated lead enrichment workflow that uses Apollo to enrich contact data, scores leads, and routes them into hot or cold lead follow-up paths.",
        image: "/pictures/automation/zapier-lead-enrichment.jpg",
        overview:
          "LeadFlow is a lead management automation built with Zapier that enriches incoming lead information using Apollo and evaluates leads based on a scoring system. The workflow categorizes leads into high-priority and low-priority groups, helping organize prospects according to their potential value and direct them toward appropriate follow-up processes.",
        tools: ["Zapier", "Apollo"],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 3,
        platform: "Zapier",
        title: "ContentFlow AI — Automated Content Repurposing",
        description:
          "An AI-powered workflow that validates uploaded MP4 videos, generates transcripts, and transforms video content into blog articles using Zapier.",
        image: "/pictures/automation/zapier-content-repurposing.jpg",
        overview:
          "ContentFlow AI is an automated content repurposing workflow that transforms video content into written material. When an MP4 file is uploaded to a designated Google Drive folder, Zapier detects the new file, validates its format, and uses AI to transcribe the video and generate a blog article from its content. The workflow reduces manual transcription and writing effort while helping turn existing video assets into reusable content.",
        tools: ["Zapier", "AI by Zapier"],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },
    ],
  },
  {
    platform: "GoHighLevel",
    description: "CRM systems, lead capture, and marketing automation.",
    projects: [
      {
        id: 1,
        platform: "GoHighLevel",
        title: "Automated Pipeline & Tags Management",
        description:
          "A GoHighLevel workflow that organizes form submissions by creating pipeline opportunities, applying contact tags, and updating lead statuses.",
        image: "/pictures/automation/GHL-pipeline-automation.jpg",
        overview:
          "ContentFlow AI is an automated content repurposing workflow that transforms video content into written material. When an MP4 file is uploaded to a designated Google Drive folder, Zapier detects the new file, validates its format, and uses AI to transcribe the video and generate a blog article from its content. The workflow reduces manual transcription and writing effort while helping turn existing video assets into reusable content.",
        tools: ["GHL", "GHL Pipeline", "GHL Tags"],
        gallery: [],
        demoUrl: "",
        githubUrl: "",
      },

      {
        id: 2,
        platform: "GoHighLevel",
        title: "Appointment & Attendance Automation",
        description:
          "A GoHighLevel workflow that automates appointment reminders, tracks attendance, updates pipeline stages, and triggers feedback or rebooking actions.",
        image: "/pictures/automation/GHL-appointment-followup-1.jpg",
        overview:
          "A GoHighLevel appointment management automation designed to manage the client journey before and after a scheduled appointment. It sends appointment reminders 24 hours before the event, follows up with the instructor to confirm attendance, and updates the client's pipeline status based on the outcome. Depending on attendance, the workflow either sends a feedback form or initiates a rebooking process.",
        tools: ["GHL"],
        gallery: [
          "/pictures/automation/GHL-appointment-followup-2.jpg",
          "/pictures/automation/GHL-appointment-followup-3.jpg",
        ],
        demoUrl: "",
        githubUrl: "",
      },
    ],
  },
];

export const websiteProjects = [
  {
    id: 101,
    platform: "Website Design",
    title: "Havenstone Realty",
    description:
      "A real estate website designed to showcase property listings and help visitors discover their ideal home.",
    image: "/pictures/web-design/havenstone-realty-1.jpg",
    overview:
      "A real estate website demo featuring a modern, dark-themed design with elegant gold accents. It showcases property listings, company information, and key statistics in a clean, professional layout designed to create an inviting browsing experience.",
    tools: ["GoHighLevel"],
    gallery: [
      "/pictures/web-design/havenstone-realty-2.jpg",
      "/pictures/web-design/havenstone-realty-3.jpg",
      "/pictures/web-design/havenstone-realty-4.jpg",
      "/pictures/web-design/havenstone-realty-5.jpg",
    ],
    demoUrl: "https://link.funnelgenie.io/preview/ESnHgwbhJiNBrEYhj1uA",
    githubUrl: "",
  },
  {
    id: 102,
    platform: "Website Design",
    title: "Skillforge Academy",
    description:
      "A learning platform where users can explore and purchase courses ranging from beginner to advanced levels in AI, automation, web development, and other digital skills..",
    image: "/pictures/web-design/skillforge-academy-1.jpg",
    overview:
      "SkillForge Academy is an online learning platform designed to help users develop practical digital skills through structured courses ranging from beginner to advanced levels. The website features course listings, detailed course information, and a guided learning journey covering topics such as AI, automation, web development, and digital business.\n\nThe platform also incorporates a course purchasing and enrollment workflow that organizes different course levels and grants access based on the selected course. Additionally, a Conversation AI feature allows visitors to ask questions and receive assistance directly through the website. With its modern design, user-friendly navigation, and integrated automation, SkillForge Academy brings course discovery, purchasing, and customer support together in one convenient experience.",
    tools: ["GoHighLevel", "Conversation AI", "Automation"],
    gallery: [
      "/pictures/web-design/skillforge-academy-2.jpg",
      "/pictures/web-design/skillforge-academy-3.jpg",
      "/pictures/web-design/skillforge-academy-4.jpg",
      "/pictures/web-design/skillforge-academy-5.jpg",
    ],
    demoUrl: "https://link.funnelgenie.io/preview/tiHQ2xOha1dYyZqYtlsy",
    githubUrl: "",
  },
  {
    id: 103,
    platform: "Website Design",
    title: "Doggo Treats",
    description:
      "An online pet store offering natural dog treats and snacks, with product listings and a convenient purchasing experience for pet owners.",
    image: "/pictures/web-design/doggotreats-1.jpg",
    overview:
      "DoggoTreats is a pet-focused e-commerce website designed to help dog owners discover and purchase treats for their furry companions. The website showcases a variety of products, including chicken bites, meat jerky, and milk bones, with product descriptions and pricing to help customers explore their options. \n The website also features an FAQ section, customer testimonials, and a streamlined order form where customers can provide their details, select products, and choose a payment method. With its playful branding and user-friendly layout, DoggoTreats provides a welcoming and convenient online shopping experience for pet owners.",
    tools: ["GoHighLevel"],
    gallery: [
      "/pictures/web-design/doggotreats-2.jpg",
      "/pictures/web-design/doggotreats-3.jpg",
      "/pictures/web-design/doggotreats-4.jpg",
      "/pictures/web-design/doggotreats-5.jpg",
    ],
    demoUrl: "https://link.funnelgenie.io/preview/oH07CwiKaqpopu2VTX6v",
    githubUrl: "",
  },
  {
    id: 104,
    platform: "Website Design",
    title: "Yoogaa",
    description:
      "A wellness website offering yoga classes and appointment booking, featuring Conversation AI support and automated appointment confirmations and reminders.",
    image: "/pictures/web-design/yoogaa-1.jpg",
    overview:
      "Yoogaa is a wellness website designed to promote yoga, mindfulness, and healthy living while making it easy for visitors to explore classes and schedule appointments. The website features information about yoga programs, class schedules, testimonials, and an integrated appointment booking calendar. \n To enhance the user experience, the website also includes Conversation AI to assist visitors with their inquiries. An automated workflow sends appointment confirmation messages and reminders 24 hours before scheduled sessions, helping clients stay informed and prepared for their appointments. \n By combining wellness-focused website design, conversational support, and appointment automation, Yoogaa provides a convenient and engaging experience for both clients and the business.",
    tools: ["GoHighLevel", "Conversation AI"],
    gallery: [
      "/pictures/web-design/yoogaa-2.jpg",
      "/pictures/web-design/yoogaa-3.jpg",
      "/pictures/web-design/yoogaa-4.jpg",
      "/pictures/web-design/yoogaa-5.jpg",
    ],
    demoUrl: "https://link.funnelgenie.io/preview/FKgMJHu35JqaiqCnpKJ4",
    githubUrl: "",
  },
];
