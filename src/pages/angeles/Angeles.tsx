import PostCard from '../../components/postCard/PostCard';
import './angeles.css';
import LogoCCN from '../../assets/images/CCNCERT/CCN-CERT.png'

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
      title: 'Exposición y vulnerabilidades en webs',
      description: 'Evaluar el grado de exposición de una página web a vulnerabilidades comunes.',
      imageUrl: LogoCCN,
      date: '2025-02-24',
      readTime: '5',
      slug: 'angelesPage1'
    },
    {
      id: '2',
      title: 'Certificados Digitales',
      description: 'En los últimos tiempos, el abandono de los trámites administrativos en papel, el crecimiento de lo conocido como. Era Digital y el continuo dinamismo de las tecnologías y sus posibles fraudes, hace necesario que exista una base de conocimiento en este contexto.',
      imageUrl: LogoCCN,
      date: '2025-03-03',
      readTime: '8',
      slug: 'angelesPage2'
    },
    // Más posts...
  ];

  return (
    <div className="page">
      <h1>Ciberseguridad (CCN-Cert)</h1>
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
            category="Angeles"
          />
        ))}
      </div>
    </div>
  );
};

export default Docker;