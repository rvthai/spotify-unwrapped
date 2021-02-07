import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme, mixins } from "styles";

const { color, fontSize, fontWeight, kerning, transition } = theme;

const Container = styled.div`
  ${mixins.flexRow}
  ${mixins.flexSpaceAround}
  width: 350px;
`;

const Link = styled.p`
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${kerning.lost};
  text-decoration: none;
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
        ALL TIME
      </Link>
      <Link id="medium" term={term} onClick={handleTermClick}>
        LAST 6 MONTHS
      </Link>
      <Link id="short" term={term} onClick={handleTermClick}>
        LAST 4 WEEKS
      </Link>
    </Container>
  );
}

export default Ranges;
