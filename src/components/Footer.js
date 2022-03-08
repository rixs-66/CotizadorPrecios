import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export default function Footer(props) {
    const { Calcular } = props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={Calcular}>
                <Text style={styles.text} >Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        borderRadius: 50,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 12,
        borderRadius: 20,
        width: '70%',

    }

});