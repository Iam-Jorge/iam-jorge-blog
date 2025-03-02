import PostDetail from '../../../components/postDetails/PostDetails';
import HTBLogo from '../../../assets/images/HTB/HTBLogo.png';
import CreateVisualization from '../../../assets/images/HTB/CreateVisualization.jpeg';
import NewVisualization from '../../../assets/images/HTB/NewVisualization.jpeg';

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
        <p>Let's create our first Kibana dashboard. We will select Dashboard and Create new:</p>
        <img src={CreateVisualization} alt="Create Visualization" />


        <img src={NewVisualization} alt="New Visualization" />


      </div>
    </PostDetail>
  );
};

export default HTBPage;