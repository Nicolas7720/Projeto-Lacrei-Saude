"use client";
import React from "react";

import styled from "styled-components";

type MissaoElementsProps = {
  children: React.ReactNode;
};

const MissaoMain = styled.main`
  min-height: calc(100vh - 200px);
  width: 100%;
  padding: 30px 20px 10px 20px;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.gradient["gradient-subtle"]}
  );

  @media screen and (min-width: 720px) {
    padding: 30px 150px 10px 150px;
  }
`;
const MissaoDiv = styled.div`
  min-height: calc(90vh - 200px);
  background: ${({ theme }) => theme.colors.background["gray-10"]};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.border["gray-30"]};
  padding: 20px;
`;
const MissaoHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text["red-70"]};
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.text["red-60"]};
`;
const MissaoParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text["gray-90"]};
  line-height: 35px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.text["gray-40"]};

  @media screen and (min-width: 720px) {
    font-size: 18px;
  }
`;

const MissaoElement = {
  Main: ({ children }: MissaoElementsProps) => (
    <MissaoMain>{children}</MissaoMain>
  ),
  Div: ({ children }: MissaoElementsProps) => <MissaoDiv>{children}</MissaoDiv>,
  Heading: ({ children }: MissaoElementsProps) => (
    <MissaoHeading>{children}</MissaoHeading>
  ),
  Paragraph: ({ children }: MissaoElementsProps) => (
    <MissaoParagraph>{children}</MissaoParagraph>
  ),
};

const Missao = () => {
  return (
    <MissaoElement.Main>
      <MissaoElement.Div>
        <MissaoElement.Heading>Nossa Missão:</MissaoElement.Heading>
        <MissaoElement.Paragraph>
          No Lacrei Saúde, acreditamos que toda pessoa tem o direito inegociável
          de acessar cuidados em saúde com respeito, acolhimento e dignidade. A
          nossa missão vai além do cuidado básico — queremos transformar a
          maneira como a saúde é oferecida e percebida no Brasil, construindo
          uma rede segura, inclusiva e diversa que realmente atenda às
          necessidades de todas as pessoas.
        </MissaoElement.Paragraph>
        <MissaoElement.Paragraph>
          Trabalhamos com o compromisso de conectar pessoas LGBTQIAPN+, mulheres
          e outros grupos historicamente marginalizados a profissionais e
          serviços de saúde que atuem sem discriminação, com empatia e
          responsabilidade social. Acreditamos que ninguém deve ser excluído ou
          maltratado ao buscar atendimento por causa de sua identidade,
          orientação ou contexto social.
        </MissaoElement.Paragraph>
        <MissaoElement.Paragraph>
          Por isso, atuamos ativamente para romper barreiras estruturais,
          combater o preconceito e fomentar uma cultura de equidade no cuidado
          com a saúde. A tecnologia é uma aliada fundamental nessa jornada: por
          meio dela, criamos pontes entre quem precisa de atendimento e quem
          está preparado para oferecer um acolhimento verdadeiramente humano,
          ético e qualificado.
        </MissaoElement.Paragraph>
        <MissaoElement.Paragraph>
          Mais do que um serviço, somos um movimento por justiça social na
          saúde. Estamos criando, juntos, um futuro em que cuidar do outro é um
          ato de empatia, de respeito e de compromisso com a vida — nunca de
          julgamento.
        </MissaoElement.Paragraph>
      </MissaoElement.Div>
    </MissaoElement.Main>
  );
};

export default Missao;
