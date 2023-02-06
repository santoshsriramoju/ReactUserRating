import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';




import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      display: false
    },
  },
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: '.bottom',
    },
    title: {
      display: true,
      text: 'Reviews',
    },
  },
};

const labels = ['5 ⭐', '4 ⭐', '3 ⭐', '2 ⭐', '1 ⭐'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total',
      data: [20, 25, 12, 7, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      position: 'right'
    }
  ],
};


let total = 0;
let reviewsData = [20, 25, 12, 7, 3];

let sum = 0;
reviewsData.forEach((item, i) => {
  total += item * (5 - i);
  sum += item;
});

let rating = (total / sum).toFixed(1);

let dec = rating.toString().split(".").map(item => Number(item));
console.log(dec[0], dec[1])

if (dec[1] > 5) {
  dec[0] = dec[0] + 1;
}

let halfStar = dec[1] === 5 ? 1 : 0;

let emptyStar = 5 - dec[0] - halfStar;


function App() {
  return <div className="container">
    <span>User Rating: {rating}
      <br />
      {
        [...Array(dec[0])].map((_, i) => {
          return <AiFillStar />
        })
      }
      {
        halfStar !== 0 && <BsStarHalf />
      }
      {
        [...Array(emptyStar)].map((_, i) => {
          return <AiOutlineStar />
        })
      }
    </span>
    <Bar options={options} data={data} /></div>;
}


export default App;