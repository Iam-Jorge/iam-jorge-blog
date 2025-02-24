import React from 'react';
import './postDetails.css';

interface PostDetailProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
  children: React.ReactNode;
}

const PostDetail: React.FC<PostDetailProps> = ({
  title,
  date,
  readTime,
  category,
  imageUrl,
  tags,
  children
}) => {
  return (
    <article className="post-detail">
      <div className="post-detail-header">
        <h1 className="post-detail-title">{title}</h1>
        <div className="post-detail-meta">
          <span>{date}</span>
          <span>{readTime} min read</span>
          <span>{category}</span>
        </div>
      </div>

      <img 
        className="post-detail-image"
        src={imageUrl} 
        alt={title} 
      />

      <div className="post-detail-content">
        {children}
      </div>

      <div className="post-detail-tags">
        {tags.map(tag => (
          <span key={tag} className="post-detail-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostDetail;