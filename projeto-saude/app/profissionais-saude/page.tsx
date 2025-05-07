"use client";

import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  min-height: calc(
    100vh - 200px
  ); /* Ajuste para considerar o Header e Footer */
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #28588a;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
  text-align: center;
`;

const ProfessionalsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProfessionalCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  padding: 20px;
  text-align: center;
`;

const ProfessionalName = styled.h3`
  font-size: 1.5rem;
  color: #28588a;
  margin-bottom: 10px;
`;

const ProfessionalSpecialty = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const ProfessionalContact = styled.a`
  font-size: 1rem;
  color: #4d8acb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const profissionais = [
  {
    name: "Dr. João J. James",
    specialty: "Cardiologista",
  },
  {
    name: "Dra. Maria Oliveira",
    specialty: "Pediatra",
  },
  {
    name: "Dr. Carlos Santos",
    specialty: "Dermatologista",
  },
];

const ProfissionaisDeSaude: React.FC = () => {
  return (
    <PageContainer>
      <Title>Profissionais de Saúde</Title>
      <Description>
        Conheça os profissionais de saúde que fazem parte da nossa equipe.
      </Description>
      <ProfessionalsList>
        {profissionais.map((profissional) => (
          <ProfessionalCard key={profissional.name}>
            <ProfessionalName>{profissional.name}</ProfessionalName>
            <ProfessionalSpecialty>
              {profissional.specialty}
            </ProfessionalSpecialty>
            <ProfessionalContact href="#">
              Entrar em contato
            </ProfessionalContact>
          </ProfessionalCard>
        ))}
      </ProfessionalsList>
    </PageContainer>
  );
};

export default ProfissionaisDeSaude;
