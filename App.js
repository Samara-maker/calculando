import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CalculadoraView from './compo/calculando';
import { View } from 'react-native';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <CalculadoraView />
      <StatusBar style="auto" />
    </View>
  );
}
