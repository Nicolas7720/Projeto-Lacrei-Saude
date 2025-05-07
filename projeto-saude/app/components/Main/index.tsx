"use client";

import styled from "styled-components";
import Link from "next/link";

export interface CardItens {
  src: string;
  title: string;
  resumo: string;
}

const Itens: CardItens[] = [
  {
    src: "/profissionais-saude",
    resumo:
      "Conheça os profissionais de saúde que fazem parte da nossa equipe.",
    title: "Profissionais de Saúde",
  },
  {
    src: "/missao",
    resumo: "Descubra a missão e os valores que guiam o Lacrei Saúde.",
    title: "Missão",
  },
  {
    src: "/perguntas-frequentes",
    resumo:
      "Encontre respostas para as perguntas mais frequentes sobre nossos serviços.",
    title: "Perguntas Frequentes",
  },
];

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  background-color: #f9f9f9;
  min-height: calc(
    100vh - 200px
  ); /* Ajuste para considerar o Header e Footer */
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #28588a;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const CardButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #4d8acb;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28588a;
  }
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      {Itens.map((item) => (
        <Card key={item.title}>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.resumo}</CardDescription>
          <CardButton href={item.src}>Saiba Mais</CardButton>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Main;
