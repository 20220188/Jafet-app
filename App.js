import { StatusBar, Alert } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Test from './src/components/Test'
import Test2 from './src/components/Test2'

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma);
  };

  const restar = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resta);
  };

  const multiplicar = () => {
    let producto = parseFloat(numero1) * parseFloat(numero2);
    setResultado(producto);
  };

  const dividir = () => {
    let dividendo = parseFloat(numero1) / parseFloat(numero2);
    setResultado(dividendo);
  };

  const clean = () => {
    setNumero1(0);
    setNumero2(0);
    setResultado(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textos}>Sumar numeros</Text>

      <Text style={styles.textos}>Numero 1</Text>
      <Test
        textPlaceHolder='Numero 1'
        keyboardType='number-pad'
        valorNumero={numero1}
        valorSetNumero={setNumero1}
      />

      <Text style={styles.textos}>Numero 2</Text>
      <Test
        style={styles.input}
        textPlaceHolder='Numero 2'
        keyboardType='number-pad'
        valorNumero={numero2}
        valorSetNumero={setNumero2}
      />

      <Test2
        texto="+"
        funcion={sumar}
        color='green'
      />
      <Test2
        texto="–"
        funcion={restar}
        color='blue'
      />

      <Test2
        texto="*"
        funcion={multiplicar}
        color='orange'
      />
      <Test2
        texto="/"
        funcion={dividir}
        color='pink'
      />

      <Text style={styles.textos}>El valor numero 1: {numero1}</Text>

      <Text style={styles.textos}>El valor numero 2: {numero2}</Text>

      <Text style={styles.textos}>El resultado es: {resultado}</Text>

      <StatusBar style="auto" />
      <Test2
        texto="Limpiar"
        funcion={clean}
        color='black'
      />
    </View>
  );
}


/*
Estilos a partir de acá, no hay código.
*/


//Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCE6F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  buttons1: {
    width: 100,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -100,
  },

  buttons2: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    marginTop: -40,
  },

  buttons3: {
    width: 100,
    height: 40,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    marginTop: 10,
  },

  buttons4: {
    width: 100,
    height: 40,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -100,
    marginTop: -40,
  },

  buttons5: {
    width: 100,
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textos: {
    fontSize: 25,
  },
});
