import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme, mixins } from "styles";

const { color, fontWeight, transition } = theme;

const Container = styled.div`
  ${mixins.flexRow}
`;

const Link = styled.p`
  font-weight: ${fontWeight.bold};
  text-decoration: none;
  margin: 0 1em;
  transition: ${transition};
  cursor: pointer;

  &:hover {
    color: ${color.white};
  }

  ${(props) =>
    props.term === props.id &&
    `
    color: ${color.white};

    &:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 50%;
      padding-bottom: 5px;
      border-bottom: 2px solid ${color.green};
    } 
  `}
`;

function Ranges(props) {
  const [term, setTerm] = useState("long");

  useEffect(() => {
    setTerm(term);
  }, [term]);

  const handleTermClick = (event) => {
    const range = event.target.id;
    props.onTermChange(range);
    setTerm(range);
  };

  return (
    <Container>
      <Link id="long" term={term} onClick={handleTermClick}>
        All Time
      </Link>
      <Link id="medium" term={term} onClick={handleTermClick}>
        Last 6 Months
      </Link>
      <Link id="short" term={term} onClick={handleTermClick}>
        Last 4 Weeks
      </Link>
    </Container>
  );
}

export default Ranges;
