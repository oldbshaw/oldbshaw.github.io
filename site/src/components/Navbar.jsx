import { useEffect, useState } from "react"

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "https://github.com/oldbshaw", label: "GitHub", external: true },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40">
      <div className={`nav-shell ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <a href="#top" className="nav-brand">
            Keagan Cheong
          </a>

          <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
