import PostCard from '../../components/postCard/PostCard';
import './docker.css';
import dockerImage from '../../assets/images/Docker/docker.png';

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  slug: string;
}

const Docker = () => {
  const Posts: Post[] = [
    {
      id: '1',
      title: 'Introduction to Docker',
      description: 'What is Docker?',
      imageUrl: dockerImage,
      date: '2025-02-24',
      readTime: '5',
      slug: 'dockerPage1'
    },
    {
      id: '2',
      title: 'Running containers',
      description: 'Docker CLI basics',
      imageUrl: dockerImage,
      date: '2025-02-24',
      readTime: '8',
      slug: 'dockerPage2'
    },
    {
      id: '3',
      title: 'Running processes inside a container',
      description: 'We often encounter situations where we need to execute commands within a running container.',
      imageUrl: dockerImage,
      date: '2025-02-24',
      readTime: '8',
      slug: 'dockerPage3'
    },
    {
      id: '4',
      title: 'Docker 4',
      description: '',
      imageUrl: dockerImage,
      date: '2025-02-24',
      readTime: '8',
      slug: 'dockerPage3'
    },
    // Más posts...
  ];

  return (
    <div className="page">
      <h1>Docker</h1>
      <div className="posts-grid">
        {Posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            date={post.date}
            readTime={post.readTime}
            slug={post.slug}
            category="Docker"
          />
        ))}
      </div>
    </div>
  );
};

export default Docker;