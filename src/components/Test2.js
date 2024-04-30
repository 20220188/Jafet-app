import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Test2({ texto, funcion, color }) {
  const combinar = StyleSheet.compose(
    styles.btn,
    { backgroundColor: color }
  );

  return (
    <TouchableOpacity
      style={combinar}
      onPress={funcion}
    >
      <Text style={styles.text}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    width: 100,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: '900',
    color: 'white',
  },
});
