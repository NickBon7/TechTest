import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/MainStyle.scss";
import AppBar from "../AppBar/AppBar";
import "chart.js/auto";
import Footer from "../Footer/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://substantiveresearch.pythonanywhere.com/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const sectorMap = {}; //store the count of interactions for each sector
    data.forEach(({ name }) => {
      if (sectorMap[name]) {
        sectorMap[name]++;
      } else {
        sectorMap[name] = 1;
      }
    });

    const sectors = Object.keys(sectorMap); //from the sectorMap Array get the sectors names
    const values = Object.values(sectorMap); // the number for each sector
    const total = values.reduce((acc, curr) => acc + curr, 0); // adding the current value to the accumulator(the number of the data )

    const percentages = values.map((value) =>
      ((value / total) * 100).toFixed(2)
    );
    console.log(percentages);
    console.log(sectors);

    setChartData({
      labels: sectors,
      datasets: [
        {
          label: "Percentage",
          data: percentages,
          backgroundColor: ["#9870e0", "#58a7ed"],
          borderWidth: 2,
          borderColor: ["#b998f5", "#65b2f7"],
        },
      ],
    });
  }, [data]);

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Client interactions",
        padding: 15,
        font: {
          size: 18,
        },
        color: "#1976d2",
      },
    },
  };

  return (
    <div className="container">
      <AppBar />
      <main className="mainContent">
        <h1 className="title">Interactions By Sector</h1>
        <p className="paragraph">
          The chart displays the percentage of interactions this client has for
          each sector. The sector names are shown on the left, and the size of
          each slice represents the percentage of interactions for that sector.
          This information is helpful in understanding the client's interactions
          with different sectors and can be used to make informed decisions.
        </p>
        <div className="chart">
          <Bar className="lineChart" data={chartData} options={options} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
