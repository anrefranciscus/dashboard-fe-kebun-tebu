import { Bar } from "react-chartjs-2";
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

const BarChart = ({
  title = "Chart Title",
  labels = [],
  datasets = [],
  options = {},
  containerStyle = {},
}) => {
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "K";
          },
        },
      },
    },
    ...options,
  };

  const defaultData = {
    labels,
    datasets,
  };

  return (
    <div
      className="flex overflow-hidden flex-col flex-1 shrink items-end px-5 pt-4 pb-14 bg-white rounded-xl border border-solid basis-6 border-neutral-200 min-w-[240px]"
      style={containerStyle}
    >
      <div className="flex gap-5 justify-between self-stretch w-full">
        <div className="flex gap-1 items-center my-auto text-base font-medium tracking-normal text-stone-900">
          <div className="self-stretch my-auto">{title}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d84f3067bc0fe6bc73ffb22c626c3620534fffcee15ae7de17c2235cbdb5690?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>
        <div className="flex gap-2 items-start px-3 py-1.5 bg-white rounded-md border border-solid border-neutral-200">
          <div className="flex-1 shrink gap-1 self-stretch text-sm font-medium tracking-normal leading-none whitespace-nowrap text-stone-900">
            Tahun
          </div>
          <div className="flex gap-2.5 items-center py-0.5 w-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3acafe808fca4c4877e6f3638196ebc1cee9d63f041f47ea946b1cce9451ba31?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
              alt=""
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 w-full h-[300px]">
        <Bar options={defaultOptions} data={defaultData} />
      </div>
    </div>
  );
};

export default BarChart;
