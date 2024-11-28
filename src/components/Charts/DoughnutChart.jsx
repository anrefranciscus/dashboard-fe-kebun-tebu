import { useState, useEffect } from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  title = "Chart Title",
  rawData = [],
  filterKey = "tanggal_tanam",
  filterOptions = [],
  labelKey = "lokasi",
  valueKey = "produksi_ton",
  options = {},
  containerStyle = {},
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter data based on the selected filter
    const dataForFilter = rawData.filter((item) => {
      const filterValue = new Date(item[filterKey]).getFullYear();
      return filterValue.toString() === selectedFilter;
    });
    setFilteredData(dataForFilter);
  }, [selectedFilter, rawData, filterKey]);

  // Transform filtered data into chart.js format
  const chartLabels = filteredData.map((item) => item[labelKey]);
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Produksi (ton)",
        data: filteredData.map((item) => parseFloat(item[valueKey])),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 0,
      },
    ],
  };

  const defaultOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: "false",
      },
      title: {
        display: true,
        text: title,
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
        <Doughnut options={defaultOptions} data={chartData} />
      </div>
    </div>
  );
};

export default DoughnutChart;
