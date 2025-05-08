"use client";

import React, { useState, ReactNode } from "react";
import styled from "styled-components";

type Pergunta = {
  pergunta: string;
  resposta: string;
};

type PerguntasFProps = {
  children: ReactNode;
};

type RespostaProps = {
  isOpen: boolean;
  children: ReactNode;
};

const perguntas: Pergunta[] = [
  {
    pergunta: "O que é o Lacrei Saúde?",
    resposta:
      "O Lacrei Saúde é uma plataforma que conecta profissionais de saúde com pacientes.",
  },
  {
    pergunta: "Como posso me cadastrar?",
    resposta:
      "Você pode se cadastrar clicando no botão 'Entrar' no topo da página.",
  },
  {
    pergunta: "Quais serviços estão disponíveis?",
    resposta:
      "Oferecemos serviços de saúde em diversas especialidades, como cardiologia, pediatria e dermatologia.",
  },
];

// Estilização
const PerguntasFRoot = styled.main`
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.gradient["gradient-subtle"]}
  );
  padding: 40px;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PerguntaContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border["gray-30"]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background["gray-10"]};
  overflow: hidden;
  max-width: 720px;
  min-width: 500px;
`;

const PerguntaHeader = styled.div`
  padding: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text["blue-70"]};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background["blue-10"]};
  }
`;

const Resposta = styled.div<RespostaProps>`
  padding: 16px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text["gray-70"]};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

// Composition Pattern
const PerguntasFElements = {
  Root: ({ children }: PerguntasFProps) => (
    <PerguntasFRoot>{children}</PerguntasFRoot>
  ),
  Container: ({ children }: PerguntasFProps) => (
    <PerguntaContainer>{children}</PerguntaContainer>
  ),
  Header: ({
    children,
    onClick,
  }: {
    children: ReactNode;
    onClick: () => void;
  }) => <PerguntaHeader onClick={onClick}>{children}</PerguntaHeader>,
  Resposta: ({ isOpen, children }: RespostaProps) => (
    <Resposta isOpen={isOpen}>{children}</Resposta>
  ),
};

// Componente Principal
const PerguntasFrequentes: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const togglePergunta = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PerguntasFElements.Root>
      {perguntas.map((item, index) => (
        <PerguntasFElements.Container key={index}>
          <PerguntasFElements.Header onClick={() => togglePergunta(index)}>
            {item.pergunta}
          </PerguntasFElements.Header>
          <PerguntasFElements.Resposta isOpen={openIndex === index}>
            {item.resposta}
          </PerguntasFElements.Resposta>
        </PerguntasFElements.Container>
      ))}
    </PerguntasFElements.Root>
  );
};

export default PerguntasFrequentes;
