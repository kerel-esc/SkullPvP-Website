import Reveal from './Reveal'

const principles = [
  {
    number: '01',
    title: 'Launch your Minecraft client',
    description:
      'Make sure you are playing on Minecraft version 26.3.',
  },
  {
    number: '02',
    title: 'Open Multiplayer',
    description:
      'Click Multiplayer on the Minecraft screen, add a server, and enter SkullPvP.mc.gg as the server address.',
  },
  {
    number: '03',
    title: 'Join the action',
    description:
      'Join the server and accept the resource pack. Right-click the skull in your hotbar, then jump into action!',
  },
]

function FeatureSection() {
  return (
    <section className="section feature-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="section-kicker">Three quick steps</p>
          <h2 id="about-title">How to start playing?</h2>
          <p>
            Get connected, accept the resource pack, and enter the action.
          </p>
        </Reveal>
        <div className="feature-grid">
          {principles.map((principle, index) => (
            <Reveal
              as="article"
              className="feature-card"
              key={principle.number}
              delay={index * 90}
            >
              <span className="feature-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
