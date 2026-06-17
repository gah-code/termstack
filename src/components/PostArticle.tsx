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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>
    </article>
  );
}
