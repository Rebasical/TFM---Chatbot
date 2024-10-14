import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import {useNavigation} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableHighlight } from "react-native";

const RawData = () => {
    const [Aceptado] = useState("")
    return (
        <View>
            <Text> 
                Esta a punto de recoger todo el raw data del equipo. 
                Por favor acepta los terminos y condiciones sobre la protección de datos 
            </Text>
        
            <StatusBar style="light" />

            <TouchableHighlight>
                underlayColor = {"#09f"}
                onPress = {() => alert (Terminos y condiciones aceptados)}
                <Text style = {{color: "white"}}>
                    Aceptar terminos y condiciones
                </Text>
            </TouchableHighlight>
           
            <TouchableHighlight>
                {Aceptado ? ( //Con este código, solo aparecera el boton si antes se han aceptado las condiciones
                    underlayColor = {"#09f"}
                    onPress = {() => alert (Retrive Raw Data)}
                    <Text style = {{color: "white"}}>
                        Recolectando...
                    </Text>
                ): null}
            </TouchableHighlight>
        </View>
    );
};

export default RawData;