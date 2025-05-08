import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
// import userEvent from "@testing-library/user-event";
import Main from ".";

describe("Testes Main", () => {
  it("Deve renderizar os titulos dos cards corretamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
    screen.getByRole("heading", { name: /missão/i });
    screen.getByRole("heading", { name: /profissionais de saúde/i });
    screen.getByRole("heading", { name: "Perguntas Frequentes" });
  });
  it("Deve mostrar a descrição dos cards corretamente", () => {
    render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
    const descricaoProfissonais = screen.getByText(
      "Conheça os profissionais de saúde que fazem parte da nossa equipe."
    );
    const descricaoMissao = screen.getByText(
      "Descubra a missão e os valores que guiam o Lacrei Saúde."
    );
    const descricaoPerguntas = screen.getByText(
      "Encontre respostas para as perguntas mais frequentes sobre nossos serviços."
    );
    expect(descricaoProfissonais).toBeInTheDocument();
    expect(descricaoMissao).toBeInTheDocument();
    expect(descricaoPerguntas).toBeInTheDocument();
  });
  it("renderizar os botoes e levar para outra pagina ao clicar", async () => {
    // userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
    screen.getAllByRole("link", { name: "Saiba Mais" });
  });
});
