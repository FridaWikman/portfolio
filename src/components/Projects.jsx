import BooklyBooksImg from '../assets/images/bookly-books.png'
import '../App.css'

const projects = [
  {
    title: 'Bookreview Website',
    description: 'A full-stack website where users can login and review books.',
    stack: ['PostgreSQL', 'MongoDB', 'React'],
    image: BooklyBooksImg,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen space-y-16 max-w-4xl mx-auto py-20 px-4"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center ">PROJECTS</h2>
        <div
          className="mt-2 w-12 h-0.5 mx-auto rounded"
          style={{ backgroundColor: '#f66435' }}
        ></div>
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          } items-center gap-8`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full lg:w-1/2 rounded shadow-lg"
          />
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            {project.stack.map((item, index) => (
              <span key={index} className="accent-color me-2">
                {item}
              </span>
              // <span
              //   key={index}
              //   class="orange-bg opacity-60 text-xs font-bold me-2 px-2.5 py-0.5 rounded-sm"
              // >
              //   {item}
              // </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

// <section id="projects" className="p-30 max-w-9/10 ">
// <h4 id="about" className="text-4xl font-bold">
//   PROJECTS
// </h4>
// <p className="text-base max-w-9/10 opacity-60 leading-normal">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
//   repellendus numquam ratione dignissimos, inventore mollitia
//   voluptatibus sapiente nostrum aliquid soluta beatae minus ipsum
//   omnis ex dolorum tenetur nobis commodi nisi.
// </p>
// </section>
