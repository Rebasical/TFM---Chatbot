import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./src/Tabs";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
App.use(express.json());

// Base de Datos: MongoDB
const Mongoose = require("mongoose");
const MongoURI = "mongodb+srv://rebasical:rebasical1@casos.flc6b.mongodb.net/?retryWrites=true&w=majority&appName=Casos";
Mongoose
  .connect(MongoURI)
  .then(()=> {console.log("Database Connected");})
  .catch((e)=>{console.log(e)});

// Creación de la API: Caso
require("./Casos");
const CasoCliente = mongoose.model("Casos");

App.post("/CasoCliente", async(req, res)=> {
  const { ID, Hospital, Contacto, Telefono, Duda, Checklist, AccionServicio, Comentario} = req.body;
  
  try {
    await CasoCliente.create({
      ID: ID,
      Hospital: Hospital,
      Contacto: Contacto,
      Telefono: Telefono,
      Duda: Duda,
      Checklist: Checklist,
      AccionServicio: AccionServicio,
      Comentario: Comentario,
    });
    res.send({status: "ok", data: "Caso creado"})
  } catch (error) {}
});




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return <Tabs />;
}
