import VehiclesChart from './Charts/VehiclesChart';
import SugarPriceChart from './Charts/SugarPriceChart';
import EnergyEfficiencyChart from './Charts/EnergyEfficiencyChart';
import ProductionCostChart from './Charts/ProductionCostChart';
import AttendanceChart from './Charts/AttendanceChart';

const ChartCard = ({ title, type }) => {
  const renderChart = () => {
    switch (type) {
      case 'attendance':
        return <AttendanceChart />;
      case 'vehicles':
        return <VehiclesChart />;
      case 'sugarPrice':
        return <SugarPriceChart />;
      case 'energyEfficiency':
        return <EnergyEfficiencyChart />;
      case 'productionCost':
        return <ProductionCostChart />;
      default:
        return null;
    }
  };

  return (
    <article className="flex overflow-hidden flex-col grow shrink px-5 pt-4 pb-5 bg-white rounded-xl border border-solid border-neutral-200 min-h-[416px] min-w-[240px] w-[404px] max-md:max-w-full">
      <header className="flex gap-2 items-center w-full">
        <h2 className="flex gap-2 items-center self-stretch my-auto text-base font-medium tracking-normal min-w-[240px] text-stone-900 w-[317px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1cf73087260c6faca2f99f117de0cf1fba998879a51e193e12327b71f3b80b?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          {title}
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/667979c1ecf495227aedfb93af009d50b7940f9147177a790b2dfa5dd9484f26?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        </h2>
        <select className="flex gap-2 items-start self-stretch px-3 py-1.5 my-auto bg-white rounded-md border border-solid border-neutral-200 w-[119px]">
          <option>Tahunan</option>
        </select>
      </header>
      {renderChart()}
    </article>
  );
};

export default ChartCard;