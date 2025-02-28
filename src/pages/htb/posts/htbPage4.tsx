import PostDetail from '../../../components/postDetails/PostDetails';
import HTBLogo from '../../../assets/images/HTB/HTBLogo.png';
import ElasticStack from '../../../assets/images/HTB/ElasticStack.jpeg';
import ELKWorkflow from '../../../assets/images/HTB/ELKWorkflow.jpeg';

const HTBPage = () => {
  return (
    <PostDetail
      title="ELK"
      date="26 Feb 2025"
      readTime="8"
      category="HTB"
      imageUrl={HTBLogo}
      tags={['HTB', 'ELK', 'Elastic', 'Logstash', 'Kibana']}
    >
      <div>
        <h2>What is a SIEM</h2>
        <p>The elastic stack is an open-source collection of mainly three applications (Elasticsearch, Logstash, and Kibana) 
          offering a comprehensive search and visualization capabilities for real-time analysis and exploration of log files. 
          This architecture can be enhanced with Kafka, RabbitMQ and Redis.</p>
        <img src={ElasticStack} alt="Elastic Stack" />
        <ul>
          <li><b>Elasticsearch:</b> Is a distributed and JSON-based search engine, designed with RESTful APIs. It handles indexing, storing, and querying</li>
          <li><b>Logstash:</b> Is responsible for collecting, transforming, and transporting log files.</li>
          <li><b>Kibana:</b> Serves as the visualization tool for Elasticsearch documents.</li>
          <li><b>Kibana Query Language (KQL):</b> Is a powerful and user-friendly query language designed specifically for searching and analyzing data in Kibana.</li>
          <li><b>Beats:</b> Lightweight, single-purpose data shippers are designed to be installed on remote machines to forward logs and metrics to either Logstash or Elasticsearch.</li>
        </ul>
        <img src={ELKWorkflow} alt="ELK Workflow" />
        <br></br>
        <h3>The elastic stack as a SIEM</h3>
        <p>The Elastic stack can be used as a Security Information and Event Management (SIEM) solution to collect, store, analyze, 
          and visualize security-related data from various sources.</p>
        <p>As Security Operations Center (SOC) we will likely use Kibana as our primary interface. It is essential to become proficient with its functionalities and features.</p>
        <p><b>Kibana Query Language (KQL)</b></p>
        <ul>
          <li>Field-Value Pairs: Queries are structured as field:value (e.g., event.code:4625).</li>
          <li>Free Text Search: Search any indexed field ("svc-sql1").</li>
          <li>Logical Operators: Use AND, OR, NOT for complex queries (event.code:4625 AND winlog.event_data.SubStatus:0xC0000072).</li>
          <li>Comparison Operators: Use &#58;&gt;, &#58;&gt;&#61;, &#58;&lt;, &#58;&lt;&#61;, &#58;&#33; for precise conditions.</li>
          <li>Wildcards & Regex: Match patterns (event.code:4625 AND user.name: admin*).</li>
        </ul>
        <br></br>
        <h3>SIEM Use Case Development</h3>
        <p>Use cases are designed to illustrate specific situations where a product or service can be applied.</p>
        <ol>
          <li><b>Identify Needs:</b> Understand why the alert is needed and define the specific scenario.</li>
          <li><b>Find Data Sources:</b> Locate all points where user logins occur.</li>
          <li><b>Validate Logs:</b> Ensure logs include key details like user, time, source, and destination.</li>
          <li><b>Design & Implement:</b> Define alert conditions and set up the system.</li>
          <li><b>Document:</b> Create guidelines for analysts to follow.</li>
          <li><b>Test & Deploy:</b> Develop, test, and then move to production.</li>
          <li><b>Optimize:</b> Continuously refine alerts based on analyst feedback.</li>
        </ol>
        <br></br>

      </div>
    </PostDetail>
  );
};

export default HTBPage;