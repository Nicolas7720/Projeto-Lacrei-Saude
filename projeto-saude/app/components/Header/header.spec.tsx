import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("Testes Header", () => {
  it("renderizar corretamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    screen.getByRole("banner");
    screen.getByRole("button", { name: "Lacrei Saude" });

    screen.getByRole("button", { name: /Quem somos/i });

    screen.getByRole("button", { name: "Ajuda" });

    screen.getByRole("button", { name: /Entrar/i });
    screen.getByRole("button", { name: /opcoes/i });
  });
  it("renderizar icones normais", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    screen.getByRole("button", { name: /opcoes/i });
    screen.getByRole("button", { name: /ajuda/i });
  });
  it("renderizar ícones quando a tela for menor que 720", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 700,
    });
    window.dispatchEvent(new Event("resize"));
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    screen.getByRole("button", { name: /user/i });
  });
});
