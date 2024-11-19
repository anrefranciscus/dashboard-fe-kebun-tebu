import apiClient from "../shared/apiClient"



const get =  async () => {
    const response = await apiClient.get()
    return response
}

const SugarcaneService = {
    get
}

export default SugarcaneService