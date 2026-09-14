"use client";

import { useState } from "react";
import { ActivityCard } from "@/components/cards";
import { SectionTitle, Icon } from "@/components/ui";
import { activities } from "@/data/activities";
import {
  earlyChildhoodGradeSlugs,
  preschoolCategories,
} from "@/data/activity-navigation";

export function EarlyChildhoodActivities() {
  const [selectedSlug, setSelectedSlug] = useState("grafomotricidade");
  const selected = preschoolCategories.find((item) => item.slug === selectedSlug)!;
  const filtered = activities.filter(
    (activity) =>
      activity.categorySlug === selectedSlug &&
      activity.gradeSlugs.some((slug) => earlyChildhoodGradeSlugs.includes(slug)),
  );

  return (
    <>
      <section className="section">
        <SectionTitle
          title="Um começo cheio de possibilidades"
          description="Escolha um tema para ver as atividades de Pré III, Pré IV e Infantil V."
        />
        <div className="topic-list childhood-filter" role="group" aria-label="Escolha um tema">
          {preschoolCategories.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={selectedSlug === item.slug ? "is-selected" : ""}
              aria-pressed={selectedSlug === item.slug}
              onClick={() => setSelectedSlug(item.slug)}
            >
              <Icon name={item.icon ?? "spark"} />
              {item.title}
            </button>
          ))}
        </div>
      </section>

      <section className="section compact-section" aria-live="polite">
        <SectionTitle
          title={selected.title}
          description="Atividades para visualizar ou baixar gratuitamente em PDF."
        />
        {filtered.length ? (
          <div className="content-grid">
            {filtered.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="activity-empty">
            <span aria-hidden="true"><Icon name={selected.icon ?? "spark"} /></span>
            <h2>Novas atividades estão sendo preparadas.</h2>
            <p>Ainda não há materiais de {selected.title}. Escolha outro tema ou volte em breve.</p>
          </div>
        )}
      </section>
    </>
  );
}
