import React from 'react';
import { VictoryChart, VictoryBar, VictoryPie, VictoryTheme } from 'victory';
import { customers } from './data';

export default function MyCharts() {
  const genderData = customers.reduce((acc, customer) => { 
    acc[customer.gender] ? acc[customer.gender]++ : acc[customer.gender] = 1; 
    return acc; }, {});
  const mungedGenderData = Object.entries(genderData).map(value => ({ gender: value[0], count: value[1] }));
  return (
    <div>
      <VictoryChart
        domainPadding={100}
        padding={{ left: 100, bottom: 60 }}
        theme={VictoryTheme.material}
        width={1000}
        margin={{ top: 100 }}
      >
        <VictoryBar
          horizontal
          width={100}
          data={mungedGenderData}
          labels={Object.values(genderData)}
          x="gender"
          y="count"
        />
      </VictoryChart>
  
      <VictoryPie
        width={500}
        colorScale={['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan']}
        data={mungedGenderData}
        x="gender"
        y="count"
      />
    </div>
  );
}
