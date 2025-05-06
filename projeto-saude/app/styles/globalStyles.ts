"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
  --background: #ffffff;
  --foreground: #171717;
  --font-main: "Nunito", sans-serif;
  --font-primary: Arial, Helvetica, sans-serif;
  --primary: "#FFFFFF";

  --emerald-40: "#018762";

  --purple-10: "#F9F3FF";
  --purple-20: "#D9C4EE";
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

html,
body {
  max-width: 100vw;
  max-height: 100dvh;
  overflow-x: hidden;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}


`;
