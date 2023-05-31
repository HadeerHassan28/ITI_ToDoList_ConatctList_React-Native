import React, { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./ToDoListStyle";
import { uuidv4 as uuid } from "uuid";
import Box from "../../component/Box/Bos";
const ToDoList = () => {
  const [text, setText] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [items, setItems] = useState([
    { id: uuid, text: "Task 1" },
    { id: uuid, text: "Task 2" },
    { id: uuid, text: "Task 3" },
    { id: uuid, text: "Task 4" },
  ]);

  const handleChange = (value) => {
    setText(value);
    seterrMsg("");
  };

  const handleAdd = () => {
    if (text.length == 0) seterrMsg("Empty Input...");
    else if (text.length < 3) seterrMsg("Please enter more than 3 characters");
    else {
      const newItem = {
        id: uuid,
        text: text.trim(),
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setText("");
      seterrMsg("");
    }
  };
  const handleToggleDone = (itemId) => {};

  const handleDelete = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <Text style={styles.title}>My ToDo List</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={text.toString()}
          onChangeText={handleChange}
          placeholder={"enter"}
          editable
        ></TextInput>

        <Pressable style={styles.button} onPress={handleAdd}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>
      {errMsg !== "" && <Text style={styles.errMsg}>{errMsg}</Text>}
      {items.map((item) => (
        <Box
          key={item.id}
          task={item}
          onToggleDone={() => handleToggleDone(item.id)}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </SafeAreaView>
  );
};
export default ToDoList;
