import PostDetail from '../../../components/postDetails/PostDetails';
import HTBLogo from '../../../assets/images/HTB/HTBLogo.png';
import HTBConnect from '../../../assets/images/HTB/HTBConnect.jpeg';

const HTBPage1 = () => {
  console.log("HTBPage1 is rendering!");
  return (
    <PostDetail
      title="How to connect to a target"
      date="23 Feb 2025"
      readTime="5"
      category="HTB"
      imageUrl={HTBLogo}
      tags={['HTB']}
    >
      <div>
        <h2>HTB 1</h2>
        <p>First, we need to have <a href="https://openvpn.net/community-downloads/">OpenVPN</a> installed.</p>
        <p>To connect, we need to download the VPN connection file and generate our target(s).</p>
        <img src={HTBConnect} alt="HTBConnect" />
        <p>Then, we will import the VPN connection file into OpenVPN and connect.</p>
        <p>It will take a bit, but once the connection is established, we will open <code>http://[Target IP]:port</code> in our browser.</p>
      
      </div>
    </PostDetail>
  );
};

export default HTBPage1;