import React from "react";
import styled from "styled-components";
import { Card } from "styles";
import { Link } from "react-router-dom";
import { theme } from "styles";

const { color } = theme;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border-bottom: 1px solid ${color.lightGray};
  padding-bottom: 1em;
`;

const Card2 = styled(Card)`
  width: 300px;
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 25px;
  background-color: ${theme.color.green};
  margin: 0 1rem 1.5em 1rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  display: flex;
  align-items: center;
`;

function TopGenresPreview(props) {
  const ratio = Math.round(props.max / 10) * 10;

  return (
    <Card>
      <PreviewHeader>
        <h3>Top Genres of All Time</h3>
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
                marginLeft: "1.1em",
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
    </Card>
  );
}

export default TopGenresPreview;
