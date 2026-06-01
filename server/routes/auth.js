import { Router } from 'express'
import axios from 'axios'
import { setAccessToken } from '../store.js'

const router = Router()


const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const REDIRECT_URI = process.env.REDIRECT_URI
const SCOPES = 'user-top-read user-read-recently-played user-read-private'

router.get('/login', (req, res) => {
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: SCOPES
    })

    res.redirect(`https://accounts.spotify.com/authorize?${params}`)

} )

router.get('/callback', async(req, res)=> {
    const code = req.query.code
    try{
    const response = await axios.post('https://accounts.spotify.com/api/token', {
        grant_type : 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
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
    //Se aloja el token en el store, para ser accedido
    setAccessToken(access_token)

    res.json({ access_token, refresh_token })
    } catch(error){
        //Errores al conectar con Spotify
        console.error(error)
        res.status(500).json({ error: 'Error al obtener el token de Spotify' })
    }
})

export default router