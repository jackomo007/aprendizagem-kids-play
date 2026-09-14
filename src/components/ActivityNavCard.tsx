import Link from "next/link";
import type { ActivityNavigationItem } from "@/data/activity-navigation";
import { Icon } from "./ui";

export function ActivityNavCard({
  item,
  href,
}: {
  item: ActivityNavigationItem;
  href: string;
}) {
  return (
    <Link className={`activity-nav-card tone-${item.tone}`} href={href}>
      <span className="activity-nav-icon" aria-hidden="true">
        {item.icon ? <Icon name={item.icon} /> : item.symbol}
      </span>
      <span>{item.title}</span>
      <Icon name="arrow" className="activity-nav-arrow" />
    </Link>
  );
}
