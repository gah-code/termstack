import contentModelingBody from "./content-modeling.md?raw";
import contentTypeBody from "./content-type.md?raw";
import promptWorkflowBody from "./prompt-workflow.md?raw";
import taxonomyBody from "./taxonomy.md?raw";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "content-modeling",
    title: "Content Modeling",
    summary:
      "How reusable content structures help teams publish faster and manage content with more clarity.",
    category: "CMS",
    body: contentModelingBody,
  },
  {
    slug: "content-type",
    title: "Content Type",
    summary:
      "A practical explanation of how content types shape reusable editorial systems.",
    category: "CMS",
    body: contentTypeBody,
  },
  {
    slug: "taxonomy",
    title: "Taxonomy",
    summary:
      "How categories, tags, and relationships make content easier to organize and discover.",
    category: "Content Strategy",
    body: taxonomyBody,
  },
  {
    slug: "prompt-workflow",
    title: "Prompt Workflow",
    summary:
      "How AI-assisted workflows can turn repeatable content tasks into structured operations.",
    category: "AI Workflow",
    body: promptWorkflowBody,
  },
];

export const postsBySlug = posts.reduce<Record<string, Post>>((acc, post) => {
  acc[post.slug] = post;
  return acc;
}, {});
