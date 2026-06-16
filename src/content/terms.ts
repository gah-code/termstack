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
    relatedPostSlug: "content-type",
  },
  {
    id: "field",
    title: "Field",
    shortDefinition:
      "A specific piece of content inside a content type, such as title, image, slug, body, or publish date.",
    category: "CMS",
  },
  {
    id: "reference-field",
    title: "Reference Field",
    shortDefinition:
      "A field that connects one content entry to another so content can be reused and related across a system.",
    category: "CMS",
  },
  {
    id: "taxonomy",
    title: "Taxonomy",
    shortDefinition:
      "A structured classification system used to organize content by topics, tags, categories, or relationships.",
    category: "Content Strategy",
    relatedPostSlug: "taxonomy",
  },
  {
    id: "governance",
    title: "Content Governance",
    shortDefinition:
      "The rules, roles, workflows, and standards that help teams create and maintain content consistently.",
    category: "Content Strategy",
  },
  {
    id: "editorial-workflow",
    title: "Editorial Workflow",
    shortDefinition:
      "The step-by-step process content moves through, from draft to review, approval, publishing, and maintenance.",
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
    id: "slug",
    title: "Slug",
    shortDefinition:
      "The readable part of a URL that identifies a page or post, often based on the page title.",
    category: "SEO/AEO",
  },
  {
    id: "schema-markup",
    title: "Schema Markup",
    shortDefinition:
      "Structured data added to a page to help search engines understand the meaning of the content.",
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
    id: "props",
    title: "Props",
    shortDefinition:
      "Inputs passed into a React component that control what it renders or how it behaves.",
    category: "Frontend",
  },
  {
    id: "state",
    title: "State",
    shortDefinition:
      "Data that changes over time and affects how a component renders or behaves.",
    category: "Frontend",
  },
  {
    id: "prompt-workflow",
    title: "Prompt Workflow",
    shortDefinition:
      "A repeatable AI-assisted process that turns inputs, rules, and review steps into a useful content or operations output.",
    category: "AI Workflow",
    relatedPostSlug: "prompt-workflow",
  },
  {
    id: "human-in-the-loop",
    title: "Human in the Loop",
    shortDefinition:
      "A workflow design where AI assists the process, but a human reviews, approves, or improves the final output.",
    category: "AI Workflow",
  },
  {
    id: "rag",
    title: "RAG",
    shortDefinition:
      "Retrieval-augmented generation, a method where an AI system uses external knowledge sources before generating an answer.",
    category: "AI Workflow",
  },
];
