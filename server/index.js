import express from 'express'
import 'dotenv/config'

// Create an instance of the Express application
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Servidor funcionando`)
})

app.get('/api/status', (req, res) => {
    res.json({
        "status": "ok"
    })
})

app.listen(PORT, () => {
    console.log(`El servidor se ha iniciado en http://localhost:${PORT}`)
})

