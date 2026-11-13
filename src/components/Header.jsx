import { useEffect, useState } from 'react'
import { getExternalUrl, serverInfo } from '../data/serverInfo'

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.7 5.3a18 18 0 0 0-4.4-1.4l-.6 1.2a16 16 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.4.8 13.4 1.2 17.3a18 18 0 0 0 5.4 2.7l1.2-2a11 11 0 0 1-1.9-.9l.5-.4a12.8 12.8 0 0 0 11.2 0l.5.4a11 11 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.5-.8-8.5-3.1-12Zm-11 9.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"
      />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const storeUrl = getExternalUrl(serverInfo.store)
  const discordUrl = getExternalUrl(serverInfo.discord)
  const isHomePage =
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/index.html')
  const homeTop = isHomePage ? '#top' : '/#top'
  const aboutSection = isHomePage ? '#about' : '/#about'

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href={homeTop} onClick={closeMenu}>
          <img className="brand-mark" src="/favicon.svg" alt="" />
          <span>{serverInfo.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href={aboutSection} onClick={closeMenu}>How to play</a>
          <a href="/gallery.html" onClick={closeMenu}>Screenshots</a>
          <a href="/rules.html" onClick={closeMenu}>Rules</a>
          <a href="/staff.html" onClick={closeMenu}>Staff</a>
          <a
            className="discord-nav-link"
            href={discordUrl || '#connect'}
            target={discordUrl ? '_blank' : undefined}
            rel={discordUrl ? 'noopener noreferrer' : undefined}
            onClick={closeMenu}
          >
            <DiscordIcon />
            Discord
          </a>
          <a
            className="button button-primary button-small"
            href={storeUrl || '#store'}
            target={storeUrl ? '_blank' : undefined}
            rel={storeUrl ? 'noopener noreferrer' : undefined}
            onClick={closeMenu}
          >
            Visit Store <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
