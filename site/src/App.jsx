import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import ProjectCard from "./components/ProjectCard"
import SectionTitle from "./components/SectionTitle"
import projects from "./data/projects"

const GITHUB_URL = "https://github.com/oldbshaw"
const EMAIL = "keagancheong@gmail.com"

function fallbackCopy(text) {
  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "absolute"
  textarea.style.left = "-9999px"

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}

export default function App() {
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]")

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -6% 0px",
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!emailCopied) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setEmailCopied(false)
    }, 1600)

    return () => window.clearTimeout(timeoutId)
  }, [emailCopied])

  async function handleCopyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        fallbackCopy(EMAIL)
      }
    } catch {
      fallbackCopy(EMAIL)
    }

    setEmailCopied(true)
  }

  return (
    <>
      <Navbar />

      <main className="px-5 pb-8 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <section
            id="top"
            className="hero-panel paper-panel scroll-mt-28 px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
          >
            <div
              data-reveal
              style={{ "--reveal-delay": "30ms" }}
              className="hero-inner"
            >
              <h1 className="hero-name">Keagan Cheong</h1>
              <p className="hero-focus">Computer Science | Applied AI</p>

              <p className="hero-copy">
                I&apos;m drawn to tech because it gives me a way to build tools
                around problems people actually live with. A lot of the things I
                care about sit around behaviour, habits, focus, and the struggles
                people deal with every day.
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  className="action-button action-button--primary"
                >
                  View Projects
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="action-button action-button--secondary"
                >
                  GitHub
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`action-button action-button--ghost ${
                    emailCopied ? "is-copied" : ""
                  }`}
                >
                  {emailCopied ? "Copied" : "Copy Email"}
                </button>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="section-shell scroll-mt-28 mt-14 sm:mt-18"
          >
            <div data-reveal>
              <SectionTitle
                title="Projects"
                description="A few things I&apos;ve built while learning AI, software, and app development."
              />
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-10">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + 1}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer
        id="contact"
        className="mt-14 px-5 pb-10 pt-4 sm:mt-16 sm:px-8 lg:mt-20 lg:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="paper-panel footer-panel footer-panel--dark px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
            <SectionTitle
              title="Contact"
              description="Just trying to learn more and improve, feel free to contact me through email."
              tone="dark"
            />
            
            <div className="space-y-4">
              <div className="footer-actions">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`action-button action-button--ghost ${
                    emailCopied ? "is-copied" : ""
                  }`}
                >
                  {emailCopied ? "Copied" : "Copy Email"}
                </button>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="action-button action-button--secondary"
                >
                  GitHub
                </a>
              </div>

              <p className="footer-meta">
                keagancheong@gmail.com · github.com/oldbshaw
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
