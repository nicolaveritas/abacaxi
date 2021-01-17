import styled from "styled-components";
import { Flex, FlexColumn } from "../../../../components/elements";

export const StyledUserMenu = styled(Flex)`
  align-items: center;
`;

export const UserInfo = styled(FlexColumn)`
  align-items: flex-end;
  margin-right: 16px;
`;

export const UserMenuExpanded = styled(FlexColumn)`
  align-items: flex-end;
  position: absolute;
  top: 32px;
  right: 0;
  border: 1px solid black;
  padding: 16px;
  border-radius: 10px;
  background: white;
`;