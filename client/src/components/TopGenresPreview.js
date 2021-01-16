import React from "react";
import { Card, theme } from "styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TopGenresPreview(props) {
  const Card2 = styled(Card)`
    width: 765px;
  `;

  const thing = Math.round(((props.max / props.total) * 100) / 10) * 10;

  const PreviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
  `;

  const Bars = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Bar = styled.div`
    width: ${(props) => props.percentage}%;
    height: 25px;
    background-color: ${theme.color.green};
    margin: 0 1rem 1rem 1rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    display: flex;
    align-items: center;
  `;

  const Axis = styled.div`
    height: 2px;
    background-color: white;
    margin-right: 1rem;
    margin-left: 1rem;
  `;

  const { genresData } = props;

  return (
    <Card2>
      <PreviewHeader>
        <h3>Top Genres of all Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-genres">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <Bars>
        {Object.keys(genresData).map((genre, index) => (
          <div key={index}>
            {/* <p
              style={{ color: "white", marginLeft: "1rem", textAlign: "left" }}
            >
              {genre}
            </p> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Bar
                percentage={
                  (Math.round((genresData[genre] / props.total) * 100) /
                    thing) *
                  70
                }
              >
                <p
                  style={{
                    color: "#fff",
                    marginLeft: "0.5em",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {genre}
                </p>
              </Bar>
              <p>{Math.round((genresData[genre] / props.total) * 100)}%</p>
            </div>
          </div>
        ))}
      </Bars>
      <Axis></Axis>
    </Card2>
  );
}

export default TopGenresPreview;
