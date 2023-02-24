import { DataTypes as Dt, Model } from "sequelize";
import db from "../db/db.js"

class Category extends Model {}

// Como primer parametro le tengo que pasar un objeto con los parametros de la tabla.
// Como segundo parametro la conexion.
// Todo los framework ya vienen con esta estructura.

Category.init({
        name: {
            type: Dt.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: ["[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$", 'i'],
                len: [2, 50],
            }
        },
    }, {
        sequelize: db,
        modelName: "Category"
    })
    // console.log(Category === db.models.Category);

export default Category