import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="Running processes inside a container"
      date="25 Feb 2025"
      readTime="5"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>I/O operations</h2>

    </div>

    </PostDetail>
  );
};

export default DockerPage;