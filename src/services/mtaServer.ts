import axios from "axios"

export const getMTAStats = async () => {
    try {
        const response = await axios.get('https://mtasa-api.com/servers')
        return response
    } catch (error) {
        throw error
    }
}