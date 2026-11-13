import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={70} color="#059669" />
        <Text style={estilos.nombre}>Juan Sebastián Barragán Sierra</Text>
        <Text style={estilos.subtitulo}>Experiencia y Proyectos</Text>
      </View>

      <TarjetaExperiencia
        cargo="Desarrollador Frontend Móvil (Proyecto Formativo)"
        empresa="SENA - Centro CGMLTI"
        periodo="2026 - Actualidad"
        descripcion="Construcción de interfaces móviles multiplataforma con React Native, Expo Router y componentes reutilizables tipados en TypeScript."
      />

      <TarjetaExperiencia
        cargo="Soporte Técnico y Redes Locales"
        empresa="Prácticas Técnicas / Freelance"
        periodo="2025"
        descripcion="Mantenimiento preventivo y correctivo de equipos de cómputo, configuración de redes domésticas y soporte técnico a usuarios."
      />

      <TarjetaExperiencia
        cargo="Desarrollador Web Junior (Proyecto Académico)"
        empresa="Semillero de Software ADSO"
        periodo="2025 - 2026"
        descripcion="Desarrollo de aplicaciones web responsivas y consumo de APIs REST utilizando JavaScript, Node.js y bases de datos MySQL."
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
