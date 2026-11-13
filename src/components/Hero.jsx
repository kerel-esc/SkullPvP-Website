import skullEmblem from '../../assets/Skull PvP_ Crimson Voxel Arena.png'
import { getExternalUrl, serverInfo } from '../data/serverInfo'

function Hero() {
  const storeUrl = getExternalUrl(serverInfo.store)

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-art"
        src={skullEmblem}
        alt="Skull PvP skull-and-swords emblem"
        fetchPriority="high"
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content container">
        <p className="eyebrow">
          <span className="eyebrow-mark" aria-hidden="true" />
          Minecraft PvP <span aria-hidden="true">/</span> Fair play first
        </p>
        <h1 id="hero-title">
          Skull
          <br />
          <span>PvP</span>
        </h1>
        <p className="hero-tagline">
          Enter the arena. Fight fair. Make your mark.
        </p>
        <div className="server-address" aria-label="Server address placeholder">
          <span className="server-address-label">Server address</span>
          <span className="server-address-value">{serverInfo.ip}</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#connect">
            Join the Server <span className="button-arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="button button-quiet"
            href={storeUrl || '#store'}
            target={storeUrl ? '_blank' : undefined}
            rel={storeUrl ? 'noopener noreferrer' : undefined}
          >
            Visit Store <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-bottom" aria-hidden="true">
        <span>Skull PvP</span>
        <span>Fight fair. Stay sharp.</span>
      </div>
    </section>
  )
}

export default Hero
