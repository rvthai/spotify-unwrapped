import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { Card } from "styles";
import { Link } from "react-router-dom";

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

function TopGenresPreview3(props) {
  const data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        data: Object.values(props.data),
        backgroundColor: ["#1db954", "#212121", "#535353", "#b3b3b3", "#fff"],
        borderWidth: 0,
        // hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };

  return (
    <Card>
      <PreviewHeader>
        <h3>Top Genres of All Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-genres">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>

      <Doughnut data={data} options={options} />
    </Card>
  );
}

export default TopGenresPreview3;
