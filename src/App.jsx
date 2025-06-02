import './App.css'
import { Icon } from '@iconify/react'
import Projects from './components/Projects'
import { useEffect, useState } from 'react'
import Experience from './components/Experience'
import useWindowDimensions from './components/useWindowSize'
// import Link from 'next/link'

function App() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showBurger, setShowBurger] = useState(false)
  const { width } = useWindowDimensions()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const links = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleNavScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setShowHeader(false) // scrollar ner
      } else {
        setShowHeader(true) // scrollar upp
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleNavScroll)

    return () => window.removeEventListener('scroll', handleNavScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (width > 768) setShowBurger(false)
  }, [width])

  return (
    <>
      <header
        className={`flex items-center justify-end gap-8 fixed top-0 right-0 w-full py-6 z-50 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex items-center justify-end gap-8">
          <div className="hidden md:flex gap-8">
            {links.map((link, index) => (
              <a
                href={link.path}
                key={index}
                className="text-base font-medium accent-hover"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="accent-color w-24 border-l border border-accent hidden md:block"></div>
        </nav>
        <div className="md:hidden flex justify-end">
          {/* Öppna meny-knapp */}
          {!showBurger && (
            <button
              className="accent-hover pe-6 cursor-pointer"
              onClick={() => setShowBurger(true)}
              aria-label="Öppna meny"
            >
              <Icon icon="material-symbols:menu" width="32" height="32" />
            </button>
          )}
        </div>
      </header>
      {showBurger && (
        <div
          className={`fixed top-0 right-0 h-full w-[50%] sm:w-[30%] bg-[#f4efca] shadow-lg z-40 transition-transform duration-300 z-60 ${
            showBurger ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative h-full w-full px-6 pt-6 flex flex-col items-end">
            <button
              onClick={() => setShowBurger(false)}
              className="accent-hover mb-8 cursor-pointer"
              aria-label="Stäng meny"
            >
              <Icon
                icon="material-symbols:close-rounded"
                width="32"
                height="32"
              />
            </button>
            <nav className="flex flex-col items-end gap-6 text-2xl w-full">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="accent-hover transition-colors duration-200"
                  onClick={() => setShowBurger(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

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
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="cursor-pointer bg-transparent text-orange-500 font-semibold mt-5 py-1 px-4 border border-orange-500 rounded hover:bg-orange-500 hover:text-[#f4efca] hover:border-orange-500 transition-colors duration-300"
            >
              Get in touch
            </button>
          </div>
        </section>
        <section
          id="about"
          className="min-h-screen space-y-8 max-w-4xl mx-auto py-20 px-4"
        >
          <div className="text-start inline-block">
            <h4 className="text-4xl font-bold">ABOUT ME</h4>
            <div
              className="mt-2 w-12 h-0.5 rounded"
              style={{ backgroundColor: '#f66435' }}
            ></div>
          </div>
          <p className="text-base max-w-9/10 opacity-60 leading-normal">
            Hi! I’m a web developer who enjoys crafting beautiful and functional
            websites. I love solving problems with code and turning creative
            ideas into real, interactive experiences. When I’m not coding,
            you’ll find me spending time in the forest or enjoying a good book.
          </p>
        </section>
        <Experience />
        <Projects />
        <section
          id="contact"
          className="min-h-screen max-w-4xl mx-auto py-20 px-4"
        >
          <div className="text-start inline-block mb-10">
            <h4 className="text-4xl font-bold">CONTACT</h4>
            <div
              className="mt-2 w-12 h-0.5 rounded"
              style={{ backgroundColor: '#f66435' }}
            ></div>
          </div>
          <div className="text-base max-w-4xl leading-normal space-y-4">
            <p className=" opacity-60">
              Feel free to reach out! I'm always open to new projects,
              collaborations, or just a friendly chat.
            </p>

            <a href="mailto:fridamariawikman@gmail.com?" className="flex gap-2">
              <span>
                {' '}
                <Icon icon="hugeicons:mail-01" width="25" height="25" />
              </span>
              <span className="accent-color underline">
                fridamariawikman@gmail.com
              </span>
            </a>
          </div>
        </section>
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-[#f4efca] text-black p-3 rounded-full shadow-lg hover:bg-[#e0dab5] transition"
            aria-label="Till toppen"
          >
            <Icon
              icon="material-symbols:keyboard-arrow-up-rounded"
              width="28"
              height="28"
            />
          </button>
        )}
      </main>
    </>
  )
}

export default App
