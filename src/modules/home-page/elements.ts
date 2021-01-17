import styled from "styled-components";
import { Flex, FlexColumn } from "../../components/elements";
import { colors } from "../../components/theme";

export const PageLayout = styled(FlexColumn)`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.eggshell_beige}
`;

export const Header = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const SectionsWrapper = styled(Flex)`
  flex: 1;
  padding: 0 16px;
`;
