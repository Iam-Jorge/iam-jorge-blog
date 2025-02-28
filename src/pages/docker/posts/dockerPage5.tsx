import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';
import DockerLayers from '../../../assets/images/Docker/DockerLayers.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="Building images"
      date="25 Feb 2025"
      readTime="10"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>Building images</h2>
        <p>To build our own images we will need a Dockerfile, which is simply a file that contains the build instructions for an image.</p>
        <p>We will create a simple script <b>hello.sh</b> and we are using Windows we will need to change the line endings to LF.</p>
        <pre>
          <code>
            #!/bin/sh<br></br>
            <br></br>
            echo "Hello, docker!"
          </code>
        </pre>
        
        <p>Now we will create the <b>Dockerfile</b> and put the following instructions inside it:</p>
        <pre>
          <code>
            # Start from the alpine image that is smaller but no fancy tools<br></br>
            FROM alpine:3.19<br></br>
            <br></br>
            # Use /usr/src/app as our workdir. The following instructions will be executed in this location.<br></br>
            WORKDIR /usr/src/app<br></br>
            <br></br>
            # Copy the hello.sh file from this directory to /usr/src/app/ creating /usr/src/app/hello.sh<br></br>
            COPY hello.sh .<br></br>
            <br></br>
            # Alternatively, if we skipped chmod earlier, we can add execution permissions during the build.<br></br>
            # RUN chmod +x hello.sh<br></br>
            <br></br>
            # When running docker run the command will be ./hello.sh<br></br>
            CMD ./hello.sh
          </code>
        </pre>
        <p>By default <b>docker build</b> will look for a file named <b>Dockerfile</b>. 
        With instructions where to build <b>(.)</b> and give it a name <b>(-t 'name')</b></p>
        <pre>
          <code>
            docker build . -t hello-docker<br></br>
            docker image ls<br></br>
            docker run hello-docker
          </code>
        </pre>
        <br></br>
        <h3><b>Docker build cache</b></h3>
        <p>During the build we see from the output that there are three steps: [1/3], [2/3] and [3/3].
        Each instruction in this Dockerfile translates to a layer in the final image.</p>
        <img src={DockerLayers} alt="Dockerfile" />
        <p>Whenever a layer changes, that layer will need to be re-built, also all other layers that come after it will be affected.</p>
        <p>However the build command can start from the previous layer and skip straight automatically detecting changes in the files.</p>
        <p>It is also possible to manually create new layers on top of a image.</p>
        <p>To try this we will need two terminals. On the first one we will launch:</p>
        <pre>
          <code>
              # We replaced the CMD with sh and used -i and -t to start the container so that we can interact with it<br></br>
              docker run -it hello-docker sh
          </code>
        </pre>
        <p>On the second terminal we will launch:</p>
        <pre>
          <code>
            touch additional.txt<br></br>
            docker cp ./additional.txt 'id/name':/usr/src/app/
          </code>
        </pre>
        <p>Now that we have made changes in the container we can use the command <b>docker diff</b> to check what has changed</p>
        <pre>
          <code>
            docker diff 'id/name'
          </code>
        </pre>
        <p>The character in front of the file name indicates the type of the change in the container's filesystem:</p>
        <ul>
          <li>A = added</li>
          <li>D = deleted</li>
          <li>C = changed</li>
        </ul>
        <p>Next we will save the changes as a new image with the command <b>docker commit</b></p>
        <pre>
          <code>
            docker commit 'id/name' hello-docker-additional
          </code>
        </pre>
        <p>Technically the command docker commit added a new layer on top of the image hello-docker, and the resulting image was given the name hello-docker-additional.</p>
        <p>But this is not the best aproach, defining the changes to the Dockerfile is much more sustainable method of managing changes.</p>
    
        <br></br>
        <h2>Exercises 1.7 - 1.8</h2>
        <h3>Exercise 1.7: Image for script</h3>
        <p>Create a new file script.sh on your local machine with the following contents:</p>
        <pre>
          <code>
            while true <br></br>
            &emsp; do<br></br>
            &emsp;&emsp; echo "Input website:"<br></br>
            &emsp;&emsp; read website; echo "Searching.."<br></br>
            &emsp;&emsp; sleep 1; curl http://$website<br></br>
            &emsp; done
          </code>
        </pre>
        <p>Create a Dockerfile for a new image that starts from ubuntu:22.04 and add instructions to install curl into that image.</p> 
        <p>Then add instructions to copy the script file into that image and finally set it to run on container start using CMD.</p>
        <p>After you have filled the Dockerfile, build the image with the name "curler".</p>
        <br></br>
        <p>Our docker file will look something like this:</p>
        <pre>
          <code>
            # Start from the ubuntu image<br></br>
            FROM ubuntu:22.04<br></br>
            <br></br>
            # Update and isntall curl<br></br>
            RUN apt-get update && apt-get install -y curl<br></br>
            <br></br>
            # Use /usr/src/app as our workdir<br></br>
            WORKDIR /usr/src/app<br></br>
            <br></br>
            # Copy the script.sh<br></br>
            COPY script.sh .<br></br>
            <br></br>
            # Give it permissions<br></br>
            RUN chmod +x script.sh<br></br>
            <br></br>
            # When running Docker run the command will be ./script.sh<br></br>
            CMD ./script.sh
          </code>
        </pre>
        <p>Next we will build the image and run it:</p>
        <pre>
          <code>
            docker build . -t curler<br></br>
            docker run -it curler
          </code>
        </pre>
        <br></br>
        <h3>Exercise 1.8: Two line Dockerfile</h3>
        <p>By default our devopsdockeruh/simple-web-service:alpine doesn't have a CMD. Instead, it uses ENTRYPOINT to declare which application is run.</p>
        <p>Our Dockerfile will look something like this</p>
        <pre>
          <code>
            # Base image<br></br>
            FROM devopsdockeruh/simple-web-service:alpine<br></br>
            <br></br>
            # Command to start the server<br></br>
            CMD ["server"]
          </code>
        </pre>
        <p>Now let's build the image and run it:</p>
        <pre>
          <code>
            docker build -t web-server .<br></br>
            docker run web-server
          </code>
        </pre>

    </div>
    </PostDetail>
  );
};

export default DockerPage;