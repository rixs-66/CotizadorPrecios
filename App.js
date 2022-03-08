
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native'
import Form from './src/components/Form';
import colors from './src/utils/colors';
import React, { useState, useEffect } from 'react';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {

  const [capital, setcapital] = useState(null);
  const [interes, setinteres] = useState(null);
  const [meses, setmeses] = useState(null);
  const [Total, setTotal] = useState(null);
  const [error, seterror] = useState("")

  useEffect(() => {
    

      Calcular();
    
  }, [capital, interes, meses]);

  const Calcular = () => {
    reset();
    if (!capital) {
      seterror("Añade la cantidad a solicitar");
    } else if (!interes) {
      seterror("Añade el interes del prestamo");
    } else if (!meses) {
      seterror("Añade El plazo del prestamo")
    } else {

      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      const pago = fee * meses;
      setTotal({
        fee: fee.toFixed(2),
        TotalPago: pago.toFixed(2)
      });
    }
  }

  const reset = () => {
    seterror("");
    setTotal(null);
  }


  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.background} />
        <Text style={styles.tittleApp}>Cotizador de prestamos</Text>
        <Form
          setcapital={setcapital}
          setinteres={setinteres}
          setmeses={setmeses} />
      </SafeAreaView>

      <Result capital={capital}
        interes={interes}
        meses={meses}
        total={Total}
        error={error} />

      <Footer Calcular={Calcular} />
    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    height: 240,
    alignItems: 'center'
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  background: {
    position: 'absolute',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,

  },

})