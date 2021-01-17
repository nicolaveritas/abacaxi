import styled from "styled-components";
import { FlexColumn } from "../../components/elements";
import { colors } from "../../components/theme";

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
  src: "https://i.picsum.photos/id/665/200/200.jpg?hmac=hWcfvzYgHAwJFOUaHZa2oZpOOL7yx_x8Bnhq0dFVQRw",
})`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const FormWrapper = styled.div`
  padding: 50px;
  background: white;
  border-radius: 20px;
`;