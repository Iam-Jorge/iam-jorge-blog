import PostDetail from '../../../components/postDetails/PostDetails';
import Docker from '../../../assets/images/Docker/docker.png';

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
            RUN ./mvnw package
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

    </div>

    </PostDetail>
  );
};

export default DockerPage;