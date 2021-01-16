import { useEffect, useState } from "react";
import { getSeveralArtists, getTopTracks } from "../utils";

import TopGenresPreview from "components/TopGenresPreview";

const TopGenres = () => <div>Top Genres</div>;

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
