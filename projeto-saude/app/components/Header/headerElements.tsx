import {
  HeaderButton,
  HeaderLogo,
  HeaderNav,
  HeaderRoot,
} from "./Header.style";
import { HeaderComposition } from "./Header.types";

export const HeaderElements: HeaderComposition = {
  Root: ({ children }) => <HeaderRoot>{children}</HeaderRoot>,
  Logo: ({ ...rest }) => <HeaderLogo {...rest} />,
  Nav: ({ children }) => <HeaderNav>{children}</HeaderNav>,
  Button: ({ children, ...rest }) => (
    <HeaderButton {...rest}>{children}</HeaderButton>
  ),
};
