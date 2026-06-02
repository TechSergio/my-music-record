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

export default router