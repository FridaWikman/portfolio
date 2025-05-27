import '../App.css'

const experiences = [
  //   {
  //   role: 'Web Developer',
  //   company: 'Nejla AB',
  //   period: 'Jun 2025 – Jul 2025',
  //   description: 'Worked on client websites, improved UX and fixed bugs.',
  // },
  {
    role: 'Intern Web Developer',
    company: 'Nejla AB',
    periods: [
      {
        period: 'Jan 2025 – Maj 2025',
        description: (
          <>
            Deepened my work with{' '}
            <span className="accent-color font-semibold">Vue 3</span>,{' '}
            <span className="accent-color font-semibold">Nuxt 3</span> and{' '}
            <span className="accent-color font-semibold">TypeScript</span>.
            Focused on improving{' '}
            <span className="accent-color font-semibold">form logic</span> and
            enhancing validation using{' '}
            <span className="accent-color font-semibold">Zod</span> and{' '}
            <span className="accent-color font-semibold">Vee-Validate</span>.
            Helped build reusable components and refine existing features.
          </>
        ),
      },
      {
        period: 'Aug 2024 – Oct 2024',
        description: (
          <>
            Helped migrate a large codebase from{' '}
            <span className="accent-color font-semibold">JavaScript</span> to{' '}
            <span className="accent-color font-semibold">TypeScript</span>,
            while upgrading from{' '}
            <span className="accent-color font-semibold">Vue 2</span> to{' '}
            <span className="accent-color font-semibold">Vue 3</span> with{' '}
            <span className="accent-color font-semibold">Nuxt 3</span>. Worked
            on building forms using{' '}
            <span className="accent-color font-semibold">
              BootstrapVue Next
            </span>
            , adding validation with{' '}
            <span className="accent-color font-semibold">Vee-Validate</span> and{' '}
            <span className="accent-color font-semibold">Zod</span>.
            Collaborated in an{' '}
            <span className="accent-color font-semibold">Agile</span> team using{' '}
            <span className="accent-color font-semibold">GitLab</span> and{' '}
            <span className="accent-color font-semibold">Kanban</span>.
          </>
        ),
      },
    ],
  },
]

const education = [
  {
    role: 'JavaScript Developer Student',
    company: 'IT-Högskolan',
    period: '2023 – 2025',
    description: (
      <>
        Gained solid skills in{' '}
        <span className="accent-color font-semibold">HTML</span>,{' '}
        <span className="accent-color font-semibold">CSS</span>, and{' '}
        <span className="accent-color font-semibold">native JavaScript</span>.
        Worked with <span className="accent-color font-semibold">Vue.js</span>{' '}
        and <span className="accent-color font-semibold">React</span>, including{' '}
        <span className="accent-color font-semibold">React Native</span> for
        cross-platform apps.
        <br />
        Applied <span className="accent-color font-semibold">
          Agile
        </span> and <span className="accent-color font-semibold">Scrum</span>{' '}
        methods, building fullstack apps with{' '}
        <span className="accent-color font-semibold">Node.js</span>,{' '}
        <span className="accent-color font-semibold">Express</span>, and{' '}
        <span className="accent-color font-semibold">SQL</span>.
        <br />
        Familiar with deployment using{' '}
        <span className="accent-color font-semibold">Docker</span>,{' '}
        <span className="accent-color font-semibold">Render</span>, and{' '}
        <span className="accent-color font-semibold">PostgreSQL</span>, with
        focus on <span className="accent-color font-semibold">GDPR</span> and
        security.
        <br />
        Experienced in writing tests with{' '}
        <span className="accent-color font-semibold">Cypress</span> and using{' '}
        <span className="accent-color font-semibold">TypeScript</span> for
        better code quality.
      </>
    ),
  },
  {
    role: 'B.Sc. in Early Childhood Education',
    company: 'University of Gothenburg',
    period: '2014 – 2018',
    description:
      'Completed a bachelor’s degree in Early Childhood Education (Förskollärare) with a focus on child development and pedagogy.',
  },
]
export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen space-y-8 max-w-4xl mx-auto py-20 px-4"
    >
      <div className="text-start inline-block">
        <h4 className="text-4xl font-bold">EXPERIENCE & EDUCATION</h4>
        <div
          className="mt-2 w-12 h-0.5 rounded"
          style={{ backgroundColor: '#f66435' }}
        ></div>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <ul className="space-y-8">
        {experiences.map((exp, index) => (
          <li key={index} className="border-l-4 border-accent pl-6">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-500 italic">
              {exp.company} {exp.period ? ` | ${exp.period}` : ''}
            </p>
            {exp.description ? (
              <p className="mt-2 text-gray-700">{exp.description}</p>
            ) : (
              exp.periods.map((p, i) => (
                <div key={i} className="mt-3">
                  <p className="text-sm text-gray-400 italic">{p.period}</p>
                  <p className="text-gray-700">{p.description}</p>
                </div>
              ))
            )}
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <ul className="space-y-8">
          {education.map((edu, index) => (
            <li key={index} className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold">{edu.role}</h3>
              <p className="text-sm text-gray-500 italic">
                {edu.company} {edu.period ? ` | ${edu.period}` : ''}
              </p>
              {edu.description && (
                <p className="mt-2 text-gray-700">{edu.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
