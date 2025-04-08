import './App.css'
import { Icon } from '@iconify/react'

function App() {
  return (
    <main className="min-h-screen pt-6 mx-7">
      <div className="wrapper flex flex-col gap-16 lg:flex-row lg:justify-between lg:p-16">
        <div className="introduction-div mb-16 lg:min-w-[50%] lg:pr-16">
          <h1 className="text-yellow-300 text-base">Hello, my name is</h1>
          <h2 className="text-2xl font-semibold leading-none">Frida Wikman.</h2>
          <h3 className="text-2xl font-semibold opacity-60 leading-none">
            I'm a Frontend Developer.
          </h3>
          <div className="mt-16 flex justify-between max-w-[60px]">
            <a
              href="https://github.com/FridaWikman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 hover:rotate-6 transition-transform"
            >
              <Icon icon="hugeicons:github" width="25" height="25" />
            </a>
            <a
              href=""
              className="hover:text-yellow-300 hover:rotate-6 transition-transform"
            >
              <Icon icon="hugeicons:linkedin-02" width="25" height="25" />
            </a>
          </div>
        </div>
        <div className="content-div lg:pr-8">
          <h4 className="text-xl font-medium mb-2">About</h4>
          <p className="text-base text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            repellendus numquam ratione dignissimos, inventore mollitia
            voluptatibus sapiente nostrum aliquid soluta beatae minus ipsum
            omnis ex dolorum tenetur nobis commodi nisi.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
