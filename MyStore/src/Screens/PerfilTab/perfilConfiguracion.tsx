import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setNotificaciones, setIdioma } from "../../store/settingslice";
import { useTheme } from "../../Contexts/ThemeContext";

export default function PerfilConfiguracion() {
  const dispatch = useDispatch();
  const { isDarkMode, toggleTheme, theme } = useTheme();

  const notificaciones = useSelector(
    (state: RootState) => state.settings.notificaciones
  );
  const idioma = useSelector((state: RootState) => state.settings.idioma);

  return (
    <View
      style={[
        style.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View
        style={[
          style.container2,
          { backgroundColor: theme.backgroundinner, borderColor: theme.border },
        ]}
      >
        <View style={style.contenedor3}>
          <Text style={[style.texto, { color: theme.textinner }]}>Tema</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>

        <View style={style.contenedor3}>
          <Text style={[style.texto, { color: theme.textinner }]}>
            Recibir notificaciones
          </Text>
          <Switch
            value={notificaciones}
            onValueChange={(valor) => {
              dispatch(setNotificaciones(valor));
            }}
          />
        </View>

        <View style={style.contenedor3}>
          <Text style={[style.texto, { color: theme.textinner }]}>Idioma</Text>
          <Picker
            style={[style.botones, {color: theme.textinner}]}
            selectedValue={idioma}
            onValueChange={(valor) => dispatch(setIdioma(valor))}
          >
            <Picker.Item label="English" value="Ingles" />
            <Picker.Item label="Spanish" value="Español" />
            <Picker.Item label="Dach" value="Aleman" />
          </Picker>
        </View>
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
    padding: 20,
    flex: 1,
    maxWidth: "100%",
    minWidth: "100%",
    borderWidth: 1,
    borderRadius: 20,
    margin: 20,
  },
  texto: {
    fontSize: 16,
  },
  botones: {
    width: 120,
  },
  contenedor3: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
  },
});
