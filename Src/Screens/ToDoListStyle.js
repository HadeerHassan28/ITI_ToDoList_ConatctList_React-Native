import { Platform, StyleSheet } from "react-native";
const ToDoListStyle = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff1493",
  },
  button: {
    borderRadius: 5,
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#ff1493",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ff1493",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    color: "white",
    fontSize: 20,
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 50,
    marginTop: 15,
  },
  item: { color: "white" },
  errMsg: { color: "white", fontSize: 24, fontWeight: "bold" },
});
export default ToDoListStyle;
