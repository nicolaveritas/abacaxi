import React from "react";
import { useLocation } from "react-router-dom";
import UserMenu from "../user-menu";
import { StyledHeader } from "./elements";
import { Title } from "../../../../components/elements";

function Header() {
  const pathname = useLocation().pathname;

  return (
    <StyledHeader>
      <Title>{pathname === "/settings" ? "SETTINGS" : "DASHBOARD"}</Title>
      <UserMenu />
    </StyledHeader>
  );
}

export default Header;
