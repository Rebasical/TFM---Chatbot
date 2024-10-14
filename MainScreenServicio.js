import React from "react";
import { View, Text, Button } from "react-native";

import {useNavigation} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainScreenServicio = () => {
    const Navigation = useNavigation();
    return (
        <View>
            <Text> 
                Pagina para el servicio.  
            </Text>

            <Button> 
                title="Buscador ID" 
                onPress={() => Navigation.navigate("servicio.BuscadorID")} 
            </Button>

            <Button> 
                title="Ajuste Automatico" 
                onPress={() => Navigation.navigate("servicio.AjusteAutom")} 
            </Button>

            <Button> 
                title="Buscador pieza" 
                onPress={() => Navigation.navigate("servicio.BuscarPiezas")} 
            </Button>
            
        </View>
    );
};

export default MainScreenServicio; 