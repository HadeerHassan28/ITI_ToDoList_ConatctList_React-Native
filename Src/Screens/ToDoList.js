import React, { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./ToDoListStyle";
import { uuidv4 as uuid } from "uuid";
import Box from "../../component/Box/Bos";
const ToDoList = () => {
  const [text, setText] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [items, setItem] = useState("");

  const handleChange = (value) => {
    setText(value);
    seterrMsg("");
  };

  const handleAdd = () => {
    if (text.length == 0) seterrMsg("Empty Input...");
    else if (text.length < 3) seterrMsg("Please enter more than 3 characters");
    else {
      const newItem = {
        text: text.trim(),
      };
      setItem((prevItems) => [...prevItems, newItem]);
      setText("");
      seterrMsg("");
    }
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
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text> {item.text} </Text>
            <Box></Box>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default ToDoList;
