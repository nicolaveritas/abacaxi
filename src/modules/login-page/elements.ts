import styled from "styled-components";
import { FlexColumn } from "../../components/elements";
import { colors } from "../../components/theme";
import abacaxi from "./abacaxi.jpg";

export const StyledLoginPage = styled(FlexColumn)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${colors.eggshell_beige};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vh;
`;

export const Logo = styled.img.attrs({
  src: abacaxi,
})`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const FormWrapper = styled.div`
  padding: 50px;
  background: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
`;