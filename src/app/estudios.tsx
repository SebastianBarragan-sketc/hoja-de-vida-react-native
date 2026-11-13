import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="school" size={70} color="#059669" />
        <Text style={estilos.nombre}>Juan Sebastián Barragán Sierra</Text>
        <Text style={estilos.subtitulo}>Formación Académica</Text>
      </View>

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio={2026}
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Bachiller Técnico en Sistemas"
        institucion="Institución Educativa Técnica Distrital"
        anio={2024}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Curso de Emprendimiento y Gestión Empresarial"
        institucion="SENA"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Curso Complementario en Bases de Datos SQL"
        institucion="SENA"
        anio={2025}
        enCurso={false}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f1f8f5" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 16 },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
    textAlign: "center",
  },
  subtitulo: { fontSize: 15, color: "#059669", fontWeight: "600" },
});
