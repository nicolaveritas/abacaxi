import React from "react";
import { StyledSidebar, Link } from "./elements";

function Sidebar() {
  return (
    <StyledSidebar>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
    </StyledSidebar>
  );
}

export default Sidebar;
