import Reveal from './Reveal'

function RulesSection() {
  return (
    <section className="section rules-section" aria-labelledby="rules-title">
      <div className="container rules-teaser">
        <Reveal className="rules-teaser-copy">
          <p className="section-kicker">Respect the fight</p>
          <h2 id="rules-title">Play fair. Keep it fun.</h2>
          <p>
            No cheating, exploiting, harassment, or scamming. Teaming is only
            allowed within the same guild.
          </p>
          <a className="button button-quiet" href="/rules.html">
            Read all 10 rules <span className="button-arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>
        <Reveal className="rules-teaser-mark" aria-hidden="true">
          <span>10</span>
          <span>RULES</span>
        </Reveal>
      </div>
    </section>
  )
}

export default RulesSection
