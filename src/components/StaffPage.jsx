import { getExternalUrl, serverInfo } from '../data/serverInfo'
import Reveal from './Reveal'

function StaffPage() {
  const discordUrl = getExternalUrl(serverInfo.discord)

  return (
    <>
      <div className="page-top-space" />
      <main id="main-content">
        <section className="subpage-hero" aria-labelledby="staff-page-title">
          <div className="container">
            <a className="back-link" href="/#top">← Back to Skull PvP</a>
            <p className="section-kicker">The Skull PvP team</p>
            <h1 className="subpage-title" id="staff-page-title">Staff</h1>
            <p className="subpage-intro">
              Meet the person behind the server.
            </p>
          </div>
        </section>
        <section className="staff-page-section" aria-label="Skull PvP staff">
          <div className="container">
            <Reveal as="article" className="staff-profile-card">
              <div className="staff-avatar-frame">
                <img
                  className="staff-avatar"
                  src="/staff/kerel27.png"
                  alt="Minecraft head avatar for kerel27"
                  width="600"
                  height="600"
                />
              </div>
              <div className="staff-profile-copy">
                <span className="staff-role">OWNER</span>
                <h2 className="staff-name">kerel27</h2>
                <p className="staff-title">Server Owner</p>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="staff-support-section" aria-labelledby="staff-support-title">
          <div className="container">
            <div className="staff-support-card">
              <div>
                <p className="section-kicker">Need assistance?</p>
                <h2 id="staff-support-title">Support &amp; contact</h2>
                <p>
                  For all support questions or to get in touch, join us on Discord.
                </p>
              </div>
              <a
                className="button button-primary"
                href={discordUrl || '#staff-support-title'}
                target={discordUrl ? '_blank' : undefined}
                rel={discordUrl ? 'noopener noreferrer' : undefined}
              >
                Join the Discord <span className="button-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default StaffPage
