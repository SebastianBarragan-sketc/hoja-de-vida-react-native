import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View
      style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}
    >
      <Text style={estilos.titulo}>{titulo}</Text>

      {enCurso ? (
        <Text style={[estilos.badge, estilos.badgeEnCurso]}>En Curso</Text>
      ) : (
        <Text style={[estilos.badge, estilos.badgeFinalizado]}>Finalizado</Text>
      )}

      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1.5,
  },
  finalizado: { backgroundColor: "#ffffff", borderColor: "#cbd5e1" },
  enCurso: { backgroundColor: "#ecfdf5", borderColor: "#059669" },
  titulo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  subtitulo: { fontSize: 14, color: "#475569" },
  anio: { fontSize: 12, color: "#64748b", marginTop: 2 },
  badge: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: "flex-start",
    overflow: "hidden",
    marginTop: 6,
    marginBottom: 6,
  },
  badgeEnCurso: { backgroundColor: "#059669" },
  badgeFinalizado: { backgroundColor: "#475569" },
});
