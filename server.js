import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"

const app = express()

// middleware incorporado o integracion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)

app.listen(8080, () => {
    console.log("Servidor ok")
})

// middleware a nivel de la aplicacion
// app.use(function(req, res, next) {
//    console.log(Date())
//    next()
// })
/*
const method = (req, res, next) => {
    console.log("🚀 ~ file: server.js:15 ~ method ~ req", req.method)
    next()
}
app.use(method)


// CRUD
// create
app.post("/", (req, rest) => {
        rest.send("post")
    })
    // read
app.get("/", (req, rest) => {
        rest.send("getAll")
    })
    // read by id
app.get("/:id", (req, rest) => {
        rest.send("getById")
    })
    // update
app.put("/", (req, rest) => {
        rest.send("update")
    })
    // delete
app.delete("/", (req, rest) => {
    rest.send("delete")
})


app.listen(8080, () => {
    console.log("servidor ok")
})
*/