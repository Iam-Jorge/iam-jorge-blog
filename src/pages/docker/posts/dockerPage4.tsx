import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="In-depth dive into images"
      date="25 Feb 2025"
      readTime="10"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>In-depth dive into images</h2>

        <p><b>Where do the images come from?</b></p>
        <p>Docker will automatically search Docker Hub for the image if it is not found locally. This means that we can pull and run 
          any public image from Docker's servers.</p>

        <p>We can search for images in the Docker Hub with:</p>
        <pre>
          <code>
            docker search ubuntu
          </code>
        </pre>
        <p>It provides the name of the image, a short description, the number of stars and "official" and "automated" statuses.</p>
        <br></br>
        <p><b>A detailed look into an image</b></p>
        <p>We can pull an image and later tag it locally for convenience.</p>
        <pre>
          <code>
            docker pull ubuntu:22.04<br></br>
            docker tag ubuntu:22.04 ubuntu:jammy_jellyfish
          </code>
        </pre>

        <br></br>
        <h4><b>Exercises 1.5 - 1.6</b></h4>
        <p><b>Exercise 1.5: Sizes of images</b></p>
        <p>For this exercise we will pull 'devopsdockeruh/simple-web-service:ubuntu' and 'devopsdockeruh/simple-web-service:alpine'
        to compare the image sizes. Go inside the Alpine container and make sure the secret message functionality is the same. 
        Alpine version doesn't have bash but it has sh, a more bare-bones shell.</p>

        <p>1. In order to find the secret message in the alpine image we will use the following commands</p>
        <pre>
          <code>
            docker run -itd devopsdockeruh/simple-web-service:alpine
          </code>
        </pre>
        <p>2. Then we will list the running images</p>
        <pre>
          <code>
            docker ps -a
          </code>
        </pre>
        <p>3. We will launch sh</p>
        <pre>
          <code>
            docker exec -it 'id' sh
          </code>
        </pre>
        <p>4. And finally list the file content</p>
        <pre>
          <code>
            cat -f ./text.log
          </code>
        </pre>
        <br></br>
        <p>Now to compare images sizes we have different options</p>
        <p>We can list all the images, but the images need to be stopped, won't list running images</p>
        <pre>
          <code>
            docker images
          </code>
        </pre>
        <p>Another option is the 'history' command this shows the layers, their sizes, and when they were created</p>
        <pre>
          <code>
            docker history 'id'
          </code>
        </pre>
        <br></br>
        <p><b>Exercise 1.6: Hello Docker Hub</b></p>
        <p>Run docker run -it devopsdockeruh/pull_exercise. Navigate through the 
        <a href="https://hub.docker.com/">Docker hub </a> to find the docs and Dockerfile that was used to create the image.</p>
        <p>Read the Dockerfile and/or docs to learn what input will get the application to answer a "secret message".</p>
        <p>After running the images and going through the dockerfile the input is <b>'basics'</b></p>

    </div>

    </PostDetail>
  );
};

export default DockerPage;