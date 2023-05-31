import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Box = ({ task, onToggleDone, onDelete, id }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.taskName, task.done && styles.taskDone]}>
        {task.text}
      </Text>
      <View style={styles.container}>
        <Pressable
          value={task.done}
          onPress={() => onToggleDone(id)}
          style={styles.btn}
        >
          <Text style={styles.text}>Done</Text>
        </Pressable>
        <Pressable
          value={false}
          onPress={() => onDelete(id)}
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
    fontSize: 20,
    marginRight: 8,
    color: "white",
    fontWeight: "bold",
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
