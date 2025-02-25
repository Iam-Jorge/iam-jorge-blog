import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="Running containers"
      date="23 Feb 2025"
      readTime="8"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>Running containers</h2>
        <p>We are using the command line to interact with the "Docker Engine" that is made up of 3 parts: 
          CLI, a REST API and Docker daemon. When you run a command, e.g. docker container run, behind the scenes the 
          client sends a request through the REST API to the Docker daemon which takes care of images, containers and other 
          resources.</p>

        <p>One of them is: docker container run 'image', which instructs daemon to create a container 
          from the image and downloading the image if it is not available.</p>
        
        <pre>
          <code>
            docker container run hello-world
          </code>
        </pre>
        <p>Or the shorthand form</p>
        <pre>
          <code>
            docker run hello-world
          </code>
        </pre>
        <p><b>Security reminder:</b> Keep in mind that we are downloading stuff from the internet. 
        Double checking what you're running is always a good idea.</p>

        <h2>Docker CLI basics</h2>
        <table>
          <tr>
            <th>command</th>
            <th>explain</th>
            <th>shorthand</th>
          </tr>
          <tr>
            <td>docker image ls</td>
            <td>Lists all images</td>
            <td>docker images</td>
          </tr>
          <tr>
            <td>docker image rm 'image'</td>
            <td>Removes an image</td>
            <td>docker rmi</td>
          </tr>
          <tr>
            <td>docker image pull 'image'</td>
            <td>Pulls image from a docker registry</td>
            <td>docker pull</td>
          </tr>
          <tr>
            <td>docker container ls</td>
            <td>Lists all running containers</td>
            <td>docker ps</td>
          </tr>
          <tr>
            <td>docker container ls -a</td>
            <td>Lists all containers</td>
            <td>docker ps -a</td>
          </tr>
          <tr>
            <td>docker container run -d 'image'</td>
            <td>Starts a detached, it runs in the background</td>
            <td>docker run -d</td>
          </tr>
          <tr>
            <td>docker container run 'image'</td>
            <td>Runs a container from an image</td>
            <td>docker run</td>
          </tr>
          <tr>
            <td>docker container rm 'container'</td>
            <td>Removes a container</td>
            <td>docker rm</td>
          </tr>
          <tr>
            <td>docker container stop 'container'</td>
            <td>Stops a container</td>
            <td>docker stop</td>
          </tr>
          <tr>
            <td>docker container exec 'container'</td>
            <td>Executes a command inside the container </td>
            <td>docker exec</td>
          </tr>
          <tr>
            <td>docker system prune</td>
            <td>Cleans almost everything</td>
            <td>docker system prune</td>
          </tr>
        </table>

        <h2>Getting started</h2>
        <p><b>Exercises 1.1</b></p>
        <ul>
          <li>Start 3 containers from an image that does not automatically exit (such as nginx) in detached mode.</li>
          <pre>
            <code>
              docker run -d nginx
            </code>
          </pre>
          <li>Stop two of the containers and leave one container running.</li>
          <pre>
            <code>
              docker stop 'container'
            </code>
          </pre>
          <li>Output for docker ps -a which shows 2 stopped containers and one running.</li>
          <pre>
            <code>
              docker ps -a
            </code>
          </pre>
        </ul>

        <p><b>Exercises 1.2</b></p>
        <ul>
          <li>We have containers and an image that are no longer in use and are taking up space.</li>
          <pre>
            <code>
              docker ps -a or docker image ls
            </code>
          </pre>
          <li>Clean the Docker daemon by removing all images and containers.</li>
          <pre>
            <code>
              docker system prune
            </code>
          </pre>
        </ul> 
    </div>
    </PostDetail>
  );
};

export default DockerPage;