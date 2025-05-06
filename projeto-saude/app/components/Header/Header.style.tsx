"use client";
import styled from "styled-components";

export const HeaderRoot = styled.header`
  background-color: #ffffff;
  max-width: 100vw;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderLogo = styled.img`
  height: 16px;
  size: 48px;
`;
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
export const HeaderButton = styled.button`
  background-color: white;
  font-size: 20px;
  color: #014c37;
  border: none;
  padding: 7px;
  border-radius: 7px;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    background-color: #c4eed190;
  }
  &.entrar {
    color: white;
    background-color: #298a46;
    border: none;
    padding: 7px;
    border-radius: 7px;
    transition: all 1s;
  }
  &.entrar:hover {
    background-color: #014c37c4;
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
