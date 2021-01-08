import { useEffect, useState } from "react";
import { getSeveralArtists, getTopTracks } from "../logic";

import TopGenresPreview from "components/TopGenresPreview";

function TopGenres() {
  const [topGenres, setTopGenres] = useState(null);
  const [total, setTotal] = useState(0);
  const [timeRange, setTimeRange] = useState("long_term");

  useEffect(() => {
    getData();
  }, [timeRange]);

  const getData = async () => {
    const response = await getTopTracks(timeRange, 50);
    const tracks = response.data.items;
    const artists = [];
    for (let i = 0; i < tracks.length; i++) {
      for (let j = 0; j < tracks[i].artists.length; j++) {
        const artist = tracks[i].artists[j];
        if (!artists.includes(artist)) {
          artists.push(artist.id);
        }
      }
    }

    let artists_list = [];
    while (artists.length > 0) {
      if (artists.length >= 50) {
        artists_list.push(artists.splice(0, 50));
      } else {
        artists_list.push(artists.splice(0, artists.length));
      }
    }

    let genresMap = {};
    for (let i = 0; i < artists_list.length; i++) {
      let ids = artists_list[i].join(",");
      let response = await getSeveralArtists(ids);
      let data = response.data.artists;
      for (let j = 0; j < data.length; j++) {
        let genres = data[j].genres;
        for (let k = 0; k < genres.length; k++) {
          let genre = genres[k];
          if (!genresMap[genre]) {
            genresMap[genre] = 0;
          }
          genresMap[genre] += 1;
        }
      }
    }

    let sortable = [];
    for (let genre in genresMap) {
      sortable.push([genre, genresMap[genre]]);
    }
    sortable.sort((a, b) => b[1] - a[1]);
    let new_list = sortable.splice(0, 5);

    // get sum
    let total = 0;
    for (let elem of new_list) {
      total += elem[1];
    }
    setTotal(total);
    // console.log(total);

    let new_map = {};
    for (let elem of new_list) {
      let key = elem[0];
      let value = elem[1];
      //new_map[key] = Math.round((value / total) * 100);
      new_map[key] = value;
    }

    console.log(new_map);
    setTopGenres(new_map);
  };

  const handleClick = (event) => {
    setTimeRange(event.target.id);
  };

  return (
    <div style={{ marginLeft: "200px" }}>
      <div>
        <button id="short_term" onClick={handleClick}>
          Last 4 Weeks
        </button>
        <button id="medium_term" onClick={handleClick}>
          Last 6 Months
        </button>
        <button id="long_term" onClick={handleClick}>
          All Time
        </button>
      </div>

      <h1>Showing top genres for: {timeRange}</h1>

      {topGenres ? (
        <TopGenresPreview genresData={topGenres} total={total} />
      ) : null}
    </div>
  );
}

export default TopGenres;

/* 
Exploding pie chart
import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
    componentDidMount() {
        const change = {
            sliceIndex: 0,
            newOuterRadius: 100
        }
        const meta = this.pie.props.data.datasets[0]._meta;
        meta[Object.keys(meta)[0]]
            .data[change.sliceIndex]
            ._model
            .outerRadius = change.newOuterRadius;
    }

    render() {
        const data = {
            type: 'pie',
            datasets: [ { data: [10, 20, 30] } ],
            labels: ['a', 'b', 'c'],
        };
        const options = {};

        return <Pie
            ref={(self) => this.pie = self}
            data={data}
            options={options}
        />
    }
}

export default PieChart;
*/
