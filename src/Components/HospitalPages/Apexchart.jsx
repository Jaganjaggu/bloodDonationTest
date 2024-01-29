import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';

 export class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Requests',
          data: [10,45,66,38,97,16,23,55
          ]
        },
        {
          name: 'Donates',
          data: [-44, -35, -56, -38, -14, -72, -45, -37
          ]
        }
        ],
        options: {
          chart: {
            type: 'bar',
            height: 440,
            stacked: true
          },
          colors: ['#008FFB', '#FF4560'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -100,
            max: 100,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return (val) 
              }
            }
          },
          title: {
            text: 'Blood Donation Status 2023'
          },
          xaxis: {
            categories: ['A+', 'B+', 'AB+', 'O+' ,'A-','B-','AB-','O-'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(val) 
              }
            }
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={440} />
</div>


      );
    }
  }

  const domContainer = document.querySelector('#app');
