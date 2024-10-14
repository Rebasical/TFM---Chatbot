import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import {useNavigation} from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const BuscarPiezas = () => {
    const [PiezaBuscar, setPiezaBuscar] = useState("") 
    const OpenImagenLibrary = async () => {
        const {Response} = await ImagePicker.requestCameraPermissionsAsync();

        if (Response !== "granted"){
            alert("Se necesita acceder a la galería para poder utilizar este feature");
        }
        if (Response === "granted"){
            await ImagePicker.launchImageLibraryAsync({
                mediaType: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true, //Para poder recortar la imágen
            });

            console.log(Response) //Para poder observar los datos de la imágen subida a través de la terminal
            
            if(!Response.cancelled){
                setPiezaBuscar(Response.uri)
            }
        }
    };

    const UploadImage = () => {
        console.log(PiezaBuscar);
    };

    return (
        <View style={StyleSheet.container}> 
            <Text> A través de la foto adjuntada, se mostrará la pieza y se indicará su referencia para poder pedirla. 
                Se puede añadir una breve descripcion para asegurarse que la pieza que se muestra es la que queremos 
            </Text>

            <View> 
                <TouchableOpacity onPress={OpenImagenLibrary} style={styles.upload}> 
                    <Text style={{textAlign: "center"}}> 
                        Adjunta foto de la pieza
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        // Insertar código de búsqueda de la imágen en la base de datos y devolver: la foto guardada en la base de datos, su referencia y datos genéricos de la misma
        // Como plus, se podría indicar el paso a paso para colocar la pieza

        // const PiezaEncontrada = await Catalogo.findOne({setPiezaBuscar:PiezasCatalogo});
        if(PiezaEncontrada){
            <view {style = styles.card}> 
                <image source={{uri:""}} style={styles.image} /> 
                <View style={styles.cardDetails}>
                    <text> style={Styles.Imagen}>{Casos.Hospital} </text>
                    <text> style={Styles.Referencia}>{Casos.Contacto} </text>
                </View>
            </view>   
        } else {
            Alert.alert("No se encontro ID");
        }
    );
};

const styles = StylesSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },

    upload:{
        heigh: 200,
        width: 200,
        borderRadius: 200 / 2,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderWith: 1,
    },
});

export default BuscarPiezas;