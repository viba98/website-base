import { useRouter } from "next/router"
import Link from "next/link"
import { device } from "./device"

const Header = () => {
  let highlightWork = false
  let highlightAbout = true

  const router = useRouter()

  if (router.pathname !== "/") {
    highlightAbout = false
    highlightWork = true
  } else {
    highlightAbout = true
    highlightWork = false
  }

  return (
    <div className="header">
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 0.55rem 0;
          background-color: var(--bg-primary-rgba);
          backdrop-filter: blur(8px);
          z-index: 10;
        }

        .container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        .wrapper {
          max-width: 816px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .about-link,
        .work-link {
          background-image: none;
          text-shadow: none;
          margin-left: 1.5rem;
          color: var(--text-secondary);
        }

        .about-link-highlight,
        .work-link-highlight {
          background-image: none;
          text-shadow: none;
          margin-left: 1.5rem;
          color: var(--color-primary);
        }

        .about-link:hover,
        .work-link:hover {
          cursor: pointer;
          color: var(--color-primary);
          text-decoration: none;
        }

        .about-link-highlight:hover,
        .work-link-highlight:hover {
          cursor: pointer;
          color: var(--color-primary);
          text-decoration: none;
        }

        .name {
          background-image: none;
          margin-right: auto;
          margin-left: 0;
          color: var(--text-primary);
        }

        .name:hover {
          cursor: pointer;
          color: var(--color-primary);
          text-decoration: none;
        }

        @media ${device.desktop} {
          .header {
            padding: 0.35rem 0;
          }
        }
      `}</style>

      <div className="wrapper">
        <div className="container">
          <Link href="/" passhref>
            <a className="name">Gavin Nelson</a>
          </Link>
          <Link href="/" passhref>
            <a
              className={highlightAbout ? "about-link-highlight" : "about-link"}
            >
              About
            </a>
          </Link>
          <Link href="/#work" passhref>
            <a className={highlightWork ? "work-link-highlight" : "work-link"}>
              Work
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header