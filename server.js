// For .env variables across all files use the above.
import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import { corsConfig } from './config/cors.js'
import { connectMongoDB } from './config/dbConnection.js'

const app = express()
const PORT = process.env.PORT || 3031

connectMongoDB()

app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

app.get('/ping', (req, res) => res.send('Ping Successfull 😄'))

app.listen(PORT, () =>
  console.log(
    `[⚡️ server]: Server running on port ${PORT} with the end point : http://localhost:${PORT}`,
  ),
)

export default app
