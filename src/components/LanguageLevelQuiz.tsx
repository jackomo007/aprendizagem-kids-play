"use client";

import { useState } from "react";
import { Icon, SectionTitle } from "@/components/ui";
import { QuizPlayer } from "@/components/QuizPlayer";
import { languageQuizzes } from "@/data/language-quizzes";

const grades = [
  ["1-ano", "1º ano"], ["2-ano", "2º ano"], ["3-ano", "3º ano"],
  ["4-ano", "4º ano"], ["5-ano", "5º ano"],
] as const;

export function LanguageLevelQuiz({ language, title }: { language: string; title: string }) {
  const [grade, setGrade] = useState("1-ano");
  const gradeTitle = grades.find(([slug]) => slug === grade)![1];
  const quiz = languageQuizzes[`${language}:${grade}`];
  return (
    <section className="section">
      <SectionTitle title={`Escolha o ano de ${title}`} description="O 1º ano está selecionado para começar." />
      <div className="topic-list childhood-filter" role="group" aria-label={`Ano escolar de ${title}`}>
        {grades.map(([slug, label]) => (
          <button key={slug} type="button" className={grade === slug ? "is-selected" : ""}
            aria-pressed={grade === slug} onClick={() => setGrade(slug)}>
            <Icon name="star" />{label}
          </button>
        ))}
      </div>
      <div className="language-level-heading">
        <SectionTitle title={`${title} · ${gradeTitle}`} description={quiz.description} />
      </div>
      <QuizPlayer key={`${language}:${grade}`} quiz={quiz} />
    </section>
  );
}
