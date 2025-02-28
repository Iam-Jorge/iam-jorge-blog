import PostDetail from '../../../components/postDetails/PostDetails';
import HTBLogo from '../../../assets/images/HTB/HTBLogo.png';


const HTBPage = () => {
  return (
    <PostDetail
      title="Kibana Visualization Example 1: Failed Logon Attempts (All Users)"
      date="26 Feb 2025"
      readTime="9"
      category="HTB"
      imageUrl={HTBLogo}
      tags={['HTB', 'ELK', 'Elastic', 'Logstash', 'Kibana']}
    >
      <div>
        <h2>Kibana Visualization Example 1: Failed Logon Attempts (All Users)</h2>


      </div>
    </PostDetail>
  );
};

export default HTBPage;