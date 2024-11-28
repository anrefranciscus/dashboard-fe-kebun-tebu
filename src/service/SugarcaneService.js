import apiClient from "../shared/apiClient"



const get =  async () => {
    const response = await apiClient.get()
    return response
}


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