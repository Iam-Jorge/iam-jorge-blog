import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';
import DockerFile from '../../../assets/images/Docker/Dockerfile.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="Itroduction to Docker"
      date="24 Feb 2025"
      readTime="5"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
      <div>
        <h2>Definitions and basic concepts</h2>
        <p> Docker is a set of platform as a service (PaaS) products that use OS-level virtualization 
          to deliver software in packages called containers.
        </p>
        <br></br>
        <h3>Benefits of Containers</h3>
        <p>Containers offer several advantages for software development and deployment:</p>
        <ol>
          <li>
            <b> Works on my machine (Reproducibility) </b>
            <ul>
              <li>By encapsulating applications with their dependencies, containers ensure a consistent setup across different environments.</li>
            </ul>
          </li>
          <li>
            <b> Isolated environments (Portability) </b>
            <ul>
              <li>Containers package software along with all its dependencies, preventing conflicts when different system components change over time.</li>
            </ul>
          </li>
          <li>
            <b> Efficient development (Productivity) </b>
            <ul>
              <li>With a single command, you can set up an isolated application environment (e.g., Postgres or Redis) on your machine.</li>
            </ul>
          </li>
          <li>
            <b> Scalability </b>
            <ul>
              <li>Container orchestration enables rapid deployment of multiple containers and balances traffic efficiently.</li>
            </ul>
          </li>
        </ol>

        <br></br>
        <h4>Virtual machines</h4>
        <p>The difference between a virtual machine and Docker solutions is that containers have a direct access to your own Operating 
          Systems kernel and resources.</p> 
        <p>Running software on top of containers is almost as efficient as running it "natively" 
          outside containers, at least when compared to virtual machines.</p>

        <br></br>
        <h4>Image and containers</h4>
        <p>Containers are instances of images. An image is like a blueprint or template, while a container is an instance of that `
          blueprint or template.
        </p>

        <img src={DockerFile} alt="Dockerfile" />

        <ul>
          <li>
            <b>Image</b>
            <ul>
              <li>A Docker image is a file, comprised of multiple layers, used to execute code in a Docker container. 
                This image file is built from an instructional file named Dockerfile</li>
            </ul>
            <ul>
              <li>
                <b>Dockerfile:</b> Uses DSL (Domain Specific Language) and contains instructions for generating a Docker image.
              </li>
            </ul>
          </li>
          <li>
            <b>Container</b>
            <ul>
              <li>Docker container is a runtime instance of an image. Containers contain the whole kit required for an application, 
                so the application can be run in an isolated way.</li>
            </ul>
          </li>
        </ul>
      </div>
    </PostDetail>
  );
};

export default DockerPage;