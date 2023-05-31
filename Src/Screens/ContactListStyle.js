import { Platform, StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 10,
    padding: 15,
  },
  TextHeader: {
    fontSize: 25,
    backgroundColor: "#C0C0C0",
    padding: 15,
    marginBottom: 8,
  },
  TextItem: { fontSize: 18, padding: 10 },
  Imgs: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    padding: 10,
  },
});
