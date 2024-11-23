import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({
  title = "Chart Title",
  labels = [],
  datasets = [],
  options = {},
  height = 300,
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
      className="flex overflow-hidden flex-col flex-1 shrink pt-5 pb-1 text-xs bg-white rounded-xl border border-solid basis-10 border-neutral-200 min-w-[240px] text-neutral-500 max-md:max-w-full"
      style={containerStyle}
    >
      <div className="flex flex-col pr-1.5 pl-5 w-full max-md:max-w-full">
        <div className="flex gap-1 items-center self-start text-base font-medium tracking-normal text-stone-900">
          <div className="self-stretch my-auto">{title}</div>
          <img
            loading="lazy"  
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9488b4231f229b936a71eabc22191f9a5608890ef49bbed095b753296fa66fde?placeholderIfAbsent=true&apiKey=19cc7fcb65f54b38a4924bab685353e6"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>
        <div className="mt-4 h-full" style={{ height: `${height}px` }}>
          <Line options={defaultOptions} data={defaultData} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
