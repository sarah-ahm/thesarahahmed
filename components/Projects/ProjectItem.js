import Image from 'next/image'

const ProjectItem = (props) => {
  const { project } = props

  return <li>
    <div>
      <Image src={project.image} alt="" objectFit="cover" objectPosition="center" layout="fill" />
    </div>

  <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  </li>
}

export default ProjectItem