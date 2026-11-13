import { getExternalUrl, serverInfo } from '../data/serverInfo'

const footerLinks = [
  { href: '/#about', label: 'How to play' },
  { href: '/gallery.html', label: 'Screenshots' },
  { href: '/rules.html', label: 'Rules' },
  { href: '/staff.html', label: 'Staff' },
]

function Footer() {
  const storeUrl = getExternalUrl(serverInfo.store)

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>{serverInfo.name}</strong>
          <span>Minecraft PvP · Fight fair</span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a
            href={storeUrl || '#store'}
            target={storeUrl ? '_blank' : undefined}
            rel={storeUrl ? 'noopener noreferrer' : undefined}
          >
            Visit Store
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
