import React, { Component } from 'react';
import {observer} from "mobx-react";
import './App.css';
import ChartContainer from './ChartContainer';

const initialState = {
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{x: new Date(1518833357), y: 1000}, {x: new Date(1518834357), y: 2000}, {x: new Date(), y: 2000}]
    }
  ]
};

const options = {
  responsive: true,
  animation: false,
  title: {
    display: true,
    text: 'Chart.js Time Point Data'
  },
  scales: {
    xAxes: [{
      type: 'time',
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date'
      },
      ticks: {
        major: {
          fontStyle: 'bold',
          fontColor: '#FF0000'
        }
      },
      gridLines: {
        display:false
      }
    }],
  }
}

@observer
class App extends Component {
  render() {
    return <ChartContainer sensors={this.props.store.sensors} initialState={initialState} options={options}/>
  }
}

export default App;
