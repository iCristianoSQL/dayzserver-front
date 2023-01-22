import axios from "axios"
import { IMTAServerResponse } from "../components/CardView/types";

export const getMTAStats = async () => {
    try {
        const response = await axios.get('https://mtasa-api.com/servers');
        const findServer = response?.data.find(
            (server: IMTAServerResponse) =>
              server.ip === "66.70.238.46" && server.port === 22613
          );
        return findServer;
    } catch (error) {
        throw error
    }
}