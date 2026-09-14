import Link from "next/link";
import type { Activity, Category, Content, Game, Video } from "@/types/content";
import { Badge, Card, Icon } from "./ui";
export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}/`}
      className={`category-card tone-${category.tone}`}
    >
      <span className="category-icon">
        <Icon name={category.icon} />
      </span>
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <span className="card-cta">
        {category.cta}
        <Icon name="arrow" />
      </span>
    </Link>
  );
}
export function ContentCover({
  content,
  kind = "default",
}: {
  content: Content;
  kind?: string;
}) {
  return (
    <div
      className={`content-cover tone-${content.tone} cover-${kind}`}
      aria-hidden="true"
    >
      <span className="cover-dot dot-one" />
      <span className="cover-dot dot-two" />
      {kind === "worksheet" ? (
        <div className="paper-preview">
          <span>VAMOS APRENDER</span>
          <strong>{content.title}</strong>
          <div className="paper-shapes">
            <Icon name={content.icon} />
            <Icon name={content.icon} />
            <Icon name={content.icon} />
          </div>
          <i />
          <i />
          <i />
        </div>
      ) : (
        <>
          <span className="cover-symbol">
            <Icon name={content.icon} />
          </span>
          <span className="cover-decoration">
            {content.slug === "conta-comigo"
              ? "1 + 2 = ?"
              : content.slug === "detetive-das-palavras"
                ? "A B C"
                : content.slug === "missao-oceano"
                  ? "≈ ≈ ≈"
                  : "Vamos descobrir"}
          </span>
        </>
      )}
    </div>
  );
}
export function ContentCard({
  content,
  href,
  cta,
}: {
  content: Content;
  href: string;
  cta: string;
}) {
  return (
    <Card>
      <ContentCover content={content} />
      <div className="card-body">
        <Badge tone={content.tone}>{content.subject}</Badge>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <span className="content-meta">{content.level}</span>
        <Link className="card-cta" href={href}>
          {cta}
          <Icon name="arrow" />
        </Link>
      </div>
    </Card>
  );
}
export function GameCard({ game }: { game: Game }) {
  return (
    <Card>
      <ContentCover content={game} />
      <div className="card-body">
        <Badge tone={game.tone}>{game.subject}</Badge>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <span className="content-meta">{game.level}</span>
        {game.status === "available" ? (
          <Link
            className="button button-secondary"
            href={`/jogos/${game.slug}/`}
          >
            <Icon name="play" />
            Jogar
          </Link>
        ) : (
          <span className="unavailable">Em breve · aventura em preparação</span>
        )}
      </div>
    </Card>
  );
}
export function ActivityCard({
  activity,
  levelOverride,
}: {
  activity: Activity;
  levelOverride?: string;
}) {
  return (
    <Card>
      <ContentCover content={activity} kind="worksheet" />
      <div className="card-body">
        <Badge tone={activity.tone}>{activity.subject}</Badge>
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>
        <span className="content-meta">
          {levelOverride ?? activity.level} · {activity.pages} página · PDF
        </span>
        <div className="activity-actions">
          <a
            className="text-link"
            href={activity.pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver atividade ${activity.title} (PDF em nova aba)`}
          >
            Ver atividade
            <Icon name="arrow" />
          </a>
          <a className="button button-secondary" href={activity.pdf} download>
            <Icon name="download" />
            Baixar PDF<span className="sr-only">: {activity.title}</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
export function VideoCard({ video }: { video: Video }) {
  return (
    <Card>
      <ContentCover content={video} />
      <div className="card-body">
        <Badge tone={video.tone}>{video.subject}</Badge>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <span className="content-meta">
          {video.level}
          {video.duration ? ` · ${video.duration}` : ""}
        </span>
        {video.youtubeId ? (
          <a
            className="button button-secondary"
            href={`https://www.youtube.com/watch?v=${encodeURIComponent(video.youtubeId)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Assistir no YouTube<span className="sr-only"> (nova aba)</span>
            <Icon name="play" />
          </a>
        ) : (
          <span className="unavailable">Em preparação</span>
        )}
      </div>
    </Card>
  );
}
