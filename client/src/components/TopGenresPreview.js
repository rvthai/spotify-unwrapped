import React, { useEffect, useState } from "react";

// Components
import Genre from "components/Genre";

// Styles
import styled from "styled-components";
import { Section, Header, MoreLink } from "styles";
import { theme } from "styles";

const { color } = theme;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
`;

const Axis = styled.div`
  width: 100%;
  height: 1px;
  background: ${color.lightGray};
  margin: 1em 0;
`;

function TopGenresPreview(props) {
  const { data, max } = props;
  const ratio = Math.round(max / 10) * 10;
  const percent = 80;

  const [axisData, setAxisData] = useState([]);

  useEffect(() => {
    if (max !== 0) {
      const limit = Math.ceil(max / 10) * 10;
      const interval = limit / 5;
      let range = [];

      for (let i = 0; i <= limit; i += interval) {
        range.push(i);
      }

      setAxisData(range);
    }
  }, [max]);

  return (
    <Section>
      <Header>
        <h3>Top Genres of All Time</h3>
        <MoreLink to="/top-genres">SEE MORE</MoreLink>
      </Header>
      <Bars>
        {Object.keys(data).map((genre, index) => (
          <Genre
            key={index}
            name={genre}
            width={(data[genre] / ratio) * percent}
            percentage={data[genre]}
          />
        ))}
      </Bars>
      <Axis />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {axisData.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>
    </Section>
  );
}

export default TopGenresPreview;
