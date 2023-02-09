import express from "express"
import morgan from "morgan"
import routes from "./routes/index.js"
import db from "./db/db.js"
import { Category, Product, User } from "./models/index.js"

const app = express()

// Middleware incorporado o de integracion
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware a nivel de la aplicacion.
// Middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routes)

await db.sync({ force: false }).then(() => {
    app.listen(8080, () => {
        console.log("Servidor ok")
    })
})