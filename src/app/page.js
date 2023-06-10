'use client'
import { Line, Bar } from "react-chartjs-2"
import { CategoryScale, Chart, LineElement, BarElement, LinearScale, PointElement, Title, Legend, Filler, Tooltip } from "chart.js";
import { useEffect, useRef, useState } from "react";

  
Chart.register(CategoryScale, LineElement, BarElement, LinearScale, PointElement, Title, Legend, Filler, Tooltip );
  
export const data = {
  labels: ['hari 1', 'hari 2', 'hari 3', 'hari 4', 'hari 5', 'hari 6', 'hari 7', 'hari 8', 'hari 9', 'hari 10', 'hari 11', 'hari 12'],
    datasets: [
      {
      label: 'jumlah rokok',
      data: [12, 13, 10, 9, 6, 8, 6, 10, 11, 9, 10, 11],
      borderWidth: 2,
      borderColor: 'red',
      fill: true,
      cubicInterpolationMode: 'monotone',
    },
      {
      label: 'jumlah uang',
      data: [1, 4, 8, 6, 10, 11, 9, 10, 6, 7, 6, 4 ],
      borderWidth: 2,
      borderColor: 'blue',
      fill: true,
      cubicInterpolationMode: 'monotone',
    },
  ]
}
// const createGradient=(ctx, area)=>{
//   const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
//   gradient.addColorStop(0, 'green');
//   gradient.addColorStop(0.5, 'yellow');
//   gradient.addColorStop(1, 'red');
//   return gradient;
// }
const createGradientBackgroundRed=(ctx, area)=>{
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, 'rgba(255, 0, 111, 0.01)');
  gradient.addColorStop(1, 'rgba(255, 0, 111, 0.4)');
  return gradient;
}
const createGradientBackgroundBlue=(ctx, area)=>{
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, 'rgba(0, 102, 255, 0.01)');
  gradient.addColorStop(1, 'rgba(0, 102, 255, 0.4)');
  return gradient;
}

export default function Home() {
  const [currentChart, setCurrentChart] = useState('line');
  const chartTypeRef = useRef(null);
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset, i) =>  {
        if(currentChart === 'bar'){
          if(i === 0){
            return ({
            ...dataset,
            borderWidth: 0,
            backgroundColor: 'rgb(255, 0, 98)',
          })
        }
        else if(i === 1){
          return ({
            ...dataset,
            borderWidth: 0,
            backgroundColor: 'rgb(0, 102, 255)',
          })
          }
        }
        else if(i === 0){
          return ({
          ...dataset,
          backgroundColor: createGradientBackgroundRed(chart.ctx, chart.chartArea),
        })
        }
        else if(i === 1){
          return ({
          ...dataset,
          backgroundColor: createGradientBackgroundBlue(chart.ctx, chart.chartArea),
        })
        }
      })
    };

    setChartData(chartData);
  }, [currentChart]);

  
  const options= {
    responsive: true,
    scales: {
      y: {
          // min : 0,
          // max : 20,
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }
    },
    plugins: {
      title: {
        text : "Grafik progres merokok budi",
        display: true,
        color: '#D0d099',
        font: {
          size: 20,
          weight: 'bold'
        }
      },
      legend:{
        display: true,
        position: 'top',
        color: 'green',

        labels:{
          color: 'blue',
          usePointStyle: true,
          pointStyle: 'rect',
        },
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeInBounce',
        from: 1,
        to: 0,
        loop: true
      }
    },
    transitions: {
      show: {
        animations: {
          x: {
            from: 200
          },
          y: {
            from: 1000
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 200
          },
          y: {
            to: 1000
          }
        }
      },
      active: {
        animations: {
          properties: 'easeInCubic'
        }
      }
    }
  }


  
  return (
  <main>
    <h1 >Chart js</h1>
    <div className=" w-1/2 h-3/4 flex justify-end items-center space-x-4 text-gray-700">
      <label htmlFor="chartType">Tipe grafik : </label>
      <select 
      name="chartType" id="chartType" ref={chartTypeRef} 
      className="bg-red-100 px-4 py-1 rounded-md focus:outline-none"
      onChange={()=> setCurrentChart(chartTypeRef.current?.value)}>
        <option value='line' >Line</option>
        <option value="bar" >Bar</option>
      </select>
    </div>
    <div className="relative w-1/2 h-3/4 mt-8">
      {
        currentChart ==='line' ?
        <Line
        datasetIdKey='id'
        data={chartData}
        width={400} 
        height={250} 
        options={options}
        ref={chartRef}
         />
         :
         <Bar
         datasetIdKey='id'
         data={chartData}
         width={400} 
         height={250} 
         options={options}
         ref={chartRef}
          />
      }
    </div>
  </main>
  )
}
