import { Bar } from "react-chartjs-2";
import { Helmet } from "react-helmet";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => 100),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => 50),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Stats() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics | Placementor</title>
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/MejarKumar/All-Company-Logo/blob/main/favicon-32x32.png?raw=true"
        />
        <meta name="theme-color" content="#064420" />
      </Helmet>
      {/* <Bar options={options} data={data} />; */}
      <div style={{textAlign: "center", margin:"2rem",fontWeight:"bold",fontSize:"3rem",fontFamily:"sans-serif",color:"rgba(238, 109, 152, 1) "}}>Coming Soon...🤩</div>
    </div>
  );
}
