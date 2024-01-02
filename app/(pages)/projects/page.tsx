import Container from "@/components/container"
import Project from "@/components/project"

const Projects = () => {
  return (
    <Container className="grid-cols-mobile-portfolio sm:grid-cols-tablet-portfolio lg:grid-cols-desktop-portfolio grid gap-6">
      <Project
        title="Behealthy"
        description="Application that shows all your workouts and meals in an organized and separate way. Application that shows all your workouts and meals in an organized and separate way."
      />

      <Project
        title="Behealthy"
        description="Application that shows all your workouts and meals in an organized and separate way. Application that shows all your workouts and meals in an organized and separate way."
        demoUrl="/"
      />

      <Project
        title="Behealthy"
        description="Application that shows all your workouts and meals in an organized and separate way. Application that shows all your workouts and meals in an organized and separate way."
        demoUrl="/"
        repositoryUrl="/"
      />

      <Project
        title="Behealthy"
        description="Application that shows all your workouts and meals in an organized and separate way. Application that shows all your workouts and meals in an organized and separate way."
        repositoryUrl="/"
      />

    </Container>
  )
}

export default Projects