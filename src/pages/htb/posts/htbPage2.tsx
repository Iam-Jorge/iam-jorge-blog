import PostDetail from '../../../components/postDetails/PostDetails';
import AttackLifecycle from '../../../assets/images/HTB/AttackLifecycle.png';
import IncidentHandling from '../../../assets/images/HTB/IncidentHandling.png';

const HTBPage = () => {
  return (
    <PostDetail
      title="Incident handling"
      date="23 Feb 2025"
      readTime="5"
      category="HTB"
      imageUrl=""
      tags={['HTB']}
    >
      <div>
        <h2>Incident handling</h2>
        <p><b>Event:</b> An action occurring in a system or network (user sending an email, mouse click)</p>
        <p><b>Incident:</b> Is an action with a negative consequence (a system crash).</p>
        <p><b>Incident handling:</b> Is a clearly define set of procedures to manage and respond to security incidents in a computer or network.</p>

        <h2>Attack lifecycle (Cyber Kill Chain)</h2>
        <img src={AttackLifecycle} alt="Attack Lifecycle" />
        <ul>
          <li>Recon: Initial stage, the attacker chooses his targets and performs information gathering of the target.</li>
          <li>Weaponize: The malware to be used for initial access is developed and embedded into some type of exploit or payload.</li>
          <li>Delivery: The exploit or payload is delivered to the victim.</li>
          <li>Exploit: The attacker attempts to execute code on the target system.</li>
          <li>Installation: Can be carried out in various ways:</li>
          <ul>
            <li>Droppers: Small piece of code designed to install malware.</li>
            <li>Backdoors: Provides ongoing access to the compromised system.</li>
            <li>Rootkits: Designed to hide its presence.</li>
          </ul>
          <li>Command and control: The attacker establishes and remote access.</li>
          <li>Action: The objective of the attack.</li>
        </ul>

        <h2>The incident handling process</h2>
        <p>As defined by NIST, the incident handling process consists of four stages. Defines capability for organizations to 
          prepare, detect, and respond to malicious events.</p>
        <img src={IncidentHandling} alt="Incident handling " />
        <p>This process is cyclic, it’s vital to ensure that the steps are not skipped before moving onto the next one.</p>
        
        <h3>Preparation</h3>
        <p>This stage establishes incident handling capability within the organization. The baselines of the system and networks, 
          out of golden image and a clean state environment.</p>

        <p><b>DMARC:</b> Is and email protection against phishing built in on top of SPF and KDIM. The idea is to reject emails that
           'pretend' to originate from your organization. DMARC is easy and inexpensive to implement, but testing is mandatory 
           to not block legitimate emails.</p>

        <p>Endpoint hardening (EDR): There are few endpoint hardening standards.</p>
        <ul>
          <li>Disable LLMNR/NetBIOS</li>
          <li>Implement LAPS and removes administrative privileges</li>
          <li>Enable ARS rules if using Microsoft Defender.</li>
          <li>Implement withe listing at least block execution from user-writable folders (Downloads, Desktop, AppData, etc) and script types (hta, vbs, cmd, bat, js).</li>
          <li>Utilize host-bases firewalls.</li>
          <li>Deploy an EDR product to inspect before it being executed.</li>
        </ul>

        <h3>Detection and analysis</h3>
        <p>Involves aspects of detecting an incident (sensors, logs.) The detection of threats can come from sources such as: </p>
        <ul>
          <li>An employee that notices abnormal behavior</li>
          <li>An alert from one of our tools (EDR, IDS, Firewall, SIEM)</li>
          <li>Threat hunting activities</li>
          <li>A third-party notification</li>
        </ul>


        <h3>The investigation</h3>
        <p>Starts based on the initial gathering, with the initial data we will begin a 3-step cyclical process. This process includes:</p>
        <ul>
          <li>IOC (Creation and usage of indicators of compromise): A IOC is a hash value of a file, IP, or file names, there are special standards languages such as Yara and OpenIOC</li>
          <ul>
            <li>PsExec (light telnet replacement): Caches credentials on the remote machine.</li>
          </ul>
          <li>Identification of new leads and impacted systems: We need to identify and eliminate false positives.</li>
          <li>Data collection and analysis of the new leads: Newly discovered and validated leads are added to the timeline, which is constantly updated.</li>
        </ul>

      </div>
    </PostDetail>
  );
};

export default HTBPage;