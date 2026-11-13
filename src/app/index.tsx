import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#059669" />
        <Text style={estilos.nombre}>Juan Sebastián Barragán Sierra</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA enfocado en el desarrollo de aplicaciones móviles y
          web modernas. Con conocimientos en React Native, JavaScript,
          TypeScript, HTML5, CSS3, Python y administración de bases de datos SQL
          y NoSQL.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto y Redes</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#059669"
          onPress={() =>
            Alert.alert("Correo Electrónico", "juan.barragan@misena.edu.co")
          }
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#0d9488"
          onPress={() =>
            Alert.alert("Teléfono de Contacto", "+57 315 678 4321")
          }
        />

        <MiBoton
          textoBoton="Repositorios GitHub"
          nombreIcono="logo-github"
          colorBoton="#1e293b"
          onPress={() =>
            Alert.alert("GitHub Oficial", "https://github.com/JuanBarraganDev")
          }
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0369a1"
          onPress={() =>
            Alert.alert("LinkedIn", "linkedin.com/in/juan-sebastian-barragan")
          }
        />

        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#4338ca"
          onPress={() =>
            Alert.alert("Facebook", "facebook.com/juansebastian.barragan")
          }
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f1f8f5" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
    textAlign: "center",
  },
  profesion: { fontSize: 16, color: "#059669", fontWeight: "600" },
  seccion: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});
