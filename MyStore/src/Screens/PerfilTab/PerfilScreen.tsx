import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { RootStackParamListPerfil } from "../../Navigator/PerfilStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../Contexts/AuthContext";
import { useTheme } from "../../Contexts/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamListPerfil, "Perfil">;

export default function PerfilScreen({ navigation }: Props) {
  const { logout } = useAuth();
  const { theme } = useTheme(); // 👈 usamos el theme

  const HandleNavigateActividad = () => {
    navigation.navigate("Actividad");
  };

  const HandleNavigateConfiguracion = () => {
    navigation.navigate("Configuracion");
  };

  const HandleNavigateCuenta = () => {
    navigation.navigate("Cuenta");
  };

  const HandleNavigateSoporte = () => {
    navigation.navigate("Soporte");
  };

  const HandleLogout = () => {
    logout();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background }, // 👈 fondo según tema
      ]}
    >
      {/* Cuenta */}
      <TouchableOpacity
        style={[
          styles.caja,
          { backgroundColor: theme.card, borderColor: theme.border }, // 👈 card tematizada
        ]}
        onPress={HandleNavigateCuenta}
      >
        <Text style={[styles.texto, { color: theme.text }]}>Cuenta</Text>
        <Image
          source={require("../../../assets/usuario.png")}
          resizeMode="contain"
          style={styles.imagen}
        />
      </TouchableOpacity>

      {/* Actividad */}
      <TouchableOpacity
        style={[
          styles.caja,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        onPress={HandleNavigateActividad}
      >
        <Text style={[styles.texto, { color: theme.text }]}>Actividad</Text>
        <Image
          source={require("../../../assets/Actividad.png")}
          resizeMode="contain"
          style={styles.imagen}
        />
      </TouchableOpacity>

      {/* Configuración */}
      <TouchableOpacity
        style={[
          styles.caja,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        onPress={HandleNavigateConfiguracion}
      >
        <Text style={[styles.texto, { color: theme.text }]}>
          Configuración
        </Text>
        <Image
          source={require("../../../assets/configuracion.png")}
          resizeMode="contain"
          style={styles.imagen}
        />
      </TouchableOpacity>

      {/* Soporte */}
      <TouchableOpacity
        style={[
          styles.caja,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        onPress={HandleNavigateSoporte}
      >
        <Text style={[styles.texto, { color: theme.text }]}>Soporte</Text>
        <Image
          source={require("../../../assets/soporte.png")}
          resizeMode="contain"
          style={styles.imagen}
        />
      </TouchableOpacity>

      {/* Cerrar sesión */}
      <TouchableOpacity
        style={[
          styles.caja,
          { backgroundColor: theme.card, borderColor: theme.border },
        ]}
        onPress={HandleLogout}
      >
        <Text style={[styles.texto, { color: theme.text }]}>
          Cerrar sesión
        </Text>
        <Image
          source={require("../../../assets/sesion.png")}
          resizeMode="contain"
          style={styles.imagen}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    paddingTop: 100,
  },
  caja: {
    borderRadius: 15,
    borderWidth: 0.7,
    padding: 15,
    minWidth: 160,
    maxWidth: 190,
    maxHeight: 150,
    minHeight: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    elevation: 3,
  },
  imagen: {
    height: 60,
    width: 60,
    margin: 10,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
});
