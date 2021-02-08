import React from "react";
import { logout } from "utils";
import styled from "styled-components";
import { Button } from "styles";
import { theme } from "styles";

const { color } = theme;

const LogoutButton = styled(Button)`
  background: transparent;
  border: 1px solid ${color.white};
  margin-top: 2em;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  &:active {
    color: ${color.lightGray};
    border: 1px solid ${color.lightGray};
    transform: scale(1);
  }
`;

function Logout() {
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return <LogoutButton onClick={handleLogout}>LOG OUT</LogoutButton>;
}

export default Logout;
