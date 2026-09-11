import Link from "next/link";
import type { IconName, Tone } from "@/types/content";
import { Badge, Icon } from "./ui";
export function PageIntro({
  title,
  description,
  label,
  icon = "spark",
  tone = "purple",
}: {
  title: string;
  description: string;
  label: string;
  icon?: IconName;
  tone?: Tone;
}) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Localização">
        <Link href="/">Início</Link>
        <span aria-hidden="true">/</span>
        <span>{label}</span>
      </nav>
      <div className={`page-intro tone-${tone}`}>
        <div>
          <Badge tone={tone}>
            <Icon name={icon} />
            {label}
          </Badge>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className="intro-icon" aria-hidden="true">
          <Icon name={icon} />
        </span>
      </div>
    </>
  );
}
