import React from "react";
import { useSelector } from "react-redux";
import { Text, SmallText } from "../../../../components/elements";
import LogoutButton from "../../../auth/LogoutButton";
import { selectUserName, selectUserEmail } from "../../../auth/redux";
import { StyledUserMenu, UserInfo } from "./elements";

function UserMenu() {
  const userName = useSelector((state: RootState) =>
    selectUserName(state.auth)
  );
  const userEmail = useSelector((state: RootState) =>
    selectUserEmail(state.auth)
  );
  return (
    <StyledUserMenu>
      <UserInfo>
        <Text>{userName}</Text>
        <SmallText>{userEmail}</SmallText>
      </UserInfo>
      <LogoutButton />
    </StyledUserMenu>
  );
}

export default UserMenu;
