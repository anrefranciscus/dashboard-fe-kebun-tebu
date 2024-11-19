import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DemandMarketChart = () => {
  const data = {
    datasets: [{
      data: [100000, 50000],
      backgroundColor: [
        'rgb(132, 204, 22)',
        'rgb(229, 231, 235)',
      ],
      borderColor: [
        'rgb(132, 204, 22)',
        'rgb(229, 231, 235)',
      ],
      borderWidth: 1,
    }],
  };
  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink items-end py-6 pr-11 pl-5 bg-white rounded-xl border border-solid basis-0 border-neutral-200 min-w-[240px] max-md:pr-5">
      <div className="flex gap-1 items-center self-start text-base font-medium tracking-normal text-stone-900">
        <div className="self-stretch my-auto">Demand Market</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e959cb366519857d5f6d690a6505f02d0ff82a9debaafc52ec26747c7edeaf4?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
      </div>
      <div className="mt-6 w-[212px] h-[212px] max-md:mr-1">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex flex-col items-center max-w-full text-center w-[173px] mt-4">
        <div className="text-lg font-semibold tracking-normal leading-none">Jumlah Stock</div>
        <div className="mt-3 text-3xl font-bold tracking-normal leading-none">100,000 ton</div>
        <div className="mt-5 text-sm tracking-normal leading-none">
          <span>dari </span>
          <span className="font-semibold">150,000</span>
          <span> demand market</span>
        </div>
      </div>
    </div>
  );
};

export default DemandMarketChart;