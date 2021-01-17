import React from "react";
import { Card, theme } from "styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TopGenresPreview(props) {
  const Card2 = styled(Card)`
    /*width: 765px;*/
    height: 345px;
  `;

  const Pie = styled.div`
    margin-top: 20px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: ${theme.color.green};
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

  // const Axis = styled.div`
  //   height: 2px;
  //   background-color: white;
  //   margin-right: 1rem;
  //   margin-left: 1rem;
  // `;

  const { genresData } = props;

  return (
    <Card2>
      <PreviewHeader>
        <h3>{props.header}</h3>
        <Link style={{ textDecoration: "none" }} to="/top-genres">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pie />
      </div>
    </Card2>
  );
}

export default TopGenresPreview;
