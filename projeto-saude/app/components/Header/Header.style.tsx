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
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;
export const HeaderButton = styled.button`
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
