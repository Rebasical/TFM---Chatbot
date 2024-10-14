import React from "react";
import { View, Text } from "react-native";

import {useNavigation} from "@react-navigation/native";


const MainScreenCliente = () => {
    const Navigation = useNavigation();
    return (
        <View>
            <Text> 
                Pagina para el cliente.  
            </Text>

            <Button> 
                title="Retrive Raw Data" 
                onPress={() => Navigation.navigate("cliente.RawData")} 
            </Button>

            <Button> 
                title="Resolver Averia" 
                onPress={() => Navigation.navigate("cliente.ResolverAveria")} 
            </Button>
            
        </View>
    );
};

export default MainScreenCliente; 