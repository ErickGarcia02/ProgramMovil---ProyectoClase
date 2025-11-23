import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../Contexts/ThemeContext";

type Pantalla = "Pedidos" | "Favoritos";

export default function PerfilActividad() {
  const [pantalla, setPantalla] = useState<Pantalla>("Pedidos");
  const { theme } = useTheme();

  const pantallahandlerPedidos = () => {
    setPantalla("Pedidos");
  };
  const pantallahandlerFavoritos = () => {
    setPantalla("Favoritos");
  };

  const pantallaActual = () => {
    if (pantalla === "Pedidos") {
      return (
        <View>
          <Text style={{ color: theme.textinner }}>
            Aquí irían los pedidos más recientes del usuario.
          </Text>
        </View>
      );
    } else if (pantalla === "Favoritos") {
      return (
        <View>
          <Text style={{ color: theme.textinner }}>
            Aquí el usuario podría ver sus productos favoritos y eliminarlos.
          </Text>
        </View>
      );
    }
  };

  return (
    <View
      style={[
        style.container,
        { backgroundColor: theme.background }, 
      ]}
    >
      <View style={[style.container2, { backgroundColor: theme.background }]}>
        <TouchableOpacity
          style={
            pantalla === "Pedidos"
              ? [style.presionado, { borderColor: theme.border , backgroundColor:theme.botonuppercolor}]
              : [style.botonesOpciones, { borderColor: theme.border, backgroundColor:theme.bontonuppercolorpresionado }]
          }
          onPress={pantallahandlerPedidos}
        >
          <Text
            style={[
              pantalla === "Pedidos" ? style.textopresionado : null,
              ,
            ]}
          >
            Pedidos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            pantalla === "Favoritos"
              ? [style.presionado, { borderColor: theme.border , backgroundColor: theme.botonuppercolor}]
              : [style.botonesOpciones, { borderColor: theme.border, backgroundColor: theme.bontonuppercolorpresionado }]
          }
          onPress={pantallahandlerFavoritos}
        >
          <Text
            style={[
              pantalla === "Favoritos" ? style.textopresionado : null,
              ,
            ]}
          >
            Favoritos
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          style.container3,
          { backgroundColor: theme.backgroundinner , borderColor: theme.border },
        ]}
      >
        {pantallaActual()}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  botonesOpciones: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  container3: {
    padding: 20,
    flex: 1,
    maxWidth: "100%",
    minWidth: "100%",
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
  },
  presionado: {
    backgroundColor: "#f6e6fcff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 5,
    elevation: 5,
  },
  textopresionado: {
    fontWeight: "bold",
  },
});
