import PostCard from '../../components/postCard/PostCard';
import HTBLogo from '../../assets/images/HTB/HTBLogo.png';
import './htb.css';

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  slug: string;
}

const HTB = () => {
  const Posts: Post[] = [
    {
      id: '1',
      title: 'VPN connection to HTB',
      description: 'Explains how to connect to HTB using OpenVPN',
      imageUrl: HTBLogo,
      date: '2025-02-22',
      readTime: '5',
      slug: 'htbPage1'
    },
    {
      id: '2',
      title: 'HTB 2',
      description: 'Gestiona HTB',
      imageUrl: HTBLogo,
      date: '2025-02-23',
      readTime: '8',
      slug: 'htbPage2'
    },
    // Más posts...
  ];

  return (
    <div className="page">
      <h1>Hack the Box</h1>
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
            category="HTB"
          />
        ))}
      </div>
    </div>
  );
};

export default HTB;