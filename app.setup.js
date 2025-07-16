import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import zod from 'zod'
import { createServer } from 'http' 
import {router} from './routes/index.js'

const app = express()
const server = createServer(app)

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.use( "/api", router)

app.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});
app.use((req, res) => {
  const message = `The requested route ${
    req.originalUrl
  } does not exists for the ${req.method.toLowerCase()} method on this server`;
  throw new NotFoundError(message);
});




export { server, app }; 
