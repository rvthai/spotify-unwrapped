import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styles
import { theme, mixins } from "styles";

const { color, fontSize, fontWeight, kerning, transition } = theme;

const Container = styled.div`
  ${mixins.flexRow};
`;

const Link = styled.p`
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.bold};
  letter-spacing: ${kerning.lost};
  text-decoration: none;
  margin-left: 2em;
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

function TimeRanges(props) {
  const [term, setTerm] = useState("long_term");

  useEffect(() => {
    setTerm(term);
  }, [term]);

  const handleTimeRangeClick = (event) => {
    const timeRange = event.target.id;
    props.onTimeRangeChange(timeRange);
    setTerm(timeRange);
  };

  return (
    <Container>
      <Link id="long_term" term={term} onClick={handleTimeRangeClick}>
        ALL TIME
      </Link>
      <Link id="medium_term" term={term} onClick={handleTimeRangeClick}>
        LAST 6 MONTHS
      </Link>
      <Link id="short_term" term={term} onClick={handleTimeRangeClick}>
        LAST 4 WEEKS
      </Link>
    </Container>
  );
}

export default TimeRanges;
