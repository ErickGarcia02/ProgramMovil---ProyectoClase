import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamListSoporte } from "../../Navigator/SoporteStackNavigator";
import { useTheme } from "../../Contexts/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamListSoporte, "SoporteChild">;
export default function Soportechild({ route }: Props) {
  const { theme } = useTheme();
  const { categoria } = route.params;

  const pantalla = () => {
    if (categoria == "Cuenta") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Cómo creo una cuenta?</Text>
          <Text style={[styles.textContenido]}>
            Puedes registrarte con tu correo electrónico, nombre completo y una
            contraseña.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Cómo edito mis datos personales?
          </Text>
          <Text style={[styles.textContenido]}>
            Ve a “Cuenta y perfil” y selecciona la opción “Editar datos”.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Puedo cambiar mi correo electrónico?
          </Text>
          <Text style={[styles.textContenido]}>
            Sí, pero deberás verificarlo nuevamente para mantener tu cuenta
            segura.
          </Text>

          <Text style={[styles.textTitulo]}>
            Olvidé mi contraseña, ¿qué hago?
          </Text>
          <Text style={[styles.textContenido]}>
            Selecciona “¿Olvidaste tu contraseña?” y sigue las instrucciones
            enviadas a tu correo.
          </Text>
        </View>
      );
    } else if (categoria == "Pedidos") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Dónde puedo ver mis pedidos?</Text>
          <Text style={[styles.textContenido]}>
            En la sección “Pedidos” encontrarás el historial de compras y
            estados actuales.
          </Text>

          <Text style={[styles.textTitulo]}>¿Puedo cancelar un pedido?</Text>
          <Text style={[styles.textContenido]}>
            Solo si el pedido aún no ha sido preparado o enviado.
          </Text>

          <Text style={[styles.textTitulo]}>
            Mi pedido aparece como entregado, pero no lo recibí.
          </Text>
          <Text style={[styles.textContenido]}>
            Contáctanos a través de Soporte para ayudarte a resolverlo.
          </Text>

          <Text style={[styles.textTitulo]}>¿Cómo descargo mi factura?</Text>
          <Text style={[styles.textContenido]}>
            Dentro del detalle del pedido selecciona “Descargar factura”.
          </Text>
        </View>
      );
    } else if (categoria == "MetodosDePago") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Qué métodos de pago aceptan?</Text>
          <Text style={[styles.textContenido]}>
            Aceptamos tarjetas de débito/crédito, PayPal y pago contra entrega.
          </Text>

          <Text style={[styles.textTitulo]}>¿Puedo guardar mis tarjetas?</Text>
          <Text style={[styles.textContenido]}>
            Sí, desde la sección “Métodos de pago”.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Es seguro guardar mis datos de pago?
          </Text>
          <Text style={[styles.textContenido]}>
            Sí, utilizamos encriptación de nivel bancario.
          </Text>
        </View>
      );
    } else if (categoria == "Envios") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Cuánto tarda un envío?</Text>
          <Text style={[styles.textContenido]}>
            Entre 24 y 72 horas, dependiendo de tu zona.
          </Text>

          <Text style={[styles.textTitulo]}>¿Tienen envío express?</Text>
          <Text style={[styles.textContenido]}>
            Sí, disponible en zonas seleccionadas.
          </Text>

          <Text style={[styles.textTitulo]}>
            Mi paquete llegó dañado, ¿qué hago?
          </Text>
          <Text style={[styles.textContenido]}>
            Contáctanos con fotos del producto para ayudarte con un reemplazo o
            reembolso.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Puedo cambiar la dirección después del pedido?
          </Text>
          <Text style={[styles.textContenido]}>
            Sí, siempre y cuando el pedido no haya sido despachado.
          </Text>
        </View>
      );
    } else if (categoria == "Reembolsos") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Cuánto tarda un reembolso?</Text>
          <Text style={[styles.textContenido]}>
            Entre 3 y 10 días hábiles, según tu método de pago.
          </Text>

          <Text style={[styles.textTitulo]}>¿Puedo cambiar un producto?</Text>
          <Text style={[styles.textContenido]}>
            Sí, siempre que esté sin uso y dentro del período permitido.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Qué productos no tienen devolución?
          </Text>
          <Text style={[styles.textContenido]}>
            Productos perecederos, personalizados o usados.
          </Text>

          <Text style={[styles.textTitulo]}>¿Cómo solicito un reembolso?</Text>
          <Text style={[styles.textContenido]}>
            En el detalle del pedido selecciona “Solicitar reembolso”.
          </Text>
        </View>
      );
    } else if (categoria == "Productos") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>
            ¿Cómo sé si un producto está disponible?
          </Text>
          <Text style={[styles.textContenido]}>
            La página del producto muestra su disponibilidad.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Los precios incluyen impuestos?
          </Text>
          <Text style={[styles.textContenido]}>
            Sí, todos los precios incluyen impuestos.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Puedo recibir una notificación cuando un producto vuelva a estar
            disponible?
          </Text>
          <Text style={[styles.textContenido]}>
            Sí, activa “Notificarme” en la página del producto.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Los productos tienen garantía?
          </Text>
          <Text style={[styles.textContenido]}>
            Algunos sí; revisa la descripción de cada producto.
          </Text>
        </View>
      );
    } else if (categoria == "Seguridad") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>
            ¿Cómo protegen mis datos personales?
          </Text>
          <Text style={[styles.textContenido]}>
            Usamos cifrado avanzado y protocolos de seguridad.
          </Text>

          <Text style={[styles.textTitulo]}>¿Comparten mi información?</Text>
          <Text style={[styles.textContenido]}>
            Solo con proveedores necesarios para procesar tu pedido.
          </Text>

          <Text style={[styles.textTitulo]}>¿Puedo eliminar mi cuenta?</Text>
          <Text style={[styles.textContenido]}>
            Sí, desde Configuración → Seguridad y privacidad.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Mis datos de pago están seguros?
          </Text>
          <Text style={[styles.textContenido]}>
            Sí, no almacenamos información sensible como el CVV.
          </Text>
        </View>
      );
    } else if (categoria == "Aplicacion") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Cómo activo el modo oscuro?</Text>
          <Text style={[styles.textContenido]}>En Configuración → Tema.</Text>

          <Text style={[styles.textTitulo]}>¿Puedo cambiar el idioma?</Text>
          <Text style={[styles.textContenido]}>
            Sí, desde Configuración → Idioma.
          </Text>

          <Text style={[styles.textTitulo]}>
            La app no funciona correctamente, ¿qué hago?
          </Text>
          <Text style={[styles.textContenido]}>
            Reinicia la app o verifica si hay actualizaciones disponibles.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Cómo activo o desactivo notificaciones?
          </Text>
          <Text style={[styles.textContenido]}>
            En Configuración → Notificaciones.
          </Text>
        </View>
      );
    } else if (categoria == "Promociones") {
      return (
        <View>
          <Text style={[styles.textTitulo]}>¿Cómo uso un cupón?</Text>
          <Text style={[styles.textContenido]}>
            Ingresa tu código en la sección “Aplicar cupón” al finalizar tu
            compra.
          </Text>

          <Text style={[styles.textTitulo]}>¿Los cupones caducan?</Text>
          <Text style={[styles.textContenido]}>
            Sí, revisa la vigencia en los detalles del cupón.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Puedo usar más de un cupón por compra?
          </Text>
          <Text style={[styles.textContenido]}>
            No, solo se permite un cupón por transacción.
          </Text>

          <Text style={[styles.textTitulo]}>
            ¿Dónde veo las promociones activas?
          </Text>
          <Text style={[styles.textContenido]}>
            En la sección “Promociones y descuentos”.
          </Text>
        </View>
      );
    } else {
      return "Pantalla no valida intenta nuevamente.";
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View
        style={[styles.cajaChild, { backgroundColor: theme.backgroundinner }]}
      >
        {pantalla()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cajaChild: {
    flex: 1,
    maxWidth: "100%",
    minWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
  },
  textTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  textContenido: {
    fontSize: 15,
    padding: 20,
  },
});
