import express from "express"
import ENV  from "./lib/env.js"
const app = express()

console.log(ENV.PORT)
console.log(ENV.DB_URL)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Running backend succesful"})
})

app.listen(ENV.PORT,()=>{
    console.log("Server started at port 3000")
})