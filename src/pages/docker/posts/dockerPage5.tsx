import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="Building images"
      date="25 Feb 2025"
      readTime="10"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>Building images</h2>



    </div>

    </PostDetail>
  );
};

export default DockerPage;