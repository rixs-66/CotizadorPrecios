import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native'
import Form from './src/components/Form';
import colors from './src/utils/colors';

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.SafeArea}>
        <View  style={styles.background}/>

        
        <Text style={styles.tittleApp}>Cotizador de prestamos</Text>
        <Form />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
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
  background:{
    position:'absolute',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    
  }
})