import React from "react";
import { Card, theme } from "styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

const Card2 = styled(Card)`
  width: 350px;
`;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

function ActivityPreview(props) {
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(29,185,84,0.4)",
  //       borderColor: "rgba(29,185,84,1)",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //     },
  //   ],
  // };

  // const options = {
  //   maintainAspectRation: false,
  // };

  return (
    <Card2>
      <PreviewHeader>
        <h3>Activity</h3>
        <Link style={{ textDecoration: "none" }} to="/top-genres">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      {/* <div style={{ marginTop: "2em", color: `${theme.color.green}` }}>
        25.6
      </div>
      <div style={{ marginBottom: "2em" }}>TOTAL LISTENS THIS WEEK</div>
      <div style={{ marginTop: "2em", color: `${theme.color.green}` }}>
        25.6
      </div>
      <div style={{ marginBottom: "2em" }}>AVERAGE LISTENS PER DAY</div>
      <div style={{ width: "350px", height: "225px" }}>
        <Line data={data} options={options} width={350} height={200} />
      </div> */}
    </Card2>
  );
}

export default ActivityPreview;
