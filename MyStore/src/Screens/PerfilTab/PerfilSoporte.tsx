import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "../../Contexts/ThemeContext";
import { RootStackParamListSoporte } from "../../Navigator/SoporteStackNavigator";

type Props = NativeStackScreenProps<RootStackParamListSoporte, "Soporte">;

export default function PerfilSoporte({ navigation }: Props) {
const { theme } = useTheme();

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Cuenta */}
        <TouchableOpacity
          style={[
            styles.caja,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Cuenta'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Cuenta y perfil
          </Text>
          <Image
            source={require("../../../assets/Soporte_cuentayperfil.png")}
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
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Pedidos'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>Pedidos</Text>
          <Image
            source={require("../../../assets/Soporte_pedidos.png")}
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
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'MetodosDePago'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Metodos de pago
          </Text>
          <Image
            source={require("../../../assets/Soporte_metodosdepago.png")}
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
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Envios'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Envios y entregas
          </Text>
          <Image
            source={require("../../../assets/Soporte_envios.png")}
            resizeMode="contain"
            style={styles.imagen}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.caja,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Reembolsos'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Reembolsos y cambios
          </Text>
          <Image
            source={require("../../../assets/Soporte_reembolso.png")}
            resizeMode="contain"
            style={styles.imagen}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.caja,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Productos'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>Productos</Text>
          <Image
            source={require("../../../assets/Soporte_productos.png")}
            resizeMode="contain"
            style={styles.imagen}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.caja,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Seguridad'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Seguridad y privacidad
          </Text>
          <Image
            source={require("../../../assets/Soporte_seguridad.png")}
            resizeMode="contain"
            style={styles.imagen}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.caja,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Aplicacion'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Aplicacion y configuraciones
          </Text>
          <Image
            source={require("../../../assets/Soporte_aplicacion.png")}
            resizeMode="contain"
            style={styles.imagen}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.caja,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={()=>{navigation.navigate("SoporteChild", {categoria: 'Promociones'})}}
        >
          <Text style={[styles.texto, { color: theme.text }]}>
            Promociones y descuentos
          </Text>
          <Image
            source={require("../../../assets/Soporte_promociones.png")}
            resizeMode="contain"
            style={styles.imagen}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  },
  caja: {
    borderRadius: 15,
    borderWidth: 0.7,
    padding: 15,
    minWidth: 150,
    maxWidth: 150,
    maxHeight: 170,
    minHeight: 170,
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
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
});
