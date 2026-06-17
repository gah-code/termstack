import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Post } from "../content/posts";

type PostArticleProps = {
  post: Post;
};

export function PostArticle({ post }: PostArticleProps) {
  return (
    <article className="post-preview post-article">
      <div className="post-preview-header">
        <p className="post-preview-kicker">{post.category}</p>
        <h1 id="post-title">{post.title}</h1>
        <p>{post.summary}</p>
      </div>

      <div className="post-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children }) => (
              <div
                className="markdown-table-wrap"
                role="region"
                aria-label="Scrollable table"
                tabIndex={0}
              >
                <table>{children}</table>
              </div>
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>
    </article>
  );
}
