import './App.css'
import { Icon } from '@iconify/react'

function App() {
  return (
    <>
      <header className="fixed top-0 right-0 p-6 z-50">
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-base font-medium hover:underline">
            About
          </a>
          <a href="#projects" className="text-base font-medium hover:underline">
            Projects
          </a>
          <div className="relative">
            <a
              href="#contact"
              className="text-base font-medium hover:underline"
            >
              Contact
            </a>
            {/* <div className="accent-color w-px h-24 border-l border border-accent mt-4"></div> */}
          </div>
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

        {/* Prickat streck */}
        <div className="accent-color w-px h-24 border-l border border-accent mt-4"></div>
      </div>
      <main className="min-h-screen pt-10 mx-7">
        <div className="lg:p-30">
          <div className="mb-16 lg:pr-16">
            <h1 className="accent-color text-base">Hello, my name is</h1>
            <h2 className="text-8xl font-semibold leading-none">
              Frida Wikman.
            </h2>
            <h3 className="text-4xl font-semibold opacity-60 leading-none">
              I'm a web developer.
            </h3>
            {/* <div className="mt-16 flex justify-between max-w-[60px]">
              <a
                href="https://github.com/FridaWikman"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-hover hover:rotate-6 transition-transform"
              >
                <Icon icon="hugeicons:github" width="25" height="25" />
              </a>
              <a
                href=""
                className="accent-hover hover:rotate-6 transition-transform"
              >
                <Icon icon="hugeicons:linkedin-02" width="25" height="25" />
              </a>
            </div> */}
          </div>
          {/* <div className="content-div lg:pr-8">
          <h4 className="text-xl font-medium mb-2">About</h4>
          <p className="text-base font-semibold opacity-60 leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            repellendus numquam ratione dignissimos, inventore mollitia
            voluptatibus sapiente nostrum aliquid soluta beatae minus ipsum
            omnis ex dolorum tenetur nobis commodi nisi.
          </p>
        </div> */}
        </div>
      </main>
    </>
  )
}

export default App
