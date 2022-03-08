import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export default function Result(props) {
    const { capital, interes, meses, total, error } = props;
    
    
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumen</Text>
                    <DataResult title="Cantidad solicitada" value={` $${capital} Mxn`} />
                    <DataResult title="Interes %" value={` ${interes} %`} />
                    <DataResult title="Plazo:" value={` ${meses} Meses`} />
                    <DataResult title="Pago mensual:" value={` $${total.fee} Mxn`} />
                    <DataResult title="Total Pago" value={` $${total.TotalPago} Mxn`} />
                </View>
            )}
            <View><Text style={styles.error}>{error}</Text></View>



        </View>
    )
}

function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text style={styles.text}>{title}</Text>
            <Text >{value}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'roboto',
    },
    content: {

        marginHorizontal: 40,

    },
    boxResult: {
        padding: 0,



    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,


    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'black'
    },
    text: {
        color: colors.PRIMARY_COLOR_DARK,
        fontWeight: 'bold'
    }

})