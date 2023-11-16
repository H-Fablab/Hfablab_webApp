import dotenv from 'dotenv/config';
import cors from "cors"
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import pagesRoutes from './routes/mainPages.js'
import userRoutes from './routes/user.js'
import newsletterRoute from "./routes/newsletter.js"
import contactus from "./routes/contactus.js"
import inKindDonnation from './routes/in-kind-donnation.js';
import equipementBooking from './routes/equipement-booking.js';

// Create Express app
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use(express.static('public'))

const port = process.env.PORT || 3000

// Set up EJS as the view engine
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders:'Content-Type, Accepts, Authorization'
}));
// Imported routes
app.use(pagesRoutes);
app.use(userRoutes);
app.use(newsletterRoute)
app.use(contactus)
app.use(inKindDonnation)
app.use(equipementBooking)

app.use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})

