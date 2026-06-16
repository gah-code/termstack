export type TermCategory =
  | "All"
  | "CMS"
  | "SEO/AEO"
  | "Frontend"
  | "Content Strategy"
  | "AI Workflow";

export type Term = {
  id: string;
  title: string;
  shortDefinition: string;
  longDefinition?: string;
  category: Exclude<TermCategory, "All">;
  relatedPostSlug?: string;
};

export const categories: TermCategory[] = [
  "All",
  "CMS",
  "SEO/AEO",
  "Frontend",
  "Content Strategy",
  "AI Workflow",
];

export const terms: Term[] = [
  {
    id: "content-modeling",
    title: "Content Modeling",
    shortDefinition:
      "The process of defining reusable content structures, fields, relationships, and editorial rules.",
    longDefinition:
      "Content modeling helps teams separate content from presentation so content can be reused across pages, campaigns, channels, and future systems.",
    category: "CMS",
    relatedPostSlug: "content-modeling",
  },
  {
    id: "content-type",
    title: "Content Type",
    shortDefinition:
      "A reusable structure that defines the fields and rules for a specific kind of content.",
    longDefinition:
      "A blog post, landing page, FAQ item, author profile, or campaign module can each be modeled as a content type.",
    category: "CMS",
  },
  {
    id: "taxonomy",
    title: "Taxonomy",
    shortDefinition:
      "A structured classification system used to organize content by topics, tags, categories, or relationships.",
    category: "Content Strategy",
  },
  {
    id: "metadata",
    title: "Metadata",
    shortDefinition:
      "Descriptive information that helps content become searchable, reusable, measurable, and easier to manage.",
    category: "SEO/AEO",
  },
  {
    id: "component",
    title: "Component",
    shortDefinition:
      "A reusable interface block that can be composed with other blocks to build pages or experiences.",
    category: "Frontend",
  },
  {
    id: "prompt-workflow",
    title: "Prompt Workflow",
    shortDefinition:
      "A repeatable AI-assisted process that turns inputs, rules, and review steps into a useful content or operations output.",
    category: "AI Workflow",
  },
];
