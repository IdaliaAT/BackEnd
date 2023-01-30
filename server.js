import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

// Tengo que hacer esto porque estoy trabajando con el type: module
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", (socket) => {
    console.log("Hola", socket.id)

    socket.emit("saludo", "Hola como estas? Soy el servidor")
    socket.on("respuesta", data =>{
        console.log("🚀 ~ file: server.js:26 ~ io.on ~ data", data)
    })

})



httpServer.listen(3000, () => console.log("Servidor ok"))