import React from "react";
import { View, Text } from "react-native";

import {useNavigation} from "@react-navigation/native";

const ResolverAveria = () => {
    return (
        <View>
            <Text> Pagina para el cliente. Dandole aqui se procede a abrir un nuevo caso de avería. 
                Se implementara un check-box para que se pueda saber los pasos que ha realizado el cliente 
                antes de dar con la solución 
            </Text>
            
        </View>
    );
};

export default ResolverAveria;