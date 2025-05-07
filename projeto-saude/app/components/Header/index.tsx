"use client";

import styled from "styled-components";
import Link from "next/link";
import { ChevronDown, CircleUser, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

const HeaderRoot = styled.header`
  background-color: #ffffff;
  max-width: 100vw;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const HeaderButton = styled.button`
  background-color: white;
  font-size: 20px;
  color: #28588a;
  border: none;
  padding: 7px;
  border-radius: 7px;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    background-color: #c4d8ee94;
  }
  &.entrar {
    color: white;
    background-color: #4d8acb;
    border: none;
    padding: 7px;
    border-radius: 7px;
    transition: all 1s;
  }
  &.entrar:hover {
    background-color: #28578a9e;
  }
  &.logo {
    font-family: Arial;
  }

  @media screen and (min-width: 720px) {
    width: 141px;
    height: 48px;
    &.entrar {
      padding: 10px 16px 10px 32px;
      display: flex;
      gap: 16px;
    }
  }
`;

export const Header = () => {
  const [larguraTela, setLarguraTela] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setLarguraTela(window.innerWidth);

      const handleResize = () => {
        setLarguraTela(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <HeaderRoot>
      <Link href={"/"}>
        <HeaderButton>Lacrei Saude</HeaderButton>
      </Link>
      <Nav>
        <HeaderButton>
          {isClient && larguraTela <= 720 ? (
            <HelpCircle width={25} height={25} />
          ) : (
            "Quem Somos"
          )}
        </HeaderButton>
        {larguraTela > 720 && <HeaderButton>Ajuda</HeaderButton>}
        <HeaderButton className="entrar">
          {isClient && larguraTela <= 720 ? (
            <CircleUser width={25} height={25} />
          ) : (
            <>
              Entrar <ChevronDown width={25} height={25} />
            </>
          )}
        </HeaderButton>
      </Nav>
    </HeaderRoot>
  );
};
