import BooklyBooksImg from "../assets/images/bookly-books.png";
import UKAAImg from "../assets/images/UKAA.png";
import PinpointImg from "../assets/images/pinpoint.png";
import "../App.css";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "UKAA",
    description:
      "Municipal follow-up system. Upgraded the system from Vue 2/Nuxt 2 to Vue 3/Nuxt 3 and transitioned the code from JavaScript to TypeScript.",
    stack: [
      "TypeScript",
      "Vue",
      "Nuxt",
      "BootstrapVue-Next",
      "Pinia",
      "VeeValidate",
      "Zod",
      "Day.js",
    ],
    image: UKAAImg,
    urls: { "https://sambruk.se/ukaa/": "hugeicons:information-square" },
  },
  {
    title: "Book Review Platform",
    description:
      "A fullstack web application where users can sign in, browse, and leave reviews on books.",
    stack: [
      "TypeScript",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    image: BooklyBooksImg,
    urls: {
      "http://74.241.241.32/": "hugeicons:globe-02",
      "https://github.com/haijaa/Bookly": "hugeicons:link-04",
    },
  },
  {
    title: "Pinpoint Dashboard",
    description:
      "A fullstack web application with complete CRUD functionality and end-to-end testing using Cypress.",
    stack: [
      "TypeScript",
      "React",
      "Bootstrap",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Cypress",
    ],
    image: PinpointImg,
    urls: {
      "https://github.com/FridaWikman/pinpoint": "hugeicons:link-04",
    },
  },
];

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
          style={{ backgroundColor: "#f66435" }}
        ></div>
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } items-center gap-y-8 gap-x-4 lg:gap-x-8`}
        >
          <div className="w-full lg:max-w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className=" rounded shadow-lg"
            />
            {project.title === "UKAA" && (
              <p className="italic text-xs text-gray-500 mt-1">
                The personal data shown in the image is fictitious.
              </p>
            )}
          </div>
          <div
            className={`w-full lg:w-1/2 space-y-2 text-center ${
              index % 2 !== 0 ? "lg:text-right" : "lg:text-left"
            }`}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-start">
              {project.stack.map((item, index) => (
                <span
                  key={index}
                  className="accent-color pe-2 py-0.5 rounded-sm text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div
              className={`flex justify-center ${
                index % 2 !== 0 ? "lg:justify-end" : "lg:justify-start"
              } `}
            >
              {Object.entries(project.urls).map(([url, icon], index) => (
                <a
                  className="accent-hover transition-transform"
                  key={index}
                  href={url}
                  target="_blank"
                >
                  <Icon
                    className="mt-2 me-2"
                    icon={icon}
                    width="25"
                    height="25"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
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
