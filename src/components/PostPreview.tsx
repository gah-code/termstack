import ReactMarkdown from "react-markdown";
import type { Post } from "../content/posts";

type PostPreviewProps = {
  post: Post | null;
  onClose: () => void;
};

export function PostPreview({ post, onClose }: PostPreviewProps) {
  if (!post) return null;

  return (
    <article className="post-preview">
      <button className="text-button" type="button" onClick={onClose}>
        Close article
      </button>

      <div className="post-preview-header">
        <p className="post-preview-kicker">{post.category}</p>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
      </div>

      <div className="post-body">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </article>
  );
}
