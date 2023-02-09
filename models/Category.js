import { Sequelize, DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js"

class Category extends Model {}

// Como primer parametro le tengo que pasar un objeto con los parametros de la tabla.
// Como segundo parametro la conexion.
// Todo los framework ya vienen con esta estructura.

Category.init({
    name: {
        type: Dt.STRING,
        allowNull: false
    },
    description: {
        type: Dt.STRING
    }
}, {
    sequelize: db,
    modelName: "Category"
})


export default Category