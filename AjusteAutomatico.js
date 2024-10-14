import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const Hospital = [
    { label: 'Hospital del Mar', value: '1' },
    { label: 'Fremap Sevilla', value: '2' },
    { label: 'Hospital Lozano Blesa', value: '3' },
    { label: 'Hospital Clinic', value: '4' },
    { label: 'Hospital Vall de Hebron', value: '5' },
    { label: 'Hospital 12 de Octubre', value: '6' },
    { label: 'Hospital Fundación Jimenez Diaz', value: '7' },
    { label: 'Hospital Virgen del Rocio', value: '8' },
  ];

const Equipo = [ //Upgrade: Por cada hospital mostrar solo un equipo. AKA, los equipos han de estar asignados a un hospital en concreto
    { label: 'Cobas Pure S/N 2342-32', value: '1' },
    { label: 'Cobas Pure S/N 4563-98', value: '2' },
    { label: 'Cobas Pure S/N 1353-75', value: '3' },
    { label: 'Cobas Pure S/N 8793-54', value: '4' },
    { label: 'Cobas Pure S/N 4578-49', value: '5' },
    { label: 'Cobas Pure S/N 1245-80', value: '6' },
    { label: 'Cobas Pure S/N 7593-25', value: '7' },
    { label: 'Cobas Pure S/N 7844-34', value: '8' },
  ];

const Ajuste = [
    { label: 'Ajuste pipeta', value: '1' },
    { label: 'Reset lector del código de barras', value: '2' },
    { label: 'Aclimatización de la nevera', value: '3' },
    { label: 'Reseteo del equipo', value: '4' },
    { label: 'Ajuste de la bomba de entrada de agua', value: '5' },
    { label: 'Actualización inventario', value: '6' },
    { label: 'Mantenimiento inmunología', value: '7' },
    { label: 'Mantenimiento bioquimica', value: '8' },
  ];

const AjusteAutomatico = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View>
            <Text> En esta pagina, se podrá enviar ajustes y mantenimientos automáticos con la finalidad de 
                resolver la avería remotamente 
            </Text>

            <View style={styles.container}>
                <View>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Hospital}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Indica Hospital / Laboratorio' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />

                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Equipo}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Indica equipo (w/ S/N)' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />

                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Ajuste}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Indica mantenimiento / ajuste a realizar' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 16,
      justifyContent:"center",
      alignContent: "Center",
    },

    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginBottom: 10,
    },

    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default AjusteAutomatico;