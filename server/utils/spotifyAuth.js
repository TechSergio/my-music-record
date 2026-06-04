import { getRefreshToken, setRefreshToken, setAccessToken } from "../store.js";


import axios from "axios";
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID


/**
 * Refresca el access token, utilizando el token en el store.
 * Actualiza el store con accestoken y refreshToken 
 */
export async function refreshToken(){
    const token = getRefreshToken()
    try {
         const response = await axios.post('https://accounts.spotify.com/api/token', {
        grant_type : 'refresh_token',
        refresh_token : token,
        client_id: CLIENT_ID,
    }, {
        // Spotify requiere las credenciales en formato Base64: "clientId:clientSecret"
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(
                process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
            ).toString('base64')
        }
    })

    const { access_token, refresh_token } = response.data
    // Spotify puede devolver un nuevo refresh_token, si viene lo actualizamos

    setRefreshToken(refresh_token)
    setAccessToken(access_token)
    } catch (error) {
        console.error(error)
    }
   


}
