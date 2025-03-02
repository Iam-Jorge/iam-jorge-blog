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
        <h2>Interacting with the container</h2>
        <p>Docker containers allow applications to run in isolated environments. However, any changes made inside the container are 
          lost by default when it stops, unless volumes or mounts are used to store data persistently.</p>
        <ul>
          <li><b>Docker Volumes: </b>These are file systems mounted on containers to preserve data. They are stored in /var/lib/docker/volumes on Linux and managed by Docker.</li>
          <li><b>Docker File System: </b>Containers are based on read-only images. When started, a writable layer is added, which disappears when the container stops or is removed.</li>        
        </ul>

        <p>Types of Mounts in Docker</p>
        <ul>
          <li><b>Volumes: </b>Managed by Docker, they are the most efficient way to store data.</li>
          <li><b>Named Pipes: </b>Facilitate communication between the host and containers.</li>
          <li><b>Bind Mounts: </b>Stored anywhere on the host and can be modified outside Docker.</li>
          <li><b>Tmpfs Mounts: </b>Stored in memory, ideal for sensitive or temporary data.</li>
        </ul>

        <p>Let's start a container with -v option, that requires an absolute path. We mount our current folder as /mydir in our 
          container, overwriting everything that we have put in that folder in our Dockerfile.</p>
        <pre>
          <code>
            docker run -v "$(pwd):/mydir" yt-dlp https://www.youtube.com/watch?v=DptFY_MszQs
          </code>
        </pre>
        <p>So a volume is simply a folder (or a file) that is shared between the host machine and the container. </p>

        <br></br>
        <h3>Exercise 1.9: Volumes</h3>
        <p>Image devopsdockeruh/simple-web-service creates a timestamp every two seconds to /usr/src/app/text.log when 
          it's not given a command. Start the container with a bind mount so that the logs are created into your filesystem.</p>

        <pre>
          <code>
            docker run -v C:/Users/2CUL4UM8/Desktop/text.log:/usr/src/app/text.log devopsdockeruh/simple-web-service
          </code>
        </pre>
        <p>This syntax is consistent across all Docker commands that involve volume mounting.</p>
        <ul>
          <li><b>-v or --volume: </b> docker run -v <b>host-path:container-path</b> ...</li>
          <li><b>--mount: </b> docker run --mount type=bind, <b>source=host-path,target=container-path</b> ...</li>
        </ul>
        <br></br>
        <h2>Allowing external connections into containers</h2>
        <p>Some key concepts of inter-program communication</p>
        <ul>
          <li><b>Sending messages: </b>Programs send messages to URLs like http://127.0.0.1:3000</li>
          <li><b>Receiving messages: </b>Programs can be assigned to listen to any available port.</li>
          <li></li>
        </ul>
        <p>Opening a connection from the outside world to a Docker container happens in two steps:</p>
        <ul>
          <li><b>Exposing port: </b>Exposing a container port means telling Docker that the container listens to a certain port. </li>
          <li><b>Publishing port: </b>Publishing a port means that Docker will map host ports to the container ports.</li>
        </ul>
        <h3>Exercise 1.10: Ports open</h3>
        <p>The image devopsdockeruh/simple-web-service will start a web service in port 8080 when given the argument "server". 
          In Exercise 1.8 you already did an image that can be used to run the web service without any argument.</p>
        <p>Use now the -p flag to access the contents with your browser. The output to your browser should be something like:
           ( message: "You connected to the following path: ..."") </p>
        <p>With the -p flag in Docker, you map a host port to a container port. The syntax is: <b>"host-port":"container-port"</b></p>
        <pre>
          <code>
            docker run -p 8080:8080 devopsdockeruh/simple-web-service server
          </code>
        </pre>


    </div>

    </PostDetail>
  );
};

export default DockerPage;