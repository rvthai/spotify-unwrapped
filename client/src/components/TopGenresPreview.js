import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Section } from "styles";
import { theme } from "styles";

const { color } = theme;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.darkGray};
  width: 100%;
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
`;

const Bar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 25px;
  background-color: ${theme.color.green};
  margin: 0 0.5em 1em 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  display: flex;
  align-items: center;
`;

const GenresSection = styled(Section)`
  width: 40%;
`;

function TopGenresPreview(props) {
  const ratio = Math.round(props.max / 10) * 10;

  return (
    <GenresSection>
      <PreviewHeader>
        <h3 style={{ margin: "10px 0 10px 0" }}>Top Genres of All Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-genres">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <Bars>
        {Object.keys(props.data).map((genre, index) => (
          <div key={index}>
            <p
              style={{
                color: "#fff",
                textAlign: "left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "14px",
              }}
            >
              {genre}
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Bar percentage={(props.data[genre] / ratio) * 75}></Bar>
              <p>{props.data[genre]}%</p>
            </div>
          </div>
        ))}
      </Bars>
    </GenresSection>
  );
}

export default TopGenresPreview;
