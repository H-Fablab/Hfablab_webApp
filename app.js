import dotenv from 'dotenv';
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import pagesRoutes from './routes/mainPages.js'
import userRoutes from './routes/user.js'

// Create Express app
const app = express()
app.use(express.static('public'))

const port = process.env.PORT || 3000

// Set up EJS as the view engine
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// Import routes
app.use(pagesRoutes);
app.use("/", userRoutes);


app.use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})

