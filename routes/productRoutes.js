import express from "express"
import db from "../db/db.js"

export const productRoutes = express.Router()

productRoutes.get("/", (req, res) => {
    const query = "SELECT product.name, product.description,product.stock, product.price, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid"
    db.query(query, (err, result) => {
        if (err) return next(err)
        return res.status(200).send({ message: "Estos son los productos encontrados", success: true, result })
    })
})
productRoutes.get("/:id", (req, res) => {
    const { id } = req.params
    const query = "SELECT product.name, product.description,product.stock, product.price, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid WHERE product.id=?"
    db.query(query, id, (err, result) => {
        if (err) return nextTick(err)
        return res.status(200).send({ message: "Este es el producto encontrado", success: true, result })
    })
})

productRoutes.get("/category/:category", (req, res, next) => {
    // console.log(req.query.category)
    const { category } = req.params
    const query = "SELECT product.name, product.description,product.stock, product.price, category.name AS category FROM product INNER JOIN category ON category.id=product.categoryid WHERE category.name=?"
    db.query(query, category, (err, result) => {
        if (err) return next(err)
        return res.status(200).send({ message: "Este es el producto encontrado", success: true, result })
    })
})

productRoutes.post("/", (req, res) => {
    res.send("crateProduct")
})
productRoutes.put("/", (req, res) => {
    res.send("updateProduct")
})
productRoutes.delete("/:id", (req, res, next) => {
    const { id } = req.params
    const query = "DELETE FROM product"
    db.query(query, id, (err, result) => {
        console.log("🚀 ~ file: productRoutes.js:42 ~ db.query ~ result", result)
        if (err) return next(err)
        res.status(202).send({
            message: "producto eliminado con exito",
            success: true
        })
    })

})