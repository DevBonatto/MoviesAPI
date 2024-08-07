const express = require('express')
const app = express()
const PORT = 3000

const routes = require("./routes")

app.use(express.json())
app.use(routes) 

app.listen(PORT, () => {
    console.log(`
      Server listening on port: ${PORT}
      Acess here: http://localhost:3000/
      `)
})