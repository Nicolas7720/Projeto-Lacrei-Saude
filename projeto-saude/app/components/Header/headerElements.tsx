import { HeaderButton, HeaderNav, HeaderRoot } from "./Header.style";
import { HeaderComposition } from "./Header.types";

export const HeaderElements: HeaderComposition = {
  Root: ({ children }) => <HeaderRoot>{children}</HeaderRoot>,
  Nav: ({ children }) => <HeaderNav>{children}</HeaderNav>,
  Button: ({ children, ...rest }) => (
    <HeaderButton {...rest}>{children}</HeaderButton>
  ),
};
