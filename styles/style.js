import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  botaoCalcular: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  botaoLimpar: {
    flex: 1,
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 6,
    marginLeft: 5,
  },
  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});
