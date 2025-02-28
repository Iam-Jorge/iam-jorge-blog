import PostDetail from '../../../components/postDetails/PostDetails';
import HTBLogo from '../../../assets/images/HTB/HTBLogo.png';

const HTBPage = () => {
  return (
    <PostDetail
      title="What is a SIEM"
      date="26 Feb 2025"
      readTime="5"
      category="HTB"
      imageUrl={HTBLogo}
      tags={['HTB', 'SIEM', 'SOC']}
    >
      <div>
        <h2>What is a SIEM</h2>
        <p>SIEM (Security Information and Event Management) collects, analyzes, and correlates security logs in real-time to detect 
          threats and support incident response. It enhances visibility, streamlines investigations, and ensures compliance.</p>
        <p>SIEM emerged from the integration of SIM (Security Information Management) and SEM (Security Event Management).</p>
        <p>The SIEM Data flow</p>
        <ol>
          <li>Collects and ingests logs from various data sources.</li>
          <li>The gathered data is processed and normalized to be understood by the SIEM.</li>
          <li>SOC teams utilize the normalized data collected by the SIEM to create detection rules.</li>
        </ol>
        <br></br>
        <h2>What is a SIEM</h2>
        <p>A Security Operations Center (SOC) is a dedicated team that monitors, detects, and responds to cyber threats using tools 
          like SIEM, IDS/IPS, and EDR.</p>
        <p>SOC stages</p>
        <ul>
          <li><b>SOC 1.0:</b> Focused on network security but lacked integration, leading to uncorrelated alerts and inefficiencies. </li>
          <li><b>SOC 2.0:</b> Introduced intelligence-driven security with anomaly detection, and proactive risk management. 
            The next-gen Cognitive SOC enhances this by integrating AI-driven learning systems to improve threat detection and response.</li>
        </ul>
        <br></br>

      </div>
    </PostDetail>
  );
};

export default HTBPage;