"use client";

import { HeaderElements } from "./headerElements";
import { ChevronDown, CircleUser, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [larguraTela, setLarguraTela] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
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
    <>
      <HeaderElements.Root>
        <Link href={"/"}>
          <HeaderElements.Button className="logo">
            Lacrei Saúde
          </HeaderElements.Button>
        </Link>
        <HeaderElements.Nav>
          <HeaderElements.Button>
            {isClient && larguraTela <= 720 ? (
              <HelpCircle width={25} height={25} />
            ) : (
              "Quem Somos"
            )}
          </HeaderElements.Button>
          {larguraTela > 720 && (
            <HeaderElements.Button>Ajuda</HeaderElements.Button>
          )}
          <HeaderElements.Button className="entrar">
            {isClient && larguraTela <= 720 ? (
              <CircleUser width={25} height={25} />
            ) : (
              <>
                Entrar <ChevronDown width={25} height={25} />
              </>
            )}
          </HeaderElements.Button>
        </HeaderElements.Nav>
      </HeaderElements.Root>
    </>
  );
};
