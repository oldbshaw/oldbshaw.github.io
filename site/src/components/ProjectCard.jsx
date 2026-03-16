import { useEffect, useState } from "react"

const stackTints = {
  Python: {
    "--pill-bg": "rgba(138, 106, 61, 0.16)",
    "--pill-border": "rgba(138, 106, 61, 0.22)",
    "--pill-text": "#5f4725",
  },
  Pandas: {
    "--pill-bg": "rgba(108, 128, 96, 0.14)",
    "--pill-border": "rgba(108, 128, 96, 0.2)",
    "--pill-text": "#46553e",
  },
  "Scikit-learn": {
    "--pill-bg": "rgba(79, 124, 128, 0.14)",
    "--pill-border": "rgba(79, 124, 128, 0.2)",
    "--pill-text": "#36585b",
  },
  Jupyter: {
    "--pill-bg": "rgba(146, 88, 62, 0.14)",
    "--pill-border": "rgba(146, 88, 62, 0.2)",
    "--pill-text": "#674133",
  },
  Playwright: {
    "--pill-bg": "rgba(91, 118, 69, 0.15)",
    "--pill-border": "rgba(91, 118, 69, 0.22)",
    "--pill-text": "#425238",
  },
  FastAPI: {
    "--pill-bg": "rgba(73, 126, 117, 0.14)",
    "--pill-border": "rgba(73, 126, 117, 0.2)",
    "--pill-text": "#325550",
  },
  SQLite: {
    "--pill-bg": "rgba(116, 111, 103, 0.16)",
    "--pill-border": "rgba(116, 111, 103, 0.22)",
    "--pill-text": "#4c4842",
  },
  Pytest: {
    "--pill-bg": "rgba(101, 118, 138, 0.14)",
    "--pill-border": "rgba(101, 118, 138, 0.2)",
    "--pill-text": "#445365",
  },
  Swift: {
    "--pill-bg": "rgba(94, 110, 151, 0.16)",
    "--pill-border": "rgba(94, 110, 151, 0.22)",
    "--pill-text": "#44506f",
  },
  SwiftUI: {
    "--pill-bg": "rgba(141, 123, 174, 0.15)",
    "--pill-border": "rgba(141, 123, 174, 0.22)",
    "--pill-text": "#605171",
  },
  "Local Notifications": {
    "--pill-bg": "rgba(106, 123, 141, 0.14)",
    "--pill-border": "rgba(106, 123, 141, 0.2)",
    "--pill-text": "#475565",
  },
  TensorFlow: {
    "--pill-bg": "rgba(184, 133, 64, 0.16)",
    "--pill-border": "rgba(184, 133, 64, 0.22)",
    "--pill-text": "#6d5128",
  },
  Keras: {
    "--pill-bg": "rgba(149, 96, 105, 0.15)",
    "--pill-border": "rgba(149, 96, 105, 0.22)",
    "--pill-text": "#69434a",
  },
}

function hasDemo(project) {
  return typeof project.demoUrl === "string" && project.demoUrl.length > 0
}

export default function ProjectCard({ project, index = 0 }) {
  const [imageMissing, setImageMissing] = useState(false)
  const [demoAvailable, setDemoAvailable] = useState(false)
  const demoUrl = hasDemo(project) ? project.demoUrl : ""
  const hasRepo = typeof project.repoUrl === "string" && project.repoUrl.length > 0

  useEffect(() => {
    if (!demoUrl) {
      return undefined
    }

    const controller = new AbortController()
    let active = true

    async function checkDemo() {
      try {
        const response = await fetch(demoUrl, {
          method: "HEAD",
          cache: "no-store",
          signal: controller.signal,
        })

        if (active) {
          setDemoAvailable(response.ok)
        }
      } catch {
        if (active) {
          setDemoAvailable(false)
        }
      }
    }

    checkDemo()

    return () => {
      active = false
      controller.abort()
    }
  }, [demoUrl])

  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 80}ms` }}
      className="project-card"
    >
      <div className="project-media">
        {!imageMissing ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-image"
            loading="lazy"
            style={{
              objectPosition: project.imagePosition ?? "center",
              "--image-scale": project.imageScale ?? 1,
              "--image-hover-scale": project.imageHoverScale ?? 1.02,
            }}
            onError={() => setImageMissing(true)}
          />
        ) : (
          <div className="project-fallback">
            <span>Project image</span>
            <strong>{project.category}</strong>
            <p>Image will appear here once it is added to the public folder.</p>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-meta-row">
          <span className="project-category">{project.category}</span>
          <span
            className={`status-pill ${
              project.status === "In Progress" ? "status-pill--progress" : ""
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-summary">{project.summary}</p>

        <div className="stack-list">
          {project.stack.map((item) => (
            <span
              key={item}
              className="stack-pill"
              style={stackTints[item] ?? undefined}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="learned-note">
          <strong>What I learned</strong>
          <p>{project.learned}</p>
        </div>

        <div className="project-actions">
          {hasRepo ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="action-button action-button--primary"
            >
              View GitHub
            </a>
          ) : (
            <span className="action-button action-button--ghost is-disabled">
              {project.accessLabel ?? "Private project"}
            </span>
          )}

          {demoUrl ? (
            demoAvailable ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="action-button action-button--secondary"
              >
                Watch Demo
              </a>
            ) : (
              <span className="action-button action-button--ghost is-disabled">
                Demo soon
              </span>
            )
          ) : null}
        </div>
      </div>
    </article>
  )
}
