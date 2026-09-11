"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
import { Brand } from "./Brand";
import { Container, Icon } from "./ui";
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Container className="nav-container">
        <Link
          href="/"
          className="brand"
          aria-label="Aprendizagem Kids Play — início"
          onClick={() => setOpen(false)}
        >
          <Brand priority />
        </Link>
        <button
          className="menu-toggle button button-secondary"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Navegação principal"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                (
                  item.href === "/"
                    ? path === "/"
                    : path.startsWith(item.href.replace(/\/$/, ""))
                )
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/educacao-infantil/"
          className="nav-explore button button-primary"
        >
          Vamos aprender
          <Icon name="spark" />
        </Link>
      </Container>
    </header>
  );
}
