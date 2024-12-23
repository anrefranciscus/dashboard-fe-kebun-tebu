import { useState, useEffect } from "react";
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
import ChartService from "../../service/ChartService";

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
  rawData = [],
  filterKey = "tanggal_tanam",
  filterOptions = [],
  labelKey = "lokasi",
  datasetConfigs = [], // Array konfigurasi dataset
  options = {},
  containerStyle = {},
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
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        ticks: {
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    ...options,
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
      <div className="mt-5 w-full h-[300px]">
        <Bar options={defaultOptions} data={chartData} />
      </div>
    </div>
  );
};

export default BarChart;
