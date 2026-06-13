import axios from "axios";
import { getAccessToken } from "../store.js";
import { refreshToken } from "./spotifyAuth.js";

export default async function spotifyGet(url) {
    const token = getAccessToken()
    try {
    const response = await axios.get(url,{
        headers: {
            'Authorization' : 'Bearer ' + token 
        }
    } )

    return response.data

    } catch(error){
        if (error.response.status === 401){
            await refreshToken()
            const newtoken = getAccessToken()
            const response = await axios.get(url, {
                headers: {
                    'Authorization' : 'Bearer ' + newtoken
                }
            })

            const data = response.data

            return data
        }
    }

    
}