import React, { useEffect, useState } from "react";
import { View, Text, Alert, Flatlist } from "react-native";
import axios from "axios";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

App.get("")

const BuscadorID = () => {
    const [searchQuery, setSearchQuery] = useState("")

    // Mostrar una lista con todos los casos creados
    const [TodosCasos, setTodosCasos] = useState("")
    async function getTodosCasos (){
        axios.get("http://localhost:5001/GetCasos").then(res=> {console.log(res.data)});
        setTodosCasos(res.data.data);
    }

    // Busqueda ID
    function handleChange(query){
        setSearchQuery(query);
        const filtered=TodosCasos.filter(Casos =>
            Casos.ID.includes(query)
        )
        setFilteredCasos(filtered);
    }

    useEffect(() => {
        InsertID();
        getTodosCasos();
    }, []);

    // Tarjetas donde en su interior se mostrará cada caso
    const Tarjetas=({data})=>(
        <view {style = styles.card}> 
            <View style={styles.cardDetails}>
                <text> style={Styles.Hospital}>{data.Hospital} </text>
                <text> style={Styles.Contacto}>{data.Contacto} </text>
                <text> style={Styles.Telefono}>{data.Telefono} </text>
                <text> style={Styles.Duda}>{data.Duda} </text>
                <text> style={Styles.Checklist}>{data.Checklist} </text>
                <text> style={Styles.AccionServicio}>{data.AccionServicio} </text>
                <text> style={Styles.Comentario}>{data.Comentario} </text>
            </View>
         </view>
    )  
 
    return (
        <View>
            <Text> Pagina para el servicio. Se puede buscar a través de la id, el caso creado por el cliente, posdrá
                verse el check-box que ha hecho el cliente hasta ahora y el raw data recogido 
            </Text>

            <view {style = styles.container}> 
                
                // Barra de búsqueda
                <View style={styles.searchBar}>
                    <View style={searchIcon}>
                        <Icon name="buscar" size={18} />
                        <TextInput>
                            style={styles.searchInput}
                            placeholder="Introduce ID a buscar"
                            placeholderTextColor={"#707070"}
                            value={searchQuery}
                            onChangeText={handleChange}
                        </TextInput>
                    </View>
                    <Text style={styles.recordsText}>
                        Total Records {TodosCasos.length}
                    </Text>
                </View>

                // Lista total de casos
                <Flatlist>
                    data={
                        searchQuery.length>0? // Si se ha introducido algo en la SearchBar
                        filtered: TodosCasos
                    };
                    showsVerticalScrollIndicator={false}
                    keyExtractor = {item => item._id}
                    renderItem{({item})=>(<Tarjetas data = {item}/>)}
                </Flatlist>
            </view> 
        </View>
    );
};

const styles = StylesSheet create ({
    // Hay que definir los estilos!
});

export default BuscadorID;