import { Platform, StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
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
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "#C0C0C0",
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
  },
  textBtn: {
    fontSize: 30,
  },
});
