import { Router } from 'express'
import { getAccessToken } from '../store.js'
import axios from 'axios'

const router = Router()

router.get('/top-artists', async(req, res) => {
    const token = getAccessToken()

    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const data = response.data

        return res.json(data)

    } catch(error){
        //Error al obtener artistas
        console.error(error)
        res.status(500).json({ error: 'Error al obtener artistas' })
    }
})

router.get('/top-tracks', async(req, res) => {
    const token = getAccessToken()

    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const data = response.data
        return res.json(data)


    } catch(error){
        console.error(error)
        res.status(500).json({ error: 'Error al obtener musicas top'})
    }
} )

router.get('/recently-played', async(req, res) => {
    const token = getAccessToken()

    try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played',{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const data = response.data
        return res.json(data)


    }catch(error){
        console.error(error)
        res.status(500).json({ error : 'Error al obtener playlist recientes'})
    }
})

export default router