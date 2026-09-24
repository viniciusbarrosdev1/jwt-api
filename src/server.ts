import express from "express"
import "dotenv/config"
import { json } from "zod"

const app = express()

app.use(express.json())

app.get("/", (_req, res) => {
  res.json({message: "API rodando"})
})

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

