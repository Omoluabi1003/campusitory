export interface BlueprintModule {
  id: number;
  slug: string;
  title: string;
  summary: string;
  route: string;
  primaryBuild: string[];
  dataNeeds: string[];
}

export const blueprintModules: BlueprintModule[] = [
  {
    id: 1,
    slug: "global-institutions",
    title: "Global Institutions",
    summary: "All universities, polytechnics, colleges, vocational schools, nursing schools, military schools, aviation schools, culinary schools, music schools, and training institutes.",
    route: "/directory",
    primaryBuild: ["Institution directory", "Country and school-type filters", "Institution verification status"],
    dataNeeds: ["Institution name", "Country", "School type", "City", "Official website", "Verification state"],
  },
  {
    id: 2,
    slug: "registration",
    title: "Registration and Academic Identity",
    summary: "Profile registration for students, lecturers, researchers, institutions, and academic professionals.",
    route: "/profiles",
    primaryBuild: ["Role-based onboarding", "Academic profile fields", "Photo and contact profile section"],
    dataNeeds: ["Name", "Country", "School", "Program level", "Course", "Department", "Faculty", "Age range", "Profile photo", "Phone", "Email", "Address", "Position"],
  },
  {
    id: 3,
    slug: "lecture-board-room",
    title: "Lecture Board Room",
    summary: "A structured online lecture board room with lecture notes, Q&A, quiz attendance, assignment submission, attendance register, and chat.",
    route: "/campus-room",
    primaryBuild: ["Lecture room dashboard", "Attendance workflow", "Assignment and quiz panels", "Lecture note upload and download"],
    dataNeeds: ["Course", "Lecture session", "Attendance", "Questions", "Quiz", "Assignment", "Lecture notes", "Chat messages"],
  },
  {
    id: 4,
    slug: "personal-campus",
    title: "Personal Page and Academic Social Layer",
    summary: "Personal pages, live sessions, calls, follows, reactions, hashtags, emojis, trending academic videos, news, research updates, programs, sabbaticals, and exchange pathways.",
    route: "/dashboard",
    primaryBuild: ["Personal academic page", "Academic feed", "Live session surface", "Research and campus news cards"],
    dataNeeds: ["Posts", "Follows", "Reactions", "Hashtags", "Live sessions", "Videos", "Academic news", "Exchange programs"],
  },
  {
    id: 5,
    slug: "opportunity-gantry",
    title: "Scholarship, Grants, Loans, and Jobs Gantry",
    summary: "Scholarships, grants, student loans, academic jobs, postgraduate offers, fellowships, sororities, and international openings.",
    route: "/opportunities",
    primaryBuild: ["Opportunity search", "Eligibility matching", "Saved opportunities", "Deadline and country filters"],
    dataNeeds: ["Opportunity title", "Provider", "Country", "Eligibility", "Program level", "Deadline", "Funding type"],
  },
  {
    id: 6,
    slug: "research-library",
    title: "Thesis, Books, and Academic Materials",
    summary: "Theses, books, academic materials, papers, research works, journals, lecture materials, datasets, and institutional publications.",
    route: "/research",
    primaryBuild: ["Research library", "Academic material cards", "Metadata and abstract views", "Access-level controls"],
    dataNeeds: ["Title", "Author", "Institution", "Type", "Year", "Abstract", "Document access"],
  },
  {
    id: 7,
    slug: "professional-organizations",
    title: "Professional and Chartered Organizations",
    summary: "International professional bodies, chartered organizations, fellowships, academic links, science societies, exploration geophysics, geological, and physics institutes.",
    route: "/professional-organizations",
    primaryBuild: ["Organization directory", "Membership pathways", "Fellowship listings", "Academic society links"],
    dataNeeds: ["Organization name", "Field", "Country", "Website", "Membership type", "Verification state"],
  },
  {
    id: 8,
    slug: "student-union-games",
    title: "Student Union, Games, and Competitions",
    summary: "Student unions, university games, World University Games, AI competitions, regional and continental academic contests.",
    route: "/student-union-games",
    primaryBuild: ["Student union hub", "Games and competition calendar", "AI competition board", "Regional and continental filters"],
    dataNeeds: ["Event name", "Organizer", "Region", "Competition type", "Date", "Eligibility"],
  },
  {
    id: 9,
    slug: "ai-search-schedule",
    title: "AI Search Engine and Scheduler",
    summary: "Academic search, intelligent guidance, study scheduling, lecture planning, scholarship matching, and research navigation.",
    route: "/ai-engine",
    primaryBuild: ["Academic guidance panel", "Search intent detection", "Study scheduler", "Opportunity and research matching"],
    dataNeeds: ["Search input", "Intent", "Profile signals", "Schedule", "Recommendations", "Response history"],
  },
  {
    id: 10,
    slug: "access-security",
    title: "Subscriptions, Restricted Access, and Identity Protection",
    summary: "Free and paid subscription tiers, restricted pages, KYC readiness, role-based access, and identity protection workflows.",
    route: "/pricing",
    primaryBuild: ["Access tiers", "Restricted route planning", "Identity verification readiness", "Subscription model"],
    dataNeeds: ["Plan", "Role", "Access tier", "Verification status", "Restricted content", "Security review state"],
  },
  {
    id: 11,
    slug: "language-console",
    title: "International Language Console",
    summary: "Multilingual console for English, French, Chinese, Japanese, Portuguese, Spanish, and future regional languages.",
    route: "/language",
    primaryBuild: ["Language selector", "Translated navigation model", "User language preference", "Global academic access"],
    dataNeeds: ["Locale", "Language preference", "Translation keys", "Supported regions", "Content language"],
  },
];
