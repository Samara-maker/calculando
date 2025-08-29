import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/style";

export default function CalculadoraView() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
    } else {
      setResultado(`Resultado: ${n1 + n2}`);
    }
  };

  const limpar = () => {
    setNumero1("");
    setNumero2("");
    setResultado("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Soma</Text>

      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoCalcular} onPress={calcular}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLimpar} onPress={limpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}
