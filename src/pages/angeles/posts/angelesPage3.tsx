import PostDetail from '../../../components/postDetails/PostDetails';
import LogoCCN from '../../../assets/images/CCNCERT/CCN-CERT.png';
import TableOfContents from '../../../components/tableOfContents/tableOfContents';

const angelesPage = () => {
  return (
    <PostDetail
      title="Esquema nacional de seguridad (ENS)"
      date="5 Mar 2025"
      readTime="15"
      category="CCN-CERT"
      imageUrl={LogoCCN}
      tags={['CCN-CERT', 'Ciberseguridad']}
    >
    <TableOfContents></TableOfContents>
      <div>
        
        
      </div>
    </PostDetail>
  );
};

export default angelesPage;