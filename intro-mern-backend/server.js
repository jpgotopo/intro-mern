require('dotenv').config()


const express=require('express')

const app = express()
const port = 8080


app.listen(port, () => console.log(`listen on ${port}`))

//https://youtu.be/u7YtoQ6oQYw?list=PLkr7dGY4D2sOFts538pghxWaabulH2kMU&t=333