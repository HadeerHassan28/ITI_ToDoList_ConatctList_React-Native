import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Box = ({ task, onToggleDone, onDelete, itemid }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{task.name}</Text>
      <View style={styles.container}>
        <Pressable
          value={task.done}
          onValueChange={onToggleDone}
          style={styles.btn}
        >
          <Text style={styles.text}>Done</Text>
        </Pressable>
        <Pressable
          value={false}
          onValueChange={() => onDelete(itemid)}
          style={styles.btn}
        >
          <Text style={styles.text}>Delate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    margin: 10,
    marginTop: 20,
  },
  taskName: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
    color: "white",
  },

  btn: {
    backgroundColor: "#ff1493",
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

export default Box;
