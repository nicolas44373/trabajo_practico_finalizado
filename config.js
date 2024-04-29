const mongoose = require('mongoose');

async function dbconnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/users_prueba', {
        });
        console.log("Conexion correcta");
    } catch (error) {
        console.error("Error de conexion", error);
    }
}

module.exports = dbconnect;