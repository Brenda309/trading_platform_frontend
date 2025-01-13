import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button } from "@/components/ui/button"

const timeSeries =[
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Time Series (Daily)",
        lable:"1 Day",
        value:1,
    },

    {
        keyword:"DIGITAL_CURRENCY_WEEKLY",
        key:"Weekly Time Series (",
        lable:"1 Week",
        value:1,
    },
    {
        keyword:"DIGITAL_CURRENCY_MONTHLT",
        key:"Monthly Time Series",
        lable:"1 Month",
        value:30,
    },
]

const StockChart = () => {
    const [activeLable, setActiveLable]=useState("1 Day")
  const series = [
    {
      data: [
        [1734023244051, 101506.146952755],
        [1734026480591, 101441.306834791],
        [1734030000200, 100962.953035488],
        [1734033823712, 99491.3576333437],
        [1734037416231, 99994.3394556682],
        [1734041019217, 99794.1687839679],
        [1734044623746, 100440.44144022],
        [1734048226072, 100006.337281566],
        [1734051824930, 100103.332597151],
        [1734055261522, 99361.7584775802],
        [1734059015174, 99462.2209728623],
        [1734062587966, 99784.7769694278],
        [1734066036101, 100059.66050266],
        [1734069817233, 99902.8427483668],
        [1734073419587, 99822.1474539327],
        [1734077029431, 100158.165718037],
        [1734080632621, 100294.034064663],
        [1734084013417, 100170.251112168],
        [1734087714581, 100541.582505546],
        [1734091438737, 100381.563843583],
        [1734094968385, 100277.757001553],
        [1734098624772, 100227.379300135],
        [1734102220683, 101036.437557939],
        [1734105829780, 99971.4251622482],
        [1734109307046, 100852.684284156],
        [1734113028890, 101744.124653236],
        [1734116544892, 101530.142998161],
        [1734120015889, 101668.542310641],
        [1734123827214, 101651.525004452],
        [1734127422158, 101369.054245713],
        [1734131302391, 101296.084208243],
        [1734134624546, 101352.229712923],
        [1734138223070, 101395.6480409],
        [1734141827415, 102136.618484058],
      ],
    },
  ];

  const options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 450,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime', // Corrected typo here
      tickAmount: 6,
    },
    colors: ['#758AAA'], // Removed duplicate and fixed the array
    markers: {
      colors: ['#fff'],
      strokeColor: '#fff',
      size: 0,
      strokeWidth: 1,
      style: 'hollow',
    },
    tooltip: {
      theme: 'dark',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9, // Fixed typo here
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: '#47535E',
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable=(value)=>{
    setActiveLable(value)
  }

  return (
    <div>
        <div className='space-x-3'>
            {timeSeries.map((item)=> <Button 
            variant={activeLable==item.lable?"":"outline"}
            onClick={()=>handleActiveLable(item.lable)} key={item.lable}>
                {item.lable}
                </Button>)}
        </div>
      <div id="chart-timelines">
        <ReactApexChart options={options} series={series} type="area" height={450} />
      </div>
    </div>
  );
};

export default StockChart;