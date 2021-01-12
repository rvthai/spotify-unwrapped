import styled from "styled-components";

const Button = styled.button`
  padding: 15px 50px;
  background: #1db954;
  border-radius: 25px;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    background: #1ed760;
  }

  &:focus {
    background: #18ac4d;
  }

  &:active {
    background: #1aa34a;
  }
`;

export default Button;

/*
Original: #1db954
#4bdf80 or #1ed760 hover
#18ac4d focus
#1aa34a active
*/
