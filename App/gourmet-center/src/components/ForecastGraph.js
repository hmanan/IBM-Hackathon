import React, { Component } from 'react';

/* STYLES */
import './ForecastGraph.scss';

/* COMPONENTS */
import { LineGraph } from "carbon-addons-data-viz-react";
import { Tile, Tabs, Tab } from "carbon-components-react";

const data3 = [
    [52, 1562842800000],
    [150, 1562846400000],
    [140, 1562850000000],
    [100, 1562853600000],
    [56, 1562857200000],
    [105, 1562860800000],
    [81, 1562864400000],
    [40, 1562868000000],
    [22, 1562871600000],
    [9, 1562875200000]
]

const data = [
    [90, 1562842800000],
    [27, 1562846400000],
    [4, 1562850000000],
    [45, 1562853600000],
    [56, 1562857200000],
    [72, 1562860800000],
    [88, 1562864400000],
    [40, 1562868000000],
    [90, 1562871600000],
    [40, 1562875200000],

]

const data2 = [
    [85, 1562842800000],
    [27, 1562846400000],
    [4, 1562850000000],
    [45, 1562853600000],
    [54, 1562857200000],
    [70, 1562860800000],
    [90, 1562864400000],
    [40, 1562868000000],
    [90, 1562871600000],
    [40, 1562875200000],

    [52,  1562846400000 + 3600000 * 24],
    [150, 1562850000000 + 3600000 * 24],
    [140, 1562853600000 + 3600000 * 24],
    [100,  1562857200000 + 3600000 * 24],
    [56,  1562860800000 + 3600000 * 24],
    [105,  1562864400000 + 3600000 * 24],
    [81,  1562868000000 + 3600000 * 24],
    [22,  1562871600000 + 3600000 * 24],
    [9,   1562875200000 + 3600000 * 24],

    [90, 1562842800000 + 3600000 * 24 * 2],
    [27, 1562846400000 + 3600000 * 24 * 2],
    [4, 1562850000000 + 3600000 * 24 * 2],
    [45, 1562853600000 + 3600000 * 24 * 2],
    [56, 1562857200000 + 3600000 * 24 * 2],
    [72, 1562860800000 + 3600000 * 24 * 2],
    [88, 1562864400000 + 3600000 * 24 * 2],
    [40, 1562868000000 + 3600000 * 24 * 2],
    [90, 1562871600000 + 3600000 * 24 * 2],
    [40, 1562875200000 + 3600000 * 24 * 2],

    [27, 1562846400000 + 3600000 * 24 * 3],
    [100, 1562850000000 + 3600000 * 24 * 3],
    [122, 1562853600000 + 3600000 * 24 * 3],
    [56, 1562857200000 + 3600000 * 24 * 3],
    [66, 1562860800000 + 3600000 * 24 * 3],
    [48, 1562864400000 + 3600000 * 24 * 3],
    [27, 1562868000000 + 3600000 * 24 * 3],
    [7, 1562871600000 + 3600000 * 24 * 3],
    [3, 1562875200000 + 3600000 * 24 * 3],

    [90, 1562842800000 + 3600000 * 24 * 4],
    [27, 1562846400000 + 3600000 * 24 * 4],
    [4, 1562850000000 + 3600000 * 24 * 4],
    [45, 1562853600000 + 3600000 * 24 * 4],
    [56, 1562857200000 + 3600000 * 24 * 4],
    [72, 1562860800000 + 3600000 * 24 * 4],
    [88, 1562864400000 + 3600000 * 24 * 4],
    [40, 1562868000000 + 3600000 * 24 * 4],
    [90, 1562871600000 + 3600000 * 24 * 4],
    [40, 1562875200000 + 3600000 * 24 * 4],

    [27, 1562846400000 + 3600000 * 24 * 5],
    [100, 1562850000000 + 3600000 * 24 * 5],
    [150, 1562853600000 + 3600000 * 24 * 5],
    [56, 1562857200000 + 3600000 * 24 * 5],
    [72, 1562860800000 + 3600000 * 24 * 5],
    [67, 1562864400000 + 3600000 * 24 * 5],
    [40, 1562868000000 + 3600000 * 24 * 5],
    [22, 1562871600000 + 3600000 * 24 * 5],
    [9, 1562875200000 + 3600000 * 24 * 5],

    [90, 1562842800000 + 3600000 * 24 * 6],
    [27, 1562846400000 + 3600000 * 24 * 6],
    [4, 1562850000000 + 3600000 * 24 * 6],
    [45, 1562853600000 + 3600000 * 24 * 6],
    [56, 1562857200000 + 3600000 * 24 * 6],
    [72, 1562860800000 + 3600000 * 24 * 6],
    [88, 1562864400000 + 3600000 * 24 * 6],
    [40, 1562868000000 + 3600000 * 24 * 6],
    [90, 1562871600000 + 3600000 * 24 * 6],
    [40, 1562875200000 + 3600000 * 24 * 6]
]


const graphProps = {
    width: 1700,
    height: 600,
    color: ['#0000FF'],
    xAxisLabel: "t i m e",
    yAxisLabel: "o r d e r s",
    emptyText: "error: No data for view",
    drawLine: true,
    onHover: function () { },
    showTooltip: false,
    timeFormat: '%d %I:%M'
}

const graphProps1 = {
    width: 1500,
    height: 600,
    color: ['#0000FF'],
    xAxisLabel: "t i m e",
    yAxisLabel: "o r d e r s",
    emptyText: "error: No data for view",
    drawLine: true,
    onHover: function () { },
    showTooltip: true,
    timeFormat: '%d %I:%M'
}

const days = [
    "This Week",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Next Week"
]

const daysDisplay = [
    "this week",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "next week"
]

const dayMap = {
    "This Week": -1,
    "Sun": 0,
    "Mon": 1,
    "Tue": 2,
    "Wed": 3,
    "Thu": 4,
    "Fri": 5,
    "Sat": 6,
    "Next Week": -2
}

class ForecastGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDay: "This Week",
            data: data2,
            graphProps: graphProps
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedDay !== prevState.selectedDay) {
            // Show Week
            if (dayMap[this.state.selectedDay] < 0) {
                this.setState({ data: data2, graphProps: graphProps })
            }
            // Show day
            else {
                this.setState({ data: dayMap[this.state.selectedDay] % 2 === 0 ? data : data3, graphProps: graphProps1 })
            }
        }
    }

    renderGraph = (graphData) => {
        return (
            <div className="graph-container">
                <LineGraph
                    data={graphData}
                    {...this.state.graphProps}
                />
            </div>
        );
    }

    render() {
        return (
            <div className="graph-tile">
                <Tile className="tile">
                    <div className="tabs-container">
                    <Tabs className="tabs">
                        {days.map((day, index) => {
                            return (
                                <Tab className="tab" key={index} label={day} onClick={(evt) => { this.setState({ selectedDay: evt.target.outerText }) }}>
                                    <br />
                                    <div className="figure-title">
                                    <h1>customer traffic forecast for {daysDisplay[index]}</h1>
                                    </div>
                                </Tab>
                            )
                        })}
                    </Tabs>
                    </div>
                    {this.renderGraph(this.state.data)}
                </Tile>
            </div>
        );
    }

}

export default ForecastGraph;