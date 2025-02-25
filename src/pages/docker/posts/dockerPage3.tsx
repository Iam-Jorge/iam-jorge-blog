import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';
import Ex14 from '../../../assets/images/Docker/Ex1.4.jpeg';

const DockerPage = () => {
  return (
    <PostDetail
      title="Running processes inside a container"
      date="23 Feb 2025"
      readTime="8"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>I/O operations</h2>

      <p>Next we will start using a more useful image</p>
      <pre>
        <code>
          docker run ubuntu
        </code>
      </pre>
      <p>We will need to add a few flags to interact with the image.</p>
      <ul>
        <li>-t: Will create a tty.</li>
        <li>-i: Will instruct to pass the STDIN to the container.</li>
      </ul>
      <pre>
        <code>
          docker run -it ubuntu
        </code>
      </pre>
      <p>Let's throw in a few more and run a container in the background:</p>
      <pre>
        <code>
          docker run -itd --name looper ubuntu sh -c 'while true; do date; sleep 1; done'
        </code>
      </pre>
      <ul>
        <li>run -d: Runs container detached</li>
        <li>-it: Allows to interact with the container by using command line</li>
        <li>--name looper: We can now reference it easily.</li>
        <li>ubuntu: The image</li>
        <li>sh -c 'while true; do date; sleep 1; done' the command given to the container</li>
      </ul>

      <p>To follow the output of logs we will use</p>
      <pre>
        <code>
          docker logs -f looper
        </code>
      </pre>

      <p>We can pause or unpause the container by running the following</p>
      <pre>
        <code>
          docker pause looper / docker unpause looper
        </code>
      </pre>

      <p>Docker attach lets you connect to the stdout of your Docker container, also allows multiple connections to view the same container</p>
      <pre>
        <code>
          docker attach --no-stdin looper
        </code>
      </pre>
      <ul>
        <li>--no-stdin: The container will continue running after Control+c </li>
      </ul>

      <h2>Running processes inside a container</h2>
      <p>We often encounter situations where we need to execute commands within a running container.</p>
      <pre>
        <code>
          docker exec looper ls -la
        </code>
      </pre>
      <p>We can execute the Bash shell in the container in interactive mode and then run any commands within that</p>
      <pre>
        <code>
          docker exec -it looper bash
        </code>
      </pre>

      <p>To terminate the process</p>
      <pre>
        <code>
          docker rm --force looper
        </code>
      </pre>


      <p><b>Exercises 1.3</b></p>
      <p>Image devopsdockeruh/simple-web-service:ubuntu will start a container that outputs logs into a file. Go inside the running 
        container and use tail -f ./text.log to follow the logs. Every 10 seconds the clock will send you a "secret message".</p>
      <p>Commands used to resolve the exercise</p>
      <pre>
        <code>
          docker run -d devopsdockeruh/simple-web-service:ubuntu
        </code>
      </pre>
      <pre>
        <code>
          docker ps -a
        </code>
      </pre>
      <pre>
        <code>
          docker exec -it 'id' bash
        </code>
      </pre>
      <pre>
        <code>
            tail -f ./text.log
        </code>
      </pre>

        <p>The following is the secret message: 
          Secret message is: 'You can find the source code here: https://github.com/docker-hy'</p>

        <p><b>Exercises 1.4</b></p>
        <p>Start a Ubuntu image with the process sh -c 'while true; do echo "Input website:"; read website; 
          echo "Searching.."; sleep 1; curl http://$website; done'</p>
        <p>Test inputting helsinki.fi into the application. It should respond with something like the following:</p>
        <img src={Ex14} alt="Dockerfile" />

        <p>Commands used to resolve the exercise</p>
        <pre>
          <code>
            docker run -itd sh -c 'while true; do echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website; done'
          </code>
        </pre>
        <pre>
          <code>
            docker ps -a 
          </code>
        </pre>
        <pre>
          <code>
            docker exec -it 'id' bash
          </code>
        </pre>
        <pre>
          <code>
              apt-get update
          </code>
        </pre>
        <pre>
          <code>
              apt-get upgrade
          </code>
        </pre>
        <pre>
          <code>
              apt-get install curl
          </code>
        </pre>
        <pre>
          <code>
              curl helsinki.fi
          </code>
        </pre>

    </div>

    </PostDetail>
  );
};

export default DockerPage;