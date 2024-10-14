const mongoose = require("mongoose")
const Shema = mongoose, Schema;

// Creación de la estructura de los datos de Casos
const CasoSchema = new Schema ({
    ID: {type: Int, unique: true},
    Hospital: String,
    Contacto: String,
    Telefono: Int,
    Duda: String,
    Checklist: String, //lista es posible? Si no, strings concatenados añadiendo 1. , 2. etc
    AccionServicio: String,
    Comentario: String
}, {
    collection: "Casos"
});

module.exports = mongoose.model("CasoSchema", CasoSchema);