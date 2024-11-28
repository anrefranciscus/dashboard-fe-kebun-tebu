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
import { useEffect, useState } from "react";
import ChartService from "../../service/ChartService";

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
  rawData = [],
  filterKey = "tanggal_tanam",
  filterOptions = [],
  labelKey = "lokasi",
  datasetConfigs = [], // Array konfigurasi dataset
  options = {},
  containerStyle = {},
  height = 300,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const filteredData = ChartService.filterDataByYear(
      rawData,
      filterKey,
      selectedFilter
    );
    const transformedData = ChartService.transformDataForChart(
      filteredData,
      labelKey,
      datasetConfigs
    );
    setChartData(transformedData);
  }, [selectedFilter, rawData, filterKey, labelKey, datasetConfigs]);

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 12, // Adjust font size for better responsiveness
          },
        },
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
          <div className="flex gap-2 items-start px-3 py-1.5 bg-white rounded-md border border-solid border-neutral-200">
            <select
              className="flex-1 shrink gap-1 self-stretch text-sm font-medium tracking-normal leading-none whitespace-nowrap text-stone-900"
              onChange={(e) => setSelectedFilter(e.target.value)}
              value={selectedFilter}
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 h-full" style={{ height: `${height}px` }}>
          <Line options={defaultOptions} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
