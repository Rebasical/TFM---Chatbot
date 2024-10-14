import React from "react";
import { View, Text } from "react-native";
import {createNaticeStackNavigator} from '@react-navigation/native-stack';

import mainScreenCliente from "../screens/mainScreenCliente";
import ResolverAveria from "../screens/ResolverAveria";
import RawData from "../screens/RawData";

const Cliente = () => {
    const clienteScreen = createNaticeStackNavigator();
    return (
        <clienteScreen.Navigator>
            <clienteScreen.Screen name='cliente.main' component={mainScreenCliente} />
            <clienteScreen.Screen name='cliente.ResolverAveria' component={ResolverAveria} />
            <clienteScreen.Screen name='cliente.RawData' component={RawData} />
        </clienteScreen.Navigator>
    );
};

export default Cliente;