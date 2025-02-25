import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

const DockerPage = () => {
  return (
    <PostDetail
      title="In-depth dive into containers"
      date="25 Feb 2025"
      readTime="10"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>In-depth dive into containers</h2>
        <p>Next, we will start moving towards a more meaningful image. This time we will open up an interactive session and test stuff before "storing" it in our Dockerfile.</p>
        <pre>
          <code>
            docker run -it ubuntu:22.04
          </code>
        </pre>
        <p>We will update and install curl and python</p>
        <pre>
          <code>
            apt-get update && apt-get install -y curl python3
          </code>
        </pre>
        <p>Run curl to pull yt-dlp a program that downloads YouTube and Imgur videos.</p>
        <pre>
          <code>
            curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
          </code>
        </pre>
        <p>Next, we will add permissions and run the downloaded binary:</p>
        <pre>
          <code>
            chmod a+rx /usr/local/bin/yt-dlp
          </code>
        </pre>
        <br></br>
        <p>So now when we know exactly what we need. Starting FROM ubuntu:22.04, we'll add the above steps to our Dockerfile.</p>
        <p>We should always try to keep the most prone to change rows at the bottom, by adding the instructions to the bottom we can 
          preserve our cached layers - this is a handy practice to speed up the build process when there are time-consuming operations
           like downloads in the Dockerfile. We also added WORKDIR, which will ensure the videos will be downloaded there.</p>
        <p>We will create a new Dockerfile, it should have (capital "D" and lowercase "ockerfile") 
          with no extension and we will include the following</p>
        <pre>
          <code>
            FROM ubuntu:22.04 <br></br>
            <br></br>
            WORKDIR /mydir<br></br>
            <br></br>
            RUN apt-get update && apt-get install -y curl python3<br></br>
            RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp<br></br>
            RUN chmod a+x /usr/local/bin/yt-dlp<br></br>
            <br></br>
            CMD ["/usr/local/bin/yt-dlp"]
          </code>
        </pre>
        <p>Now let's build the Dockerfile as image yt-dlp (it creates and images from an existing Dockerfile in the current directory) 
          and let's run it:</p>
        <pre>
          <code>
            docker build -t yt-dlp .
          </code>
        </pre>
        <pre>
          <code>
            docker run yt-dlp
          </code>
        </pre>        
        <p>As we now know, the argument we gave it is replacing the command or CMD</p>
        <p>We need a way to have something before the command. Luckily we have a way to do this: we can use 
          ENTRYPOINT to define the main executable and then Docker will combine our run arguments for it.</p>
          <ul>
            <li><strong>ENTRYPOINT:</strong> Specifies the executable to be used when the container starts and is always executed when the container is run.</li>
            <li><strong>CMD:</strong> Refers to the default arguments passed to the executable defined in ENTRYPOINT. The argument defined by CMD can be overridden by giving one in the command line.</li>
          </ul>
          <pre>
          <code>
            FROM ubuntu:22.04 <br></br>
            <br></br>
            WORKDIR /mydir<br></br>
            <br></br>
            RUN apt-get update && apt-get install -y curl python3<br></br>
            RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp<br></br>
            RUN chmod a+x /usr/local/bin/yt-dlp<br></br>
            <br></br>
            # Replacing CMD with ENTRYPOINT<br></br>
            ENTRYPOINT ["/usr/local/bin/yt-dlp"]
          </code>
        </pre>
        <p>And now it works like it should:</p>
        <pre>
          <code>
            docker run yt-dlp https://www.youtube.com/watch?v=XsqlHHTGQrw
          </code>
        </pre>  
        <br></br>
        <p><b>Exec form VS. Shell form</b></p>
        <p>In the shell form, the command is provided as a string without brackets. In the exec form the command and it's arguments are provided as a list (with brackets), see the table below:</p>
        <table>
          <tr>
            <th>Dockerfile</th>
            <th>Resulting command</th>
          </tr>
          <tr>
            <td>ENTRYPOINT /bin/ping -c 3 <br></br>
              CMD localhost</td>
            <td>/bin/sh -c '/bin/ping -c 3' /bin/sh -c localhost</td>
          </tr>
          <tr>
            <td>ENTRYPOINT ["/bin/ping","-c","3"] <br></br>
              CMD localhost</td>
            <td>/bin/ping -c 3 /bin/sh -c localhost</td>
          </tr>
          <tr>
            <td>ENTRYPOINT /bin/ping -c 3 <br></br>
              CMD ["localhost"]</td>
            <td>/bin/sh -c '/bin/ping -c 3' localhost</td>
          </tr>
          <tr>
            <td>ENTRYPOINT ["/bin/ping","-c","3"] <br></br>
              CMD ["localhost"]</td>
            <td>/bin/ping -c 3 localhost</td>
          </tr>
        </table>
        <p>Most of the time we can ignore ENTRYPOINT when building our images and only use CMD. 
          For example, Ubuntu image defaults the ENTRYPOINT to bash so we do not have to worry about it. 
          And it gives us the convenience of allowing us to overwrite the CMD easily, for example, 
          with bash to go inside the container.</p>


    </div>

    </PostDetail>
  );
};

export default DockerPage;