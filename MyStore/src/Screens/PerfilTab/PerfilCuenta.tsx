import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../Contexts/ThemeContext";

type Pantalla = "DatosPersonales" | "Direcciones" | "MetodosDePago";

export default function PerfilCuenta() {
  const [pantalla, setPantalla] = useState<Pantalla>("DatosPersonales");
  const { theme } = useTheme();

  const pantallahandlerDatosPersonales = () => {
    setPantalla("DatosPersonales");
  };
  const pantallahandlerDirecciones = () => {
    setPantalla("Direcciones");
  };
  const pantallahandlerMetodosDePago = () => {
    setPantalla("MetodosDePago");
  };

  const pantallaActual = () => {
    if (pantalla === "DatosPersonales") {
      return (
        <View>
          <Text style={{ color: theme.textinner }}>
            Aquí irían los datos personales del usuario y podría editar algunos
            de sus datos.
          </Text>

          <View style={styles.contenedorbotonesdatospersonales}>
            <TouchableOpacity
              style={[
                styles.botones, 
              ]}
            >
              <Text style={[styles.textbotones]}>
                Editar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (pantalla === "Direcciones") {
      return (
        <View>
          <Text style={{ color: theme.textinner }}>
            Aquí se mostrarían tus direcciones guardadas. Podrías agregar
            nuevas, eliminar y elegir una predeterminada.
          </Text>
          <View style={styles.contenedorbotonesdatospersonales}>
            <TouchableOpacity
              style={[
                styles.botones,
                { borderColor: theme.border },
              ]}
            >
              <Text style={[styles.textbotones]}>
                Agregar dirección
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.botones,
                { borderColor: theme.border },
              ]}
            >
              <Text style={[styles.textbotones]}>
                Eliminar dirección
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.botones,
                { borderColor: theme.border },
              ]}
            >
              <Text style={[styles.textbotones]}>
                Elegir predeterminada
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (pantalla === "MetodosDePago") {
      return (
        <View>
          <Text style={{ color: theme.textinner }}>
            Aquí se mostrarían tus métodos de pago. Podrías agregar nuevos,
            eliminar y elegir uno por defecto.
          </Text>

          <View style={styles.contenedorbotonesdatospersonales}>
            <TouchableOpacity
              style={[
                styles.botones,
                { borderColor: theme.border },
              ]}
            >
              <Text style={[styles.textbotones]}>
                Agregar método de pago
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.botones,
                { borderColor: theme.border },
              ]}
            >
              <Text style={[styles.textbotones]}>
                Eliminar método de pago
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.botones,
                { borderColor: theme.border },
              ]}
            >
              <Text style={[styles.textbotones]}>
                Elegir predeterminado
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* Botones superiores (tabs internos) */}
      <View
        style={[
          styles.container2,
          { backgroundColor: theme.background },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.botonesOpciones,
            {
              backgroundColor:
                pantalla === "DatosPersonales"
                  ? theme.botonuppercolor : theme.bontonuppercolorpresionado,
              borderColor: theme.border,
            },
          ]}
          onPress={pantallahandlerDatosPersonales}
        >
          <Text
            style={[
              styles.textUpper,
              {
                color:
                  pantalla === "DatosPersonales"
                    ? theme.textbottonuppercolor
                    : theme.textbottonuppercolor,
              },
            ]}
          >
            Datos personales
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botonesOpciones,
            {
              backgroundColor:
                pantalla === "Direcciones" ? theme.botonuppercolor : theme.bontonuppercolorpresionado,
              borderColor: theme.border
            },
          ]}
          onPress={pantallahandlerDirecciones}
        >
          <Text
            style={[
              styles.textUpper,
              {
                color:
                  pantalla === "Direcciones"
                    ? theme.textbottonuppercolor
                    : theme.textbottonuppercolor,
              },
            ]}
          >
            Direcciones
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botonesOpciones,
            {
              backgroundColor:
                pantalla === "MetodosDePago"
                  ? theme.botonuppercolor : theme.bontonuppercolorpresionado,
              borderColor: theme.border,
            },
          ]}
          onPress={pantallahandlerMetodosDePago}
        >
          <Text
            style={[
              styles.textUpper,
              {
                color:
                  pantalla === "MetodosDePago"
                    ? theme.textbottonuppercolor
                    : theme.textbottonuppercolor,
              },
            ]}
          >
            Métodos de pago
          </Text>
        </TouchableOpacity>
      </View>

      {/* Contenido interno */}
      <View
        style={[
          styles.container3,
          { backgroundColor: theme.backgroundinner, borderColor: theme.border },
        ]}
      >
        {pantallaActual()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    margin: 5,
  },
  textUpper: {
    fontSize: 14,
    fontWeight: "bold",
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
  contenedorbotonesdatospersonales: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  botones: {
    borderWidth: 0.7,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor:'#dae4ffff'
  },
  textbotones: {
    fontSize: 15,
    fontWeight: "500",
    color:'#0000'
  },
});
