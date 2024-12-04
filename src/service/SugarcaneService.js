// import apiClient from "../shared/apiClient"
import data from "../data/kebun-tebu.json"
const rawData = data;

const get = async () => {
  // Pastikan rawData adalah array
  if (!Array.isArray(rawData)) {
    throw new Error("rawData harus berupa array");
  }

  // Jika rawData berisi data biasa, langsung kembalikan
  const response = await Promise.all(
    rawData.map(async (item) => {
      // Jika item membutuhkan pemrosesan async, tambahkan logika di sini
      return item; // Sesuaikan jika perlu
    })
  );

  return {
    data: response,
  };
};


const getProcessedData = async () => {
    const rawData = (await get()).data;
  
    const labels = rawData.map((item) => item.lokasi);
    const data = rawData.map((item) => item.produksi_ton);
    const dataArea = rawData.map((item) => item.luas_hektar);
  
    return {
      labels,
      datasets: [
        {
          label: "Produksi (Ton)",
          data: data,
          borderColor: "#E2A70C",
          backgroundColor: "#E2A70C",
          borderWidth: 1,
        },
        {
          label: "Luas Hektar",
          data: dataArea,
          backgroundColor: "#3DA60D",
          borderColor: "#3DA60D",
          borderWidth: 1,
        },
      ],
      rawData
    };
}

const SugarcaneService = {
    get,
    getProcessedData
}

export default SugarcaneService