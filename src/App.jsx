import { useEffect, useState } from "react";
import "./App.css";
// import BarChart from "./components/Charts/BarChart";
// import DemandMarketChart from "./components/Charts/DemanMarket";
import LineChart from "./components/Charts/LineChart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import SugarcaneService from "./service/SugarcaneService";

const App = () => {
  const statCards = [
    {
      title: "Jumlah Karyawan",
      value: "109,928",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/055cdad99651f99279b4dd7b95ea98f44814aea7de0938b7d07e25277078ba38?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
    {
      title: "Luas Lahan",
      value: "20,000ha",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5fa6bf42519f1d1157f848beec54d2b81ee949eb883bfd0eed567bade7b0fc1?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
    {
      title: "Luas Kebun",
      value: "10,000ha",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/016b4fefa718447b6010ae682c605d7bc0af362064635b38aff009c252636f72?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
    },
    {
      title: "Pendapatan per Tahun",
      value: "Rp 100M",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/22ef5ec6a2427bd9e333e352bf7a8d572cf108fa10e53304b74b60d8462f768d?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6",
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
            borderColor: "rgb(132, 204, 22)",
            backgroundColor: "rgba(132, 204, 22, 0.5)",
            borderWidth: 1,
          },
          {
            label: "Luas Hektar",
            data: dataArea,
            backgroundColor: "rgb(132, 204, 22)",
            borderColor: "rgba(153,102,255,1)",
            borderWidth: 1,
          },
        ],
      });
    };
    fetchData();
  }, [chartData]);

  console.log(chartData.datasets);
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex flex-col self-center mt-5 w-full bg-white max-w-[1380px] max-md:max-w-full">
        <section className="flex flex-col w-full bg-white max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            <h1 className="flex-1 shrink gap-1 self-stretch my-auto text-lg font-semibold tracking-normal leading-none whitespace-nowrap min-w-[240px] text-stone-900 max-md:max-w-full">
              Dashboard
            </h1>
            <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
              <div className="flex gap-2 items-start self-stretch px-3 py-1.5 my-auto w-40 bg-white rounded-md border border-solid border-neutral-200">
                <div className="flex flex-1 shrink gap-1 items-center text-sm tracking-normal leading-none whitespace-nowrap">
                  <span className="self-stretch my-auto text-neutral-500">
                    Year:
                  </span>
                  <span className="flex-1 shrink self-stretch my-auto font-medium basis-0 text-stone-900">
                    2023
                  </span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed238550e775f8211d336443b4ff11e45d8c5f532a9a0e6209c4c2a1247c9dc7?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
                  alt=""
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 items-center self-stretch px-4 py-1.5 my-auto text-sm tracking-normal leading-none bg-white rounded border border-solid border-neutral-200 text-stone-900 w-[226px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8e5b7d4016638fd4b850f5e54b788b0598be3f22af8f83db73ad93de161a18d?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <span className="flex-1 shrink self-stretch my-auto basis-0">
                  Sragi, Pekalongan
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b582602faf340a0f317e2055f5220ce4e44da834c3e4e11f0053a5046a00d3?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 items-start mt-5 w-full max-md:max-w-full">
            {statCards.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
          </div>
        </section>
        <section className="flex flex-wrap gap-6 items-start mt-5 w-full max-md:max-w-full">
          <LineChart
            title="Pendapatan vs Operasional"
            labels={chartData.labels}
            datasets={chartData.datasets}
            height={300}
          />
          <LineChart
            title="Harga Komoditas Gula tahun (2023)"
            labels={chartData.labels}
            datasets={chartData.datasets}
            height={300}
          />
          {/* <PlantationAreaMap />
        </section>
        <section className="flex flex-wrap gap-5 items-start mt-5 w-full max-md:max-w-full">
          {/* <DemandMarketChart />
          <BarChart
            title="Jumlah Produksi"
            labels={labelsProduction}
            datasets={datasetProduction}
          />
          <BarChart
            title="Target Produksi"
            labels={labelsProduction}
            datasets={datasetProduction}
          /> */}
          {/* <FertilizerConsumptionChart /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default App;
