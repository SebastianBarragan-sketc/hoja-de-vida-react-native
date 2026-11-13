import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={70} color="#059669" />
        <Text style={estilos.nombre}>Juan Sebastián Barragán Sierra</Text>
        <Text style={estilos.subtitulo}>Intereses y Pasatiempos</Text>
      </View>

      <TarjetaHobby
        titulo="Videojuegos Competitivos y Aventura"
        descripcion="Partidas online, juegos de mundo abierto y estrategia."
        nombreIcono="game-controller"
        onPress={() =>
          Alert.alert(
            "Videojuegos Competitivos y Aventura",
            "Disfruto jugar títulos de aventura, acción y juegos competitivos en consola y PC con amigos los fines de semana.",
          )
        }
      />

      <TarjetaHobby
        titulo="Escuchar Música y Playlists"
        descripcion="Exploración de géneros urbanos, rock, electrónica y lo-fi."
        nombreIcono="musical-notes"
        onPress={() =>
          Alert.alert(
            "Escuchar Música y Playlists",
            "Escucho música todos los días mientras programo, especialmente beats lo-fi, rock alternativo y música urbana.",
          )
        }
      />

      <TarjetaHobby
        titulo="Fútbol y Deporte Recreativo"
        descripcion="Partidos con amigos y seguimiento de ligas internacionales."
        nombreIcono="football"
        onPress={() =>
          Alert.alert(
            "Fútbol y Deporte Recreativo",
            "Me gusta jugar fútbol los fines de semana para despejar la mente y mantenerme activo físicamente.",
          )
        }
      />

      <TarjetaHobby
        titulo="Cine, Series y Tecnología"
        descripcion="Películas de ciencia ficción, anime y reseñas tech."
        nombreIcono="film"
        onPress={() =>
          Alert.alert(
            "Cine, Series y Tecnología",
            "En mi tiempo libre veo series de ciencia ficción, documentales de tecnología y canales sobre hardware y desarrollo.",
          )
        }
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
