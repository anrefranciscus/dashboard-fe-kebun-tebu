import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartService from "../../service/ChartService";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  title = "Tingkat Kehadiran",
  rawData = [],
  filterKey = "kondisi_tanaman",
  filterOptions = ["Mingguan"],
  labelKey = "status_kehadiran",
  datasetConfigs = [{ label: "Sehat", color: "#65A30D" }, { label: "Tanpa Keterangan", color: "#EF4444" }, { label: "Izin", color: "#EAB308" }],
  options = {},
  containerStyle = {},
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Filter and transform the raw data into chart format
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
    plugins: {
      legend: {
        position: "top",
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
              <select
                className="flex gap-2 items-start self-stretch px-3 py-1.5 my-auto bg-white rounded-md border border-solid border-neutral-200 w-[120px]"
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
          <div className="w-[300px] h-[300px]">
            <Doughnut options={defaultOptions} data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
