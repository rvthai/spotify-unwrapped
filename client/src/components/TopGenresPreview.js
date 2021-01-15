import { Pie, Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels"; // https://chartjs-plugin-datalabels.netlify.app/
// https://www.chartjs.org/docs/latest/charts/doughnut.html
// https://github.com/reactchartjs/react-chartjs-2
import { Card } from "styles";

function TopGenresPreview(props) {
  // const makeLabels = () => {
  //   let labels = [];
  //   for (let key in props.genresData) {
  //     labels.push(key);
  //   }
  //   return labels;
  // };

  // const makeData = () => {
  //   let dataList = [];
  //   for (let key in props.genresData) {
  //     dataList.push(props.genresData[key]);
  //   }
  //   return dataList;
  // };

  // const data = {
  //   labels: makeLabels(),
  //   datasets: [
  //     {
  //       data: makeData(),
  //       backgroundColor: [
  //         "#fff100",
  //         "#ec008c",
  //         "#68217a",
  //         "#00b294",
  //         "#bad80a",
  //       ],
  //       borderWidth: 0,
  //     },
  //   ],
  // };

  // const options = {
  //   // maintainAspectRatio: false,
  //   // legend: {
  //   //   position: "right",
  //   //   labels: {
  //   //     boxWidth: 10,
  //   //   },
  //   // },
  //   plugins: {
  //     datalabels: {
  //       formatter: (value, context) =>
  //         "Genre" + Math.round((value / props.total) * 100) + "%",
  //       display: true,
  //       color: "white",
  //     },
  //   },
  // };

  // return (
  //   <div>
  //     Top Genres of All Time
  //     {/* <Pie data={data} width={150} height={50} options={options} /> */}
  //     <Doughnut data={data} width={150} height={50} options={options} />
  //   </div>
  // );
  return (
    <Card>
      Top Tracks of All Time
      <div>
        {props.data.map((track, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "1rem",
            }}
          >
            <p style={{ marginRight: "1em" }}>{index + 1}</p>
            <img
              style={{
                width: "50px",
                height: "50px",
              }}
              src={track.album.images[2].url}
              alt="album-cover"
            />
            <p style={{ marginLeft: "1em", cursor: "pointer" }}>{track.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TopGenresPreview;

/*
data: (PropTypes.object | PropTypes.func).isRequired,
width: PropTypes.number,
height: PropTypes.number,
id: PropTypes.string,
legend: PropTypes.object,
options: PropTypes.object,
redraw: PropTypes.bool,
getDatasetAtEvent: PropTypes.func,
getElementAtEvent: PropTypes.func,
getElementsAtEvent: PropTypes.func
onElementsClick: PropTypes.func, // alias for getElementsAtEvent (backward compatibility)
*/
