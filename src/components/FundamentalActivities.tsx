"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, SectionTitle } from "@/components/ui";
import { QuizPlayer } from "@/components/QuizPlayer";
import { fundamentalQuizzes } from "@/data/fundamental-quizzes";
import { fundamentalSubjects } from "@/data/activity-navigation";

const grades = [
  { slug: "1-ano", title: "1º ano" }, { slug: "2-ano", title: "2º ano" },
  { slug: "3-ano", title: "3º ano" }, { slug: "4-ano", title: "4º ano" },
  { slug: "5-ano", title: "5º ano" },
];

export function FundamentalActivities() {
  const [grade, setGrade] = useState("1-ano");
  const [subject, setSubject] = useState<string | null>(null);
  const gradeTitle = grades.find((item) => item.slug === grade)!.title;
  const selected = fundamentalSubjects.find((item) => item.slug === subject);
  const quiz = subject ? fundamentalQuizzes[`${grade}:${subject}`] : undefined;

  const chooseGrade = (slug: string) => {
    setGrade(slug);
    setSubject(null);
  };

  return (
    <>
      <section className="section">
        <SectionTitle title="Escolha o ano" description="Comece pelo ano escolar da criança." />
        <div className="topic-list childhood-filter" role="group" aria-label="Escolha o ano escolar">
          {grades.map((item) => (
            <button key={item.slug} type="button" className={grade === item.slug ? "is-selected" : ""}
              aria-pressed={grade === item.slug} onClick={() => chooseGrade(item.slug)}>
              <Icon name="star" />{item.title}
            </button>
          ))}
        </div>
      </section>

      <section className="section compact-section">
        <SectionTitle title={`Matérias do ${gradeTitle}`} description="Escolha uma matéria para ver as atividades." />
        <div className="topic-list childhood-filter subject-filter" role="group" aria-label={`Matérias do ${gradeTitle}`}>
          {fundamentalSubjects.map((item) => (
            item.externalHref ? (
              <Link key={item.slug} href={item.externalHref}>
                <Icon name={item.icon ?? "book"} />{item.title}<Icon name="arrow" />
              </Link>
            ) : (
              <button key={item.slug} type="button" className={subject === item.slug ? "is-selected" : ""}
                aria-pressed={subject === item.slug} onClick={() => setSubject(item.slug)}>
                <Icon name={item.icon ?? "book"} />{item.title}
              </button>
            )
          ))}
        </div>
      </section>

      {selected && (
        <section className="section compact-section" aria-live="polite">
          <SectionTitle title={`${selected.title} · ${gradeTitle}`} description="Escolha uma resposta e descubra algo novo." />
          {quiz && <QuizPlayer key={`${grade}:${subject}`} quiz={quiz} />}
        </section>
      )}
    </>
  );
}
