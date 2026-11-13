import { getExternalUrl, serverInfo } from '../data/serverInfo'

function FinalCta() {
  const storeUrl = getExternalUrl(serverInfo.store)

  return (
    <section className="cta-section" id="connect" aria-labelledby="connect-title">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-copy">
            <p className="section-kicker">Your next fight starts here</p>
            <h2 id="connect-title">Ready to enter the arena?</h2>
            <p>
              Add the server address in Minecraft and join the Skull PvP
              community.
            </p>
            <div className="connection-details">
              <div className="connection-detail">
                <span className="detail-label">Server address</span>
                <span className="detail-value">{serverInfo.ip}</span>
              </div>
            </div>
          </div>
          <div className="cta-action" id="store">
            <a
              className="button button-primary"
              href={storeUrl || '#store'}
              target={storeUrl ? '_blank' : undefined}
              rel={storeUrl ? 'noopener noreferrer' : undefined}
            >
              Visit Store <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
            {!storeUrl && (
              <p className="store-replacement-note">
                Replace <code>store</code> in{' '}
                <code>src/data/serverInfo.js</code> with the store URL.
                No store link was supplied.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCta
