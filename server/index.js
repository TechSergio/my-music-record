import express from 'express'
import 'dotenv/config'
import authRouter from './routes/auth.js'
// Create an instance of the Express application
const app = express()
const PORT = 3000

app.use('/auth', authRouter)

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




