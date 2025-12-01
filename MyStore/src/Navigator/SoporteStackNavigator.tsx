import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PerfilSoporte from "../Screens/PerfilTab/PerfilSoporte";
import Soportechild from "../Screens/PerfilTab/PerfilSoporteChild";

export type RootStackParamListSoporte = {
Soporte: undefined;
SoporteChild: {categoria: string};
};
const Stack = createNativeStackNavigator<RootStackParamListSoporte>();

export default function SoporteStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Soporte"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Soporte" component={PerfilSoporte}  />
      <Stack.Screen name="SoporteChild" component={Soportechild} />

    </Stack.Navigator>
  );
}
