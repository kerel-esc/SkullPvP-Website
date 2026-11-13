import Reveal from './Reveal'
import rules from '../data/rules'

function RulesPage() {
  return (
    <>
      <div className="page-top-space" />
      <main id="main-content">
        <section className="subpage-hero" aria-labelledby="rules-page-title">
          <div className="container">
            <a className="back-link" href="/#top">← Back to Skull PvP</a>
            <p className="section-kicker">Play fair. Respect the fight.</p>
            <h1 className="subpage-title" id="rules-page-title">Server rules</h1>
            <p className="subpage-intro">
              These rules apply across arenas, lobbies, Discord-linked accounts,
              and any future game modes.
            </p>
          </div>
        </section>
        <section className="rules-page-section" aria-label="All server rules">
          <div className="container">
            <ol className="full-rules-list">
              {rules.map((rule, index) => (
                <Reveal
                  as="li"
                  className="full-rule-card"
                  key={rule.title}
                  delay={(index % 2) * 55}
                >
                  <span className="full-rule-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2>{rule.title}</h2>
                    <p className="full-rule-summary">{rule.summary}</p>
                    <ul>
                      {rule.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </>
  )
}

export default RulesPage
