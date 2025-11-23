import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/Navigator/StackNavigator";
import { navigationRef } from "./src/Navigator/NavigationService";
import { AuthProvider } from "./src/Contexts/AuthContext";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { ThemeProvider } from "./src/Contexts/ThemeContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <NavigationContainer ref={navigationRef}>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}
