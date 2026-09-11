"use client";
import { useRef, useState } from "react";
import type { Quiz } from "@/types/content";
import { Button, ButtonLink, Icon } from "./ui";
export function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [complete, setComplete] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const question = quiz.questions[index];
  const correct = selected === question.answer;
  function next() {
    if (index === quiz.questions.length - 1) setComplete(true);
    else setIndex(index + 1);
    setSelected(null);
    requestAnimationFrame(() => heading.current?.focus());
  }
  function restart() {
    setIndex(0);
    setSelected(null);
    setComplete(false);
    requestAnimationFrame(() => heading.current?.focus());
  }
  if (complete)
    return (
      <section className="quiz-panel quiz-complete">
        <span className="success-icon">
          <Icon name="star" />
        </span>
        <h2 ref={heading} tabIndex={-1}>
          Mais uma descoberta para a coleção!
        </h2>
        <p>
          Você explorou todas as perguntas. Que tal contar para alguém o que
          aprendeu?
        </p>
        <div className="hero-actions">
          <Button onClick={restart}>Brincar de novo</Button>
          <ButtonLink href="/jogos/" variant="secondary">
            Explorar jogos
          </ButtonLink>
        </div>
      </section>
    );
  return (
    <section className="quiz-panel" aria-label={quiz.title}>
      <div className="quiz-progress">
        <span>
          Pergunta {index + 1} de {quiz.questions.length}
        </span>
        <span>Sem pressa. Sem pontuação.</span>
      </div>
      <progress
        value={index}
        max={quiz.questions.length}
        aria-label="Perguntas concluídas"
      />
      <h2 ref={heading} tabIndex={-1}>
        {question.prompt}
      </h2>
      {question.illustration && (
        <div className="question-illustration" aria-label="Três estrelas">
          {question.illustration}
        </div>
      )}
      <div className="quiz-options">
        {question.options.map((option) => (
          <Button
            key={option}
            variant="secondary"
            className={
              selected === option
                ? correct
                  ? "option-correct"
                  : "option-try"
                : ""
            }
            aria-pressed={selected === option}
            disabled={correct}
            onClick={() => setSelected(option)}
          >
            {option}
            {selected === option && correct && <Icon name="check" />}
          </Button>
        ))}
      </div>
      <div className="quiz-feedback" role="status" aria-live="polite">
        {selected && (
          <>
            <strong>
              {correct
                ? "Isso mesmo!"
                : "Ainda não. Vamos tentar mais uma vez?"}
            </strong>
            <p>
              {correct
                ? question.explanation
                : "Observe a pergunta com calma e escolha outra opção."}
            </p>
          </>
        )}
      </div>
      {correct && (
        <Button onClick={next}>
          {index === quiz.questions.length - 1
            ? "Concluir descoberta"
            : "Próxima pergunta"}
          <Icon name="arrow" />
        </Button>
      )}
    </section>
  );
}
