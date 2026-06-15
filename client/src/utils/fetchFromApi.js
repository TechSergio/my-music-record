import axios from 'axios'

const urlBase = import.meta.env.VITE_URL_BASE_BACKEND

export default async function fetchFromApi(endpoint){
    const url = urlBase + endpoint

    try{
        const response = await axios.get(url)

        return response.data
    }catch (error){
        console.error(error)
        throw error
    }
} 