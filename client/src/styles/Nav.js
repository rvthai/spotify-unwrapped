import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  min-height: 100vh;
  left: 0;
  background: #121212;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: -3px 0 5px 0 #000;

  @media screen and (max-width: 768px) {
    min-height: 0;
    bottom: 0;
    width: 100%;
  }
`;

export default Nav;
