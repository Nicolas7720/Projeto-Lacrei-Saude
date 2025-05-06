import "styled-components";
import { Colors } from "./colors";

declare module "styled-components" {
  type NewColorType = typeof Colors;
}
