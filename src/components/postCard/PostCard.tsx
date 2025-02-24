import React from 'react';
import { Link } from 'react-router-dom';
import './postCard.css';

interface PostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
  date,
  readTime,
  slug,
  category
}) => {
  return (
    <div className="post-card">
      <div className="post-card-image">
        <img src={imageUrl} alt={title} />
        <span className="post-card-category">{category}</span>
      </div>
      <div className="post-card-content">
        <h2 className="post-card-title">{title}</h2>
        <p className="post-card-description">{description}</p>
        <div className="post-card-meta">
          <span className="post-card-date">{date}</span>
          <span className="post-card-readtime">{readTime} min read</span>
        </div>
        <Link to={`/${category.toLowerCase()}/${slug}`} className="post-card-link">
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;