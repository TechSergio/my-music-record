import { Router } from 'express'
import spotifyGet from '../utils/spotifyRequest.js'

const router = Router()

router.get('/top-artists', async(req, res) => {

    const timeRange = req.query.time_range || 'medium_term'

    try {
        const data = await spotifyGet(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`)
        return res.json(data)

    } catch(error){
        console.error(error)
        res.status(500).json({ error: 'Error al obtener artistas' })
    }
})

router.get('/top-tracks', async(req, res) => {

    try {
        const data = await spotifyGet('https://api.spotify.com/v1/me/top/tracks')
        return res.json(data)

    } catch(error){
        console.error(error)
        res.status(500).json({ error: 'Error al obtener musicas top'})
    }
} )

router.get('/recently-played', async(req, res) => {

    try {
        const data = await spotifyGet('https://api.spotify.com/v1/me/player/recently-played')
        return res.json(data)
    }catch(error){
        console.error(error)
        res.status(500).json({ error : 'Error al obtener playlist recientes'})
    }
})

export default router