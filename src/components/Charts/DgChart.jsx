import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartService from "../../service/ChartService";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DgChart = ({
  title = "Tingkat Kehadiran",
  rawData = [],
  filterKey = "tanggal",
  filterOptions = ["Mingguan", "Bulanan", "Tahunan"],
  datasetConfigs = [
    {
      label: "Hadir",
      data: [70],
      backgroundColor: "#65A30D",
    },
    {
      label: "Tanpa Keterangan",
      data: [15],
      backgroundColor: "#EF4444",
    },
    {
      label: "Izin",
      data: [15],
      backgroundColor: "#EAB308",
    },
  ],
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
      "kategori",
      datasetConfigs
    );
    if (JSON.stringify(transformedData) !== JSON.stringify(chartData)) {
        setChartData(transformedData);
      }
  }, [selectedFilter, rawData, filterKey, datasetConfigs, chartData]);

  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    ...options,
  };

  return (
    <div
      className="flex flex-col grow shrink px-1 min-h-[416px] min-w-[240px] w-[322px]"
      style={containerStyle}
    >
      <div className="flex flex-col justify-center py-5 w-full bg-white rounded-lg border border-solid border-neutral-200 min-h-[416px]">
        <div className="flex flex-col flex-1 justify-center items-center w-full">
          <div className="flex flex-col justify-center items-start py-px max-w-full w-[331px]">
            <div className="flex z-10 gap-2 items-center w-full min-h-[32px]">
              <div className="flex gap-2 items-center self-stretch my-auto text-base font-medium tracking-normal text-stone-900 w-[228px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/952459dc828193bdc94e84b1c493b40ec090558c31f94e3a6c0cca067af2cf4a?placeholderIfAbsent=true&apiKey=ff9887b7aded45699294fba1ce198ffa"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
                <div className="gap-1 self-stretch my-auto">{title}</div>
              </div>
              <div className="flex gap-2 items-start px-3 py-1.5 bg-white rounded-md border border-solid border-neutral-200 w-[120px]">
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
          </div>
          <div className="w-[300px] h-[300px]">
            <Doughnut data={chartData} options={defaultOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DgChart;