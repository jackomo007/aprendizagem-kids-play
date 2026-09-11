import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { IconName, Tone } from "@/types/content";
const paths: Record<IconName, ReactNode> = {
  star: (
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />
  ),
  book: (
    <>
      <path d="M12 6c-3-2-7-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V5c-2-1-6-1-9 1Z" />
      <path d="M12 6v15M6 9h3m6 0h3M6 13h3m6 0h3" />
    </>
  ),
  play: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="6" />
      <path d="m10 8 6 4-6 4Z" />
    </>
  ),
  pencil: (
    <>
      <path d="m4 15 11-11a2 2 0 0 1 5 5L9 20l-6 1ZM13 6l5 5M4 15l5 5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M5 7h14M5 17h14" />
    </>
  ),
  rocket: (
    <>
      <path d="M9 15c-1-6 4-12 12-12 0 8-6 13-12 12ZM9 9H5l-3 5h7m6 1v4l-5 3v-7M6 18l-3 3" />
      <circle cx="16" cy="8" r="2" />
    </>
  ),
  shapes: (
    <>
      <circle cx="7" cy="7" r="4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
      <path d="m17 3 5 7H12ZM3 21l4-7 4 7Z" />
    </>
  ),
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  download: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  heart: <path d="M12 21 3.5 12.5A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 8.5 7.5Z" />,
  spark: (
    <>
      <path d="m12 3 2 7 7 2-7 2-2 7-2-7-7-2 7-2ZM20 2v4m-2-2h4" />
    </>
  ),
};
export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function Badge({
  children,
  tone = "purple",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return <span className={`badge tone-${tone}`}>{children}</span>;
}
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={`card ${className}`}>{children}</article>;
}
export function SectionTitle({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {linkLabel ?? "Ver todos"}
          <Icon name="arrow" />
        </Link>
      )}
    </div>
  );
}
type Variant = "primary" | "secondary" | "ghost";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`button button-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
    </Link>
  );
}
