import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function AttendanceChart() {
  const data = {
    datasets: [{
      data: [70, 15, 15],
      backgroundColor: [
        '#65a30d',
        '#ef4444',
        '#eab308',
      ],
      borderWidth: 0
    }]
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <article className="flex flex-col grow shrink px-1 min-h-[416px] min-w-[240px] w-[322px]">
      <div className="flex flex-col justify-center py-5 w-full bg-white rounded-lg border border-solid border-neutral-200 min-h-[416px]">
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          <h2 className="text-base font-medium">Tingkat Kehadiran</h2>
          <div className="relative w-[314px] h-[314px]">
            <Doughnut data={data} options={options} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-semibold">109,928</div>
              <div className="text-sm">Total SDM</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}