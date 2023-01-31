import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import db from "./db/db.js"

const app = express()

// Middleware incorporado o de integracion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware a nivel de la aplicacion.
// Middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)

//app.use(function(req, res, next) {
//    console.log(Date())
//    next()
//})

//const method = (req, res, next) => {
//    console.log("🚀 ~ file: server.js:18 ~ method ~ req", req.method)
//    next()
//}

//app.use(method)

//CRUD
// Create
// Middleware a nivel de ruta
/*
app.post("/", isUser, (req, res) => {
        res.send("post")
    })
    // Read
app.get("/", (req, res) => {
        res.send("getAll")
    })
    // Read by Id
app.get("/", (req, res) => {
    res.send("getById")
})
app.use(isUser)

// Updte
app.put("/", (req, res) => {
        res.send("update")
    })
    // Delete
app.delete("/", (req, res) => {
    res.send("delete")
})
*/
app.listen(8080, () => {
    console.log("Servidor ok")
})