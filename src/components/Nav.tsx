import { Link } from "react-router-dom";
import { site, menuLinks } from "../data/site";
import DirectionalLinkTile from "./DirectionalLinkTile";
import BottomSheet from "./BottomSheet";
import LanguageToggle from "./LanguageToggle";

function GithubIcon() {
  return (
    <svg viewBox="0 0 19 19" className="nav-social-icon"><path fill="currentColor" fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd" /></svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 20 20" className="nav-social-icon"><path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 1 6 4.5 1.5 1.5 0 0 1 4.5 6 1.5 1.5 0 0 1 3 4.5 1.5 1.5 0 0 1 4.5 3zM3 8h3v9H3V8zm5.5 0H11v1.2C11.6 8.5 12.7 8 14 8c2.5 0 4 1.5 4 4.5V17h-3v-4c0-1.5-.5-2.5-2-2.5S11 12 11 13.5V17H8.5V8z" /></svg>
  );
}

export default function Nav() {
  return (
    <>
      <div className="hidden sm:block left-panel">
        <Link to="/now" className="site-name">
          {site.name}
        </Link>

        <nav className="flex flex-col mt-8 gap-0">
          {menuLinks.map((link) => (
            <DirectionalLinkTile key={link.href} to={link.href} num={link.num}>
              {link.label}
            </DirectionalLinkTile>
          ))}
        </nav>

        <div className="nav-footer">
          <div className="flex items-center gap-2 mb-2">
            <LanguageToggle />
          </div>
          <div className="nav-footer-socials">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
          <a href={`mailto:${site.email}`} className="nav-footer-email">
            {site.email}
          </a>
          <span className="nav-footer-copy">
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </div>

      <div className="sm:hidden">
        <BottomSheet />
      </div>
    </>
  );
}
