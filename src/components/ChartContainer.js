import React from 'react';
import {observer} from 'mobx-react';
import {Line} from 'react-chartjs-2';

const ChartContainer = observer(({sensors, initialState, options}) => {
  if (sensors.get('sensor1') && sensors.get('sensor1').queue.data.length) {
    initialState.datasets[0].data = sensors.get('sensor1').queue.data.slice();
  }

  return (
    <div>
      <p>count: {sensors.get('sensor1') && sensors.get('sensor1').queue.data.length}</p>
      {
        sensors && sensors.keys() && sensors.keys().filter(key=>key ==='sensor1').map(key =>
          <div key={key}>
            <p>min: {sensors.get('sensor1').minHeap.data[0]} | max: {sensors.get('sensor1').maxHeap.data[0]}</p>
            <Line
              key={key}
              data={initialState}
              options={options}
            />
          </div>
        )
      }
    </div>
  );
});

export default ChartContainer;