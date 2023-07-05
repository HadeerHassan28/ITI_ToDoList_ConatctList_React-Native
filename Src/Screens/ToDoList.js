import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./ToDoListStyle";
import Box from "../../component/Box/Bos";
import routes from "../common/routes";
import { useNavigation } from "@react-navigation/native";
import { v4 as uuid } from "uuid";
const ToDoList = () => {
  const [text, setText] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
    { id: 4, text: "Task 4" },
  ]);
  const { navigate } = useNavigation();
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
  const handleToggleDone = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#ff1493"
        style={styles.btn}
        onPress={() => navigate(routes.ContactList)}
      >
        <Text style={styles.textBtn}>Contact List</Text>
      </TouchableHighlight>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};
export default ToDoList;
