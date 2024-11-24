import { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/Charts/BarChart";
// import DemandMarketChart from "./components/Charts/DemanMarket";
import LineChart from "./components/Charts/LineChart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import SugarcaneService from "./service/SugarcaneService";
import MapView from "./components/MapView";

const App = () => {
  const statCards = [
    {
      label: "Jumlah Karyawan",
      value: "109,928",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/055cdad99651f99279b4dd7b95ea98f44814aea7de0938b7d07e25277078ba38?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
    {
      label: "Luas Lahan",
      value: "20,000ha",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5fa6bf42519f1d1157f848beec54d2b81ee949eb883bfd0eed567bade7b0fc1?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
    {
      label: "Luas Kebun",
      value: "10,000ha",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/016b4fefa718447b6010ae682c605d7bc0af362064635b38aff009c252636f72?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
    {
      label: "Luas Kebun",
      value: "10,000ha",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/016b4fefa718447b6010ae682c605d7bc0af362064635b38aff009c252636f72?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
  ];

  // const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(false);
      const response = await SugarcaneService.get();
      const labels = response.data.map((item) => item.lokasi);
      const data = response.data.map((item) => item.produksi_ton);
      const dataArea = response.data.map((item) => item.luas_hektar);
      setChartData({
        ...chartData,
        labels,
        datasets: [
          {
            label: "Produksi (Ton)",
            data: data,
            borderColor: "#E2A70C",
            backgroundColor: "#E2A70C",
            borderWidth: 1,
          },
          {
            label: "Luas Hektar",
            data: dataArea,
            backgroundColor: "#3DA60D",
            borderColor: "#3DA60D",
            borderWidth: 1,
          },
        ],
      });
    };
    fetchData().then();
  }, [chartData]);

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <section className="flex flex-col items-center w-full px-4 py-6 bg-white max-w-7xl mx-auto space-y-6">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {statCards.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <LineChart
            title="Pendapatan vs Operasional"
            labels={chartData.labels}
            datasets={chartData.datasets}
            height={280}
          />
          <LineChart
            title="Harga Komoditas Gula tahun (2023)"
            labels={chartData.labels}
            datasets={chartData.datasets}
            height={280}
          />
          <MapView title="Luas Kebun" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <BarChart
            title="Jumlah Produksi"
            labels={chartData.labels}
            datasets={chartData.datasets}
          />
          <BarChart
            title="Target Produksi"
            labels={chartData.labels}
            datasets={chartData.datasets}
          />
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default App;
