import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
    const { setcapital, setinteres, setmeses } = props;
    return (
        <View style={styles.viewform}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder='Monto solicitado'
                    keyboardType='numeric'
                    style={styles.input}
                    onChange={event => setcapital(event.nativeEvent.text)}
                />
                <TextInput
                    placeholder='Interes %'
                    keyboardType='numeric'
                    style={[styles.input, styles.inputPorcentage]}
                    onChange={e => setinteres(e.nativeEvent.text)}
                />
            </View>

            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setmeses(value)}
                placeholder={{
                    label: 'Selecciona el plazo',
                    value: null,
                }
                }
                items={[
                    { label: '3 meses', value: 3 },
                    { label: '6 meses', value: 6 },
                    { label: '9 meses', value: 9 },
                    { label: '12 meses', value: 12 },
                    { label: '24 meses', value: 24 },

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
        width: '100%',
        fontSize: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 80,
        color: '#ffffff',
        paddingRight: 30,
        backgroundColor: "white"


    },
    inputAndroid: {
        width: '100%',
        fontSize: 0,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 200,
        color: '#000000',
        paddingRight: 30,
        backgroundColor: "white"
    }

});