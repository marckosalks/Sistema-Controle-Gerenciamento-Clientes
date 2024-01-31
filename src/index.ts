import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3000, ()=>{
  console.log("Bololo ha ha, bololo ha ha ha ha! ")
})
