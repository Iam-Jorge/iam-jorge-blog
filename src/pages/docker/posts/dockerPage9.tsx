import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

const DockerPage = () => {
  return (
    <PostDetail
      title=""
      date="02 Mar 2025"
      readTime="8"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>In-depth dive into containers</h2>
        

    </div>

    </PostDetail>
  );
};

export default DockerPage;