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
    src: "/pages/profissionais-saude",
    resumo:
      "Conheça os profissionais de saúde que fazem parte da nossa equipe.",
    title: "Profissionais de Saúde",
  },
  {
    src: "/pages/missao",
    resumo: "Descubra a missão e os valores que guiam o Lacrei Saúde.",
    title: "Missão",
  },
  {
    src: "/pages/perguntas-frequentes",
    resumo:
      "Encontre respostas para as perguntas mais frequentes sobre nossos serviços.",
    title: "Perguntas Frequentes",
  },
];

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.background["gray-20"]};
  min-height: calc(100dvh - 200px);
`;

const Card = styled.div`
  max-height: 320px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.background["gray-10"]};
  border: 1px solid ${({ theme }) => theme.colors.border["gray-30"]};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text["purple-80"]};
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text["gray-70"]};
  margin-bottom: 20px;
`;
const CardDiv = styled.div`
  display: flex;
  width: 100%;
  &.color {
    border-radius: 20px;
    width: 10px;
    height: 100%;
    margin-right: 20px;
    background-color: ${({ theme }) => theme.colors.background["purple-90"]};
  }
`;
const CardButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text["gray-10"]};
  background-color: ${({ theme }) => theme.colors.background["purple-70"]};
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-family: Arial, Helvetica, sans-serif;
  --font-geist-nunitoy &:hover {
    background-color: ${({ theme }) => theme.colors.background["purple-90"]};
  }
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      {Itens.map((item) => (
        <Card key={item.title}>
          <CardTitle>{item.title}</CardTitle>
          <CardDiv>
            <CardDiv className="color"></CardDiv>
            <CardDescription>{item.resumo}</CardDescription>
          </CardDiv>
          <CardButton href={item.src}>Saiba Mais</CardButton>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Main;
