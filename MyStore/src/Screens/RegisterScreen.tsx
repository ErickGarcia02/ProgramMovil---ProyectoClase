import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";
import Input from "../components/Input";
import { useState } from "react";
import { RootStackParamList } from "../Navigator/StackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ValidacionRegistro from "../components/Register";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "../Contexts/ThemeContext";
import * as ImagePicker from "expo-image-picker"; // 👈 IMPORTANTE

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errores, setErrores] = useState<{ [key: string]: string }>({});
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confContrasena, setConfContrasena] = useState("");

  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  const { theme } = useTheme();

  const handleRegistro = () => {
    const { valido, errores } = ValidacionRegistro({
      nombreCompleto,
      usuario,
      correo,
      domicilio,
      telefono,
      fechaNacimiento,
      contrasena,
      confContrasena,
    });

    if (!valido) {
      setErrores(errores);
      return;
    }

    Alert.alert(
      "¡Registro exitoso!",
      "Tu cuenta ha sido creada correctamente.",
      [
        {
          text: "Aceptar",
          onPress: () => navigation.navigate("Login"),
        },
      ]
    );
  };

  const handleChangeFecha = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }

    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");

      setFechaNacimiento(`${year}-${month}-${day}`);
      setErrores((prev) => ({ ...prev, fechaNacimiento: "" }));
    }
  };

  const handleSeleccionarFoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso requerido",
        "Necesitamos acceso a tu galería para seleccionar una foto."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, 
      aspect: [1, 1], 
      quality: 0.8,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setFotoPerfil(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={[
            styles.container,
            { backgroundColor: theme.background },
          ]}
        >
          <View style={styles.fotoContainer}>
            <TouchableOpacity onPress={handleSeleccionarFoto}>
              {fotoPerfil ? (
                <Image
                  source={{ uri: fotoPerfil }}
                  style={styles.avatar}
                />
              ) : (
                <View style={[styles.avatar, styles.avatarPlaceholder]}>
                  <Text style={styles.avatarText}>Foto</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSeleccionarFoto}>
              <Text style={styles.linkText}>
                {fotoPerfil ? "Cambiar foto" : "Subir foto de perfil"}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.textoprincipal, { color: theme.text }]}>
            Iniciemos con la creación de tu cuenta!
          </Text>

          {/* Nombre */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Nombre completo:
          </Text>
          <Input
            value={nombreCompleto}
            type="text"
            placeholder={"Juanito Mengano"}
            onChange={setNombreCompleto}
          />
          {errores.nombreCompleto && (
            <Text style={styles.errorText}>{errores.nombreCompleto}</Text>
          )}

          {/* usuario */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Nombre de usuario:
          </Text>
          <Text style={styles.textoadvertencia}>**No usar espacios**</Text>
          <Input
            value={usuario}
            type="text"
            placeholder={"JuanitoMengano"}
            onChange={setUsuario}
          />
          {errores.usuario && (
            <Text style={styles.errorText}>{errores.usuario}</Text>
          )}

          {/* Correo */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Correo electrónico:
          </Text>
          <Input
            value={correo}
            type="email"
            placeholder={"juanitomengano@gmail.com"}
            onChange={setCorreo}
          />
          {errores.correo && (
            <Text style={styles.errorText}>{errores.correo}</Text>
          )}

          {/* Domicilio */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Dirección de domicilio:
          </Text>
          <Input
            value={domicilio}
            type="text"
            placeholder={"En algún lugar"}
            onChange={setDomicilio}
          />
          {errores.domicilio && (
            <Text style={styles.errorText}>{errores.domicilio}</Text>
          )}

          {/* Teléfono */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Teléfono:
          </Text>
          <Input
            value={telefono}
            type="number"
            placeholder={"99275197"}
            onChange={setTelefono}
          />
          {errores.telefono && (
            <Text style={styles.errorText}>{errores.telefono}</Text>
          )}

          {/* Fecha nacimiento */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Fecha de nacimiento:
          </Text>
          <TouchableOpacity
            style={[
              styles.datepickerboton,
              { borderColor: theme.border },
            ]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.textoboton}>
              {fechaNacimiento
                ? fechaNacimiento
                : "Selecciona tu fecha de nacimiento"}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={
                fechaNacimiento
                  ? new Date(fechaNacimiento)
                  : new Date("2000-01-01")
              }
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleChangeFecha}
              maximumDate={new Date()}
            />
          )}

          {errores.fechaNacimiento && (
            <Text style={styles.errorText}>{errores.fechaNacimiento}</Text>
          )}

          {/* Contraseña */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Contraseña:
          </Text>
          <Input
            value={contrasena}
            type="password"
            placeholder={""}
            onChange={setContrasena}
          />
          {errores.contrasena && (
            <Text style={styles.errorText}>{errores.contrasena}</Text>
          )}

          {/* Confirmar */}
          <Text style={[styles.textlabels, { color: theme.text }]}>
            Confirmar contraseña:
          </Text>
          <Input
            value={confContrasena}
            type="password"
            placeholder={""}
            onChange={setConfContrasena}
          />
          {errores.confContrasena && (
            <Text style={styles.errorText}>{errores.confContrasena}</Text>
          )}

          {/* Botón */}
          <TouchableOpacity
            style={styles.botonregistro}
            onPress={handleRegistro}
          >
            <Text style={styles.textoboton}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  textoprincipal: {
    fontSize: 30,
    paddingBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  textlabels: {
    fontSize: 20,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontFamily: "Poppins_400Regular",
  },
  botonregistro: {
    backgroundColor: "#a4db8dff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    borderColor: "#0a4914ff",
    borderWidth: 1,
    marginTop: 10,
  },
  textoadvertencia: {
    color: "#9b0c0cff",
    fontWeight: "bold",
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
  },
  errorText: {
    color: "#9b0c0cff",
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  datepickerboton: {
    backgroundColor: "#fffafaff",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  textoboton: {
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
  },
  imagen: {
    height: 200,
    width: 150,
    padding: 0,
  },

  fotoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarPlaceholder: {
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: "Poppins_400Regular",
    color: "#555",
  },
  linkText: {
    marginTop: 8,
    color: "#2d4891ff",
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
  },
});
