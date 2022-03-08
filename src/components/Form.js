import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';

export default function Form() {
    return (
        <View style={styles.viewform}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder='Monto solicitado'
                    keyboardType='numeric'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Interes'
                    keyboardType='numeric'
                    style={[styles.input, styles.inputPorcentage]}
                />
            </View>

            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}

            />

        </View>
    );
}

const styles = StyleSheet.create({
    viewform: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row',



    },
    input: {
        height: 50,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000000',
        paddingHorizontal: 20,
    },
    inputPorcentage: {
        width: '40%',
        marginLeft: 5,

    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,


    },
    inputAndroid: {
        fontSize: 18,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 100,
        color: 'black',
        paddingRight: 30,
        backgroundColor: "white"
    }

});