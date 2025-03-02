import PostCard from '../../components/postCard/PostCard';
import HTBLogo from '../../assets/images/HTB/HTBLogo.png';

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
      title: 'How to connect to HTB',
      description: 'Essential steps to establish a secure connection (VPN) to a target machine.',
      imageUrl: HTBLogo,
      date: '2025-02-24',
      readTime: '5',
      slug: 'htbPage1'
    },
    {
      id: '2',
      title: 'Incident handling',
      description: 'Understand key incident response strategies, from detecting security breaches to mitigating threats effectively.',
      imageUrl: HTBLogo,
      date: '2025-02-24',
      readTime: '8',
      slug: 'htbPage2'
    },
    {
      id: '3',
      title: 'Exploring SIEM and SOC',
      description: 'Explores how Security Information and Event Management (SIEM) and Security Operations Center (SOC).',
      imageUrl: HTBLogo,
      date: '2025-02-26',
      readTime: '5',
      slug: 'htbPage3'
    },
    {
      id: '4',
      title: 'ELK',
      description: 'The elastic stack is an open-source collection (Elasticsearch, Logstash, and Kibana) that offer users comprehensive search and visualization, analysis and exploration of log file sources.',
      imageUrl: HTBLogo,
      date: '2025-02-26',
      readTime: '8',
      slug: 'htbPage4'
    },
    {
      id: '4',
      title: 'Kibana Visualization Example',
      description: 'Exploring dashboards for failed login attempts (All Users) to organize and display data effectively',
      imageUrl: HTBLogo,
      date: '2025-02-26',
      readTime: '9',
      slug: 'htbPage5'
    },
    // Más posts...
  ];

  return (
    <div className="page">
      <h1>Hack The Box</h1>
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