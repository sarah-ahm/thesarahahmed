import Link from 'next/link';
import utilStyles from '../styles/utils.module.scss';

const projects = [
  { name: "LinkedIn for Students Concept", description: "Creating a space for young professional career development on LinkedIn.", image: "" },
  { name: "UX Design and Research @ Santa Clara University", description: "Simplifying the process of finding research resources by making an underused website more navigable and scannable.", image: "" },
  { name: "UX Writing @ Salesforce", description: "", image: "" },
  { name: "Design Lead @ Locals", description: "Broadening perspectives and inspiring authentic discovery in the Bay Area with a community-based mobile app.", image: "" },
  { name: "Product Design @ Opal", description: "Enabling college and bootcamp students to easily find best-fit mentors and manage their mentorships.", image: "" },
]

export default function Home() {
  return (
    <div>
      <main>
        {/* <h1 className="title">
          Read{' '}
          <Link href="/projects/scu">
            <a>this page!</a>
          </Link>
        </h1> */}

        {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
      </main>
    </div>
  )
}
