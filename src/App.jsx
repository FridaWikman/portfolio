import './App.css'
import { Icon } from '@iconify/react'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <header className="fixed top-0 right-0 py-6 z-50">
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-base font-medium accent-hover">
            About
          </a>
          <a href="#projects" className="text-base font-medium accent-hover">
            Projects
          </a>
          {/* <div className="relative"> */}
          <a href="#contact" className="text-base font-medium accent-hover">
            Contact
          </a>
          <div className="accent-color w-24 border-l border border-accent"></div>
          {/* </div> */}
        </nav>
      </header>
      <div className="fixed bottom-0 left-6 flex flex-col items-center gap-4 z-50">
        {/* Ikoner */}
        <a
          href="https://github.com/FridaWikman"
          target="_blank"
          className="accent-hover hover:rotate-6 transition-transform"
        >
          <Icon icon="hugeicons:github" width="25" height="25" />
        </a>
        <a href="" className="accent-hover hover:rotate-6 transition-transform">
          <Icon icon="hugeicons:linkedin-02" width="25" height="25" />
        </a>
        <div className="accent-color w-px h-24 border-l border mt-4"></div>
      </div>

      <main className="min-h-screen pt-10 px-20 md:px-30 xl:px-40">
        <section className="max-w-4xl mx-auto py-20 px-4 min-h-screen">
          <div className="mb-16 lg:pr-14 pt-10">
            <h1 className="mb-4">
              <span className="accent-color">Hello,</span>
              <span className="opacity-60"> my name is</span>
            </h1>
            <h2 className="accent-color font-accent-color text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold whitespace-nowrap text-nowrap">
              Frida Wikman
            </h2>
            <h3 className=" font-text-xl sm:text-2xl md:text-4xl font-semibold opacity-60 mt-2 opacity-60">
              I'm a web developer.
            </h3>
            <button className="bg-transparent accent-color font-semibold mt-5 py-1 px-4 border hover:border-transparent hover:bg-grey-300 rounded">
              Get in touch
            </button>
          </div>
        </section>
        <section
          id="about"
          className="min-h-screen space-y-8 max-w-4xl mx-auto py-20 px-4"
        >
          <div>
            <h4 className="text-4xl font-bold whitespace-nowrap">ABOUT ME</h4>
            {/* <div
              className="mt-2 w-20 h-0.5 mx-auto rounded"
              style={{ backgroundColor: '#f66435' }}
            ></div> */}
          </div>
          <p className="text-base max-w-9/10 opacity-60 leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            repellendus numquam ratione dignissimos, inventore mollitia
            voluptatibus sapiente nostrum aliquid soluta beatae minus ipsum
            omnis ex dolorum tenetur nobis commodi nisi.
          </p>
        </section>
        <Projects />
        <section
          id="contact"
          className="min-h-screen max-w-4xl mx-auto py-20 px-4"
        >
          <h4 className="text-4xl font-bold">CONTACT</h4>
          <p className="text-base max-w-4xl opacity-60 leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            repellendus numquam ratione dignissimos, inventore mollitia
            voluptatibus sapiente nostrum aliquid soluta beatae minus ipsum
            omnis ex dolorum tenetur nobis commodi nisi.
          </p>
        </section>
      </main>
    </>
  )
}

export default App
