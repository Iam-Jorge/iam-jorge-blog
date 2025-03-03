import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';
import DockerEnvironment from '../../../assets/images/Docker/DockerBackFront.png';

const DockerPage = () => {
  return (
    <PostDetail
      title=""
      date="02 Mar 2025"
      readTime="10"
      category="Docker"
      imageUrl={Docker}
      tags={['Docker', 'Containers', 'DevOps']}
    >
    <div>
        <h2>Utilizing tools from the Registry</h2>
        <p>Containerization has become a crucial skill in modern development and operations. With Docker, 
          it's possible to containerize almost any project, regardless of the technology stack.</p>
        <p>We'll walk through the process of containerizing an application using Docker. We will use this <a href="https://github.com/docker-hy/material-applications/tree/main/rails-example-project">project</a> </p>
        <p>We will need to clone the repository and build a Dockerfile following the instructions in the README:</p>
        <pre>
          <code>
            FROM ruby:3.1.0<br></br>
            <br></br>
            EXPOSE 3000<br></br>
            <br></br>
            WORKDIR /usr/src/app<br></br>
            <br></br>
            # Install the correct bundler version<br></br>
            RUN gem install bundler:2.3.3<br></br>
            <br></br>
            # Copy the files required for dependencies to be installed<br></br>
            COPY Gemfile* ./<br></br>
            <br></br>
            # Install all dependencies<br></br>
            RUN bundle install<br></br>
            <br></br>
            # Copy all of the source code<br></br>
            COPY . .<br></br>
            <br></br>
            # We pick the production mode since we have no intention of developing the software inside the container.<br></br>
            # Run database migrations by following instructions from README<br></br>
            RUN rails db:migrate RAILS_ENV=production<br></br>
            <br></br>
            # Precompile assets by following instructions from README<br></br>
            RUN rake assets:precompile<br></br>
            <br></br>
            # And finally the command to run the application<br></br>
            CMD ["rails", "s", "-e", "production"]<br></br>
          </code>
        </pre>
        <p>To run it:</p>
        <pre>
          <code>
            docker build . -t rails-project && docker run -p 3000:3000 rails-project
          </code>
        </pre>
        <br></br>
        <h2>Exercises 1.11-1.14</h2>
        <h3>Exercise 1.11: Spring</h3>
        <p>Create a Dockerfile for an old Java Spring project that can be found from the <a href="https://github.com/docker-hy/material-applications/tree/main/spring-example-project">course repository</a>.</p>
        <p>The setup should be straightforward with the README instructions. Tips to get you started:</p>
        <p>There are many options for running Java, you may use eg. <a href="https://hub.docker.com/_/amazoncorretto">amazoncorretto</a> FROM amazoncorretto:_tag_ to get Java instead of installing it manually. Pick the tag by using the README and Docker Hub page.</p>
        <p>You've completed the exercise when you see a 'Success' message in your browser.</p>
        <p>This one makes for an interesting neurodivergent solution.</p>
        <ul>
          <li>Let's start by cloning the repo and setting the mvnw.cmd format to Linux</li>
          <li>Then build the docker file and making sure to copy the project from the correct path</li>
        </ul>
        <pre>
          <code>
            FROM amazoncorretto:8<br></br>
            <br></br>
            WORKDIR /usr/src<br></br>
            <br></br>
            COPY ./spring-example-project/ . <br></br>
            <br></br>
            RUN ./mvnw package<br></br>
            <br></br>
            CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]<br></br>
            <br></br>
            EXPOSE 8080
          </code>
        </pre>
        <p>To build and run</p>
        <pre>
          <code>
            docker build . -t spring-example-project; docker run -p 8080:8080 spring-example-project
          </code>
        </pre>
        <p>Finally going to <a href="http://localhost:8080">http://localhost:8080</a></p>
        <br></br>
        <h2>Mandatory exercises</h2>
        <h3>Exercise 1.12: Hello, frontend!</h3>
        <p>A good developer creates well-written READMEs. Such that they can be used to create Dockerfiles with ease.</p>
        <p>Clone, fork or download the project from <a href="https://github.com/docker-hy/material-applications/tree/main/example-frontend">from</a></p>
        <p>Create a Dockerfile for the project (example-frontend) and give a command so that the project runs in a Docker container 
          with port 5000 exposed and published so when you start the container and navigate to http://localhost:5000 you will see 
          message if you're successful.</p>
        <pre>
          <code>
            FROM amazoncorretto:8<br></br>
            <br></br>
            WORKDIR /usr/src/app<br></br>
            <br></br>
            # The docker file is inside the directory<br></br>
            COPY . . <br></br>
            <br></br>
            # Updates packages from all repositories and isntalls curl<br></br>
            RUN yum update -y && yum install -y curl<br></br>
            <br></br>
            # To download and install node<br></br>
            RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash - && yum install -y nodejs<br></br>
            <br></br>
            # Installs npm<br></br>
            RUN npm install && npm install -g serve<br></br>
            <br></br>
            # Check the install <br></br>
            RUN node -v && npm -v<br></br>
            <br></br>
            # Builds the static files<br></br>
            RUN npm run build<br></br>
            <br></br>
            CMD ["npx", "serve", "-s", "-l", "5000", "build"]<br></br>
            <br></br>
            EXPOSE 5000<br></br>
          </code>
        </pre>
        <p>The meesage we get: <b>Exercise 1.12: Congratulations! You configured your ports correctly!</b></p>
        <br></br>
        <h3>1.13: Hello, backend!</h3>
        <p>Clone, fork or download the project from <a href="https://github.com/docker-hy/material-applications/tree/main/example-backend">from</a></p>
        <p>Create a Dockerfile for the project (example-backend). Start the container with port 8080 published.</p>
        <p>When you start the container and navigate to <a href="http://localhost:8080/ping">http://localhost:8080/ping</a> you should get a "pong" as a response.</p>
        <pre>
          <code>
            FROM amazoncorretto:8<br></br>
            <br></br>
            WORKDIR /usr/src/app<br></br>
            <br></br>
            # The docker file is inside the directory<br></br>
            COPY . . <br></br>
            <br></br>
            # Updates packages from all repositories installs wget tar gzip<br></br>
            RUN yum update -y && yum install -y wget tar gzip<br></br>
            <br></br>
            # Downloading Golang<br></br>
            RUN wget https://go.dev/dl/go1.22.5.linux-amd64.tar.gz<br></br>
            # Extracting Downloaded Archive<br></br>
            RUN tar -C /usr/local -xzf go1.22.5.linux-amd64.tar.gz <br></br>
            <br></br>
            # Setting Go Paths: ENV defines a permanent environment variable that persists<br></br>
            ENV GOPATH=/root/go<br></br>
            ENV PATH=$PATH:/usr/local/go/bin:$GOPATH/bin<br></br>
            <br></br>
            #Verifying the Installation<br></br>
            RUN go version <br></br>
            <br></br>
            # Generates the binary and tests<br></br>
            RUN go build<br></br>
            RUN go test<br></br>
            <br></br>
            # Execute project<br></br>
            CMD ./server<br></br>
            <br></br>
            EXPOSE 8080
          </code>
        </pre>
        <p>To build and run it:</p>
        <pre>
          <code>
            docker build . -t example-backend; docker run -p 8080:8080 example-backend                                                                                                 0.0s
          </code>
        </pre>
        <p>And we get a response "pong"</p>
        <br></br>
        <h3>Exercise 1.14: Environment</h3>
        <p>Start both the frontend and the backend with the correct ports exposed and add ENV to Dockerfile with the necessary information from both READMEs (front, back).</p>
        <p>Ignore the backend configurations until the frontend sends requests to _backend_url_/ping when you press the button.</p>
        <p>You know that the configuration is ready when the button for 1.14 of frontend responds and turns green.</p>
        <p>The frontend will first talk to your browser. Then the code will be executed from your browser and that will send a message to the backend.</p>
        <img src={DockerEnvironment} alt="Docker environment" />
        <ul>TIPS:
          <li>When configuring web applications keep the browser developer console ALWAYS open, F12 or cmd+shift+I when the browser window is open. Information about configuring cross-origin requests is in the README of the backend project.</li>
          <li>The developer console has multiple views, the most important ones are Console and Network. Exploring the Network tab can give you a lot of information on where messages are being sent and what is received as a response!</li>
        </ul>
        <p>Added the following line to the frondend Dockerfile:</p>
        <pre>
          <code>
            # To manually configure API path, build with REACT_APP_BACKEND_URL<br></br>
            ENV REACT_APP_BACKEND_URL=http://localhost:8080
          </code>
        </pre>
        <p>Added the following line to the backend Dockerfile:</p>
        <pre>
          <code>
            # To pass an url through the cors<br></br>
            ENV REQUEST_ORIGIN http://localhost:5000
          </code>
        </pre>
        <p>When completed you will get the message "Success! Great job!"</p>
        
    </div>

    </PostDetail>
  );
};

export default DockerPage;