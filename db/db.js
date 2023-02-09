import { Sequelize } from "sequelize";

//const db= new Sequelize('database', 'username', 'password', {
//    host: 'localhost',
//    dialect: ""
//    port:
//    })

const db = new Sequelize('upsequelize', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    port: 3306,
})

try {
    await db.authenticate();
    console.log('La conexion es exitosa.');
} catch (error) {
    console.error('No hay conexion a la base de datos', error);
}

export default db