import "./App.css";
import ChartCard from "./components/ChartCard";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
function App() {
  const statCards = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fe0a9b42aba434baa44939c3d16b5ce454c92574c11b9fddc469bb48edb4ce68?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6', value: '109,928', label: 'Jumlah Karyawan', bgColor: 'bg-lime-600' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3cfbcad756bb3949673d3c35949c82390c5dae6ce45e46866356522b34809106?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6', value: '20,000ha', label: 'Luas Lahan', bgColor: 'bg-lime-600' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e13c57dde4b1f7d4b4111c81039cd7c3c0c09682c623525bf9683e7ab8b7fac8?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6', value: '10,000ha', label: 'Luas Kebun', bgColor: 'bg-lime-400' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5646d2c9961f3c1bd241f63057a9e7bf5e6bd3d27546528a5bfc8ba928412f91?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6', value: 'Rp 100M', label: 'Pendapatan per Tahun', bgColor: 'bg-green-300' },
  ];

  const chartCards = [
    { title: 'Tingkat Kehadiran', type: 'attendance' },
    { title: 'Jumlah & Kondisi Kendaraan', type: 'vehicles' },
    { title: 'Harga Gula', type: 'sugarPrice' },
    { title: 'Efisiensi Energi', type: 'energyEfficiency' },
    { title: 'Biaya Produksi', type: 'productionCost' },
  ];

  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <main className="flex flex-col self-center pb-32 mt-5 w-full bg-white max-w-[1380px] max-md:pb-24 max-md:max-w-full">
        <header className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <h1 className="flex-1 shrink gap-1 self-stretch my-auto text-lg font-semibold tracking-normal leading-none whitespace-nowrap min-w-[240px] text-stone-900 max-md:max-w-full">
            Dashboard
          </h1>
          <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
            <select className="flex gap-2 items-start self-stretch px-3 py-1.5 my-auto w-40 bg-white rounded-md border border-solid border-neutral-200">
              <option>Year: 2023</option>
            </select>
            <select className="flex gap-2.5 items-center self-stretch px-4 py-1.5 my-auto text-sm tracking-normal leading-none bg-white rounded border border-solid border-neutral-200 text-stone-900 w-[226px]">
              <option>Sragi, Pekalongan</option>
            </select>
          </div>
        </header>
        <section className="flex flex-wrap gap-5 items-start mt-5 w-full max-md:max-w-full">
          {statCards.map((card, index) => (
            <StatsCard key={index} {...card} />
          ))}
        </section>
        <section className="flex flex-wrap gap-5 items-start mt-5 w-full">
          {chartCards.map((card, index) => (
            <ChartCard key={index} {...card} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
