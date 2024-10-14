import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreenServicio from "../screens/MainScreenServicio";
import BuscadorID from "../screens/BuscadorID";
import BuscarPiezas from "../screens/BuscarPiezas";
import AjusteAutomatico from "../screens/AjusteAutomatico";

const Servicio = () => {
  const ServicioScreen = createNativeStackNavigator();
  return (
    <ServicioScreen.Navigator>
      <ServicioScreen.Screen
        name="servicio.main"
        component={MainScreenServicio}
      />
      <ServicioScreen.Screen
        name="servicio.BuscadorID"
        component={BuscadorID}
      />
      <ServicioScreen.Screen
        name="servicio.AjusteAutom"
        component={AjusteAutomatico}
      />
      <ServicioScreen.Screen
        name="servicio.BuscarPiezas"
        component={BuscarPiezas}
      />
    </ServicioScreen.Navigator>
  );
};

export default Servicio;
