"use client";

/* eslint-disable @next/next/no-img-element -- Sprites locais pequenos mudam de posição a cada quadro. */

import { useCallback, useEffect, useRef, useState } from "react";

type Kind = "garrafa" | "pneu" | "pedra" | "peixe" | "tartaruga";
type Phase = "intro" | "playing" | "won" | "lost";
type Entity = { id: number; kind: Kind; x: number; y: number; speed: number; spin: number };

const target = 12;
const oceanFacts = [
  "Cada resíduo retirado ajuda a proteger os animais marinhos.",
  "O plástico pode permanecer no oceano por muitos anos.",
  "Reduzir, reutilizar e reciclar também cuida do mar.",
];
const labels: Record<Kind, string> = {
  garrafa: "garrafa plástica",
  pneu: "pneu descartado",
  pedra: "pedra",
  peixe: "peixe",
  tartaruga: "tartaruga marinha",
};
const images: Record<Kind, string> = {
  garrafa: "/jogos/missao-oceano/garrafa.webp",
  pneu: "/jogos/missao-oceano/pneu.webp",
  pedra: "/jogos/missao-oceano/pedra.webp",
  peixe: "/jogos/missao-oceano/peixe.webp",
  tartaruga: "/jogos/missao-oceano/tartaruga.webp",
};

function randomKind(): Kind {
  const value = Math.random();
  if (value < 0.34) return "garrafa";
  if (value < 0.62) return "pneu";
  if (value < 0.76) return "pedra";
  if (value < 0.9) return "peixe";
  return "tartaruga";
}

export function OceanGame() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [playerX, setPlayerX] = useState(50);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [message, setMessage] = useState("Recolha o lixo e proteja os animais!");
  const [soundOn, setSoundOn] = useState(true);
  const keys = useRef({ left: false, right: false });
  const nextId = useRef(1);
  const lastFrame = useRef(0);
  const lastSpawn = useRef(0);
  const playerRef = useRef(50);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const phaseRef = useRef<Phase>("intro");
  const boardRef = useRef<HTMLDivElement>(null);

  const playSound = useCallback((file: "coleta" | "alerta") => {
    if (!soundOn) return;
    const audio = new Audio(`/jogos/missao-oceano/${file}.mp3`);
    audio.volume = 0.45;
    void audio.play().catch(() => undefined);
  }, [soundOn]);

  const begin = useCallback(() => {
    scoreRef.current = 0;
    livesRef.current = 3;
    playerRef.current = 50;
    phaseRef.current = "playing";
    setScore(0);
    setLives(3);
    setPlayerX(50);
    setEntities([]);
    setMessage("Missão iniciada! Recolha 12 resíduos.");
    lastFrame.current = performance.now();
    lastSpawn.current = performance.now();
    setPhase("playing");
    boardRef.current?.focus();
  }, []);

  const movePlayer = useCallback((direction: -1 | 1) => {
    if (phaseRef.current !== "playing") return;
    playerRef.current = Math.max(8, Math.min(92, playerRef.current + direction * 9));
    setPlayerX(playerRef.current);
  }, []);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "a", "A", "d", "D"].includes(event.key)) event.preventDefault();
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keys.current.left = true;
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keys.current.right = true;
    };
    const up = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keys.current.left = false;
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keys.current.right = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    let animation = 0;
    const frame = (now: number) => {
      if (phaseRef.current !== "playing") return;
      const delta = Math.min(32, now - lastFrame.current);
      lastFrame.current = now;
      if (keys.current.left || keys.current.right) {
        const direction = keys.current.left ? -1 : 1;
        playerRef.current = Math.max(8, Math.min(92, playerRef.current + direction * delta * 0.035));
        setPlayerX(playerRef.current);
      }
      if (now - lastSpawn.current > Math.max(620, 1020 - scoreRef.current * 18)) {
        const kind = randomKind();
        setEntities((items) => [...items, {
          id: nextId.current++, kind, x: 8 + Math.random() * 84, y: -14,
          speed: 0.012 + Math.random() * 0.006 + scoreRef.current * 0.00018,
          spin: -12 + Math.random() * 24,
        }]);
        lastSpawn.current = now;
      }
      setEntities((items) => {
        const remaining: Entity[] = [];
        for (const item of items) {
          const moved = { ...item, y: item.y + item.speed * delta };
          const hit = moved.y > 73 && moved.y < 92 && Math.abs(moved.x - playerRef.current) < 11;
          if (hit) {
            if (item.kind === "garrafa" || item.kind === "pneu") {
              scoreRef.current += 1;
              setScore(scoreRef.current);
              setMessage(scoreRef.current % 4 === 0 ? oceanFacts[(scoreRef.current / 4 - 1) % oceanFacts.length] : `Muito bem! Você recolheu ${labels[item.kind]}.`);
              playSound("coleta");
              if (scoreRef.current >= target) {
                phaseRef.current = "won";
                setPhase("won");
                setMessage("O oceano está mais limpo. Missão cumprida!");
              }
            } else {
              livesRef.current -= 1;
              setLives(livesRef.current);
              setMessage(item.kind === "pedra" ? "Cuidado com as pedras!" : `Desvie para proteger o ${labels[item.kind]}!`);
              playSound("alerta");
              if (livesRef.current <= 0) {
                phaseRef.current = "lost";
                setPhase("lost");
                setMessage("Vamos tentar de novo e cuidar do oceano juntos!");
              }
            }
          } else if (moved.y < 106) remaining.push(moved);
        }
        return remaining;
      });
      animation = requestAnimationFrame(frame);
    };
    animation = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animation);
  }, [phase, playSound]);

  const pointTo = (clientX: number) => {
    if (phaseRef.current !== "playing" || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    playerRef.current = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setPlayerX(playerRef.current);
  };

  return (
    <section className="ocean-game" aria-label="Jogo Missão Oceano">
      <div className="ocean-hud">
        <div><span>Resíduos</span><strong>{score} / {target}</strong></div>
        <div className="ocean-progress" aria-hidden="true"><i style={{ width: `${Math.min(100, score / target * 100)}%` }} /></div>
        <div><span>Corações</span><strong aria-label={`${lives} corações`}>{"♥".repeat(lives)}<i>{"♥".repeat(3 - lives)}</i></strong></div>
        <button className="ocean-sound" type="button" onClick={() => setSoundOn((value) => !value)} aria-pressed={soundOn}>
          {soundOn ? "🔊 Som" : "🔇 Som"}
        </button>
      </div>

      <div
        className="ocean-board"
        ref={boardRef}
        tabIndex={0}
        onPointerDown={(event) => pointTo(event.clientX)}
        onPointerMove={(event) => { if (event.buttons) pointTo(event.clientX); }}
        aria-label="Área do jogo. Use as setas esquerda e direita ou os botões abaixo."
      >
        <span className="ocean-bubbles bubbles-one" aria-hidden="true" />
        <span className="ocean-bubbles bubbles-two" aria-hidden="true" />
        {entities.map((item) => (
          <img key={item.id} className={`ocean-entity entity-${item.kind}`} src={images[item.kind]} alt="" draggable={false}
            style={{ left: `${item.x}%`, top: `${item.y}%`, transform: `translate(-50%, -50%) rotate(${item.spin}deg)` }} />
        ))}
        <img className="ocean-player" src="/jogos/missao-oceano/submarino.webp" alt="Seu submarino coletor"
          draggable={false} style={{ left: `${playerX}%` }} />

        {phase !== "playing" && (
          <div className="ocean-overlay">
            {phase === "intro" ? (
              <>
                <img src="/jogos/missao-oceano/tartaruga.webp" alt="Tartaruga marinha" />
                <p className="eyebrow">Aventura educativa</p>
                <h2>Ajude a limpar o oceano!</h2>
                <p>Recolha garrafas e pneus. Desvie das pedras, dos peixes e das tartarugas.</p>
                <button className="button button-primary" type="button" onClick={begin}>Começar missão</button>
              </>
            ) : (
              <>
                <img src={phase === "won" ? "/jogos/missao-oceano/estrela.webp" : "/jogos/missao-oceano/submarino.webp"} alt="" />
                <p className="eyebrow">{phase === "won" ? "Missão cumprida" : "Quase lá"}</p>
                <h2>{phase === "won" ? "Oceano protegido!" : "Vamos tentar novamente?"}</h2>
                <p>{phase === "won" ? `Você recolheu ${score} resíduos e cuidou da vida marinha.` : `Você recolheu ${score} resíduos nesta tentativa.`}</p>
                <button className="button button-primary" type="button" onClick={begin}>Jogar novamente</button>
              </>
            )}
          </div>
        )}
      </div>

      <p className="ocean-message" role="status" aria-live="polite">{message}</p>
      <div className="ocean-controls" aria-label="Controles do submarino">
        <button type="button" onPointerDown={() => movePlayer(-1)} aria-label="Mover para a esquerda">← <span>Esquerda</span></button>
        <p>Use ← →, A D ou arraste no mar</p>
        <button type="button" onPointerDown={() => movePlayer(1)} aria-label="Mover para a direita"><span>Direita</span> →</button>
      </div>
      <div className="ocean-legend" aria-label="Objetivo do jogo">
        <span><img src={images.garrafa} alt="" /> Recolher lixo</span>
        <span><img src={images.peixe} alt="" /> Proteger animais</span>
        <span><img src={images.pedra} alt="" /> Desviar de pedras</span>
      </div>
    </section>
  );
}
