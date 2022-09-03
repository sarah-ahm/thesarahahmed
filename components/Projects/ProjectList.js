import ProjectItem from './ProjectItem'

const ProjectList = (props) => {
  const { projects } = props

  return <ul role="list">
    {projects.map(project =>
      <ProjectItem project={project} key={project.name} />)}
  </ul>
}

export default ProjectList