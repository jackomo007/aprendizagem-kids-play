import { creator } from "@/data/creator";
import { ButtonLink, Icon } from "./ui";

export function CreatorSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id={compact ? undefined : "criadora"}
      className={`creator-section${compact ? " creator-section-compact" : ""}`}
      aria-labelledby="creator-heading"
    >
      <div className="creator-intro">
        <span className="creator-emblem" aria-hidden="true"><Icon name="rocket" /></span>
        <div>
          <p className="eyebrow">{creator.eyebrow}</p>
          <h2 id="creator-heading">{creator.title}</h2>
          <p className="creator-description">{creator.introduction}</p>
        </div>
      </div>
      {compact ? (
        <ButtonLink href="/sobre/#criadora" variant="secondary">
          Conheça a história do projeto <Icon name="arrow" />
        </ButtonLink>
      ) : (
        <>
          <p className="creator-story">{creator.story}</p>
          <ul className="creator-interests" aria-label="Interesses da criadora">
            {creator.interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
          <div className="creator-discoveries">
            {creator.discoveries.map((discovery) => (
              <article key={discovery.title} className={`creator-discovery tone-${discovery.tone}`}>
                <span className="category-icon"><Icon name={discovery.icon} /></span>
                <h3>{discovery.title}</h3>
                <p>{discovery.description}</p>
              </article>
            ))}
          </div>
          <div className="creator-family">
            <Icon name="heart" />
            <div><h3>{creator.familyTitle}</h3><p>{creator.familyDescription}</p></div>
          </div>
        </>
      )}
    </section>
  );
}
