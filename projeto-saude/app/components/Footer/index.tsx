"use client";
import React from "react";
import styled from "styled-components";

// Tipagem para os elementos do Footer
type FooterElementProps = {
  children: React.ReactNode;
};

// Estilização com styled-components
const FooterRoot = styled.footer`
  background-color: #ffffff;
  padding: 15px 15px 25px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const FooterHeading = styled.h3`
  color: #28588a;
`;

const FooterItem = styled.p`
  color: black;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Componentes estilizados com tipagem
const FooterElement = {
  Root: ({ children }: FooterElementProps) => (
    <FooterRoot>{children}</FooterRoot>
  ),
  Area: ({ children }: FooterElementProps) => (
    <FooterArea>{children}</FooterArea>
  ),
  Heading: ({ children }: FooterElementProps) => (
    <FooterHeading>{children}</FooterHeading>
  ),
  Item: ({ children }: FooterElementProps) => (
    <FooterItem>{children}</FooterItem>
  ),
};

const Footer: React.FC = () => {
  return (
    <FooterElement.Root>
      <FooterElement.Area>
        <FooterElement.Heading>Lacrei Saúde</FooterElement.Heading>
        <FooterElement.Item>Quem Somos</FooterElement.Item>
      </FooterElement.Area>
      <FooterElement.Area>
        <FooterElement.Heading>Saúde</FooterElement.Heading>
        <FooterElement.Item>Missão</FooterElement.Item>
      </FooterElement.Area>
      <FooterElement.Area>
        <FooterElement.Heading>Profissionais</FooterElement.Heading>
        <FooterElement.Item>Nossos Profissionais</FooterElement.Item>
      </FooterElement.Area>
      <FooterElement.Area>
        <FooterElement.Heading>Perguntas</FooterElement.Heading>
        <FooterElement.Item>Perguntas Frequentes</FooterElement.Item>
      </FooterElement.Area>
    </FooterElement.Root>
  );
};

export default Footer;
