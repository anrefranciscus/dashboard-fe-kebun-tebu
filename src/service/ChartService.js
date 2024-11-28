const filterDataByYear = (rawData, filterKey, filterYear) => {
  return rawData.filter((item) => {
    const filterValue = new Date(item[filterKey]).getFullYear();
    return filterValue.toString() === filterYear;
  });
};

const transformDataForChart = (filteredData, labelKey, datasetConfigs) => {
  return {
    labels: filteredData.map((item) => item[labelKey]),
    datasets: datasetConfigs.map((config) => ({
      label: config.label,
      data: filteredData.map((item) => parseFloat(item[config.valueKey])),
      backgroundColor: config.backgroundColor,
      borderColor: config.borderColor,
      borderWidth: config.borderWidth || 1, // Default border width
    })),
  };
};

const ChartService = {
  filterDataByYear,
  transformDataForChart,
};

export default ChartService;
