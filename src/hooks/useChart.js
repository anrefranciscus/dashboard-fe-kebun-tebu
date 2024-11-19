import { useState, useEffect } from "react";
import axios from "axios";

const useChart = (apiUrl) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Example: Extracting data for charts
        const labels = data.map((item) => item.lokasi);
        const produksiData = data.map((item) => item.produksi_ton);
        const luasData = data.map((item) => item.luas_hektar);

        setChartData({
          labels,
          datasets: [
            {
              label: "Produksi (Ton)",
              data: produksiData,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "Luas Hektar",
              data: luasData,
              backgroundColor: "rgba(153, 102, 255, 0.6)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1,
            },
          ],
        });

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { chartData, loading, error };
};

export default useChart;
