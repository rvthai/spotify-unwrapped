import React from "react";
import { logout } from "utils";

import styled from "styled-components";
import { Button } from "styles";
import { theme } from "styles";

const { color } = theme;

const LogoutButton = styled(Button)`
  color: ${color.lightGray};
  background: ${color.lightSlateGray};

  &:hover {
    color: ${color.white};
    transform: scale(1.05);
  }

  &:active,
  &:focus {
    background-color: ${color.slateGray};
    color: ${color.gray};
    transform: scale(1);
  }
`;

function Logout() {
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return <LogoutButton onClick={handleLogout}>SIGN OUT</LogoutButton>;
}

export default Logout;
