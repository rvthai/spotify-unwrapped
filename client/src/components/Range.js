import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styles
import { MoreLink } from "styles";
import { theme, mixins } from "styles";

const { color } = theme;

const Wrapper = styled.div`
  ${mixins.flexRow};
`;

const TermLink = styled(MoreLink)`
  font-weight: 700;
  margin-left: 2em;

  &:hover {
    &:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 50%;
      padding-bottom: 5px;
      border-bottom: 2px solid ${color.green};
    }
  }

  ${(props) =>
    props.active &&
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

function Range(props) {
  const [term, setTerm] = useState("long_term");
  const [longTerm, setLongTerm] = useState(false);
  const [mediumTerm, setMediumTerm] = useState(false);
  const [shortTerm, setShortTerm] = useState(false);

  useEffect(() => {
    if (term === "long_term") {
      setLongTerm(true);
      setMediumTerm(false);
      setShortTerm(false);
    } else if (term === "medium_term") {
      setLongTerm(false);
      setMediumTerm(true);
      setShortTerm(false);
    } else if (term === "short_term") {
      setLongTerm(false);
      setMediumTerm(false);
      setShortTerm(true);
    } else {
      return null;
    }
  }, [term]);

  const handleTermClick = (event) => {
    setTerm(event.target.id);
    props.onTermChange(event.target.id);
  };

  return (
    <Wrapper>
      <TermLink id="long_term" onClick={handleTermClick} active={longTerm}>
        ALL TIME
      </TermLink>
      <TermLink id="medium_term" onClick={handleTermClick} active={mediumTerm}>
        LAST 6 MONTHS
      </TermLink>
      <TermLink id="short_term" onClick={handleTermClick} active={shortTerm}>
        LAST 4 WEEKS
      </TermLink>
    </Wrapper>
  );
}

export default Range;
