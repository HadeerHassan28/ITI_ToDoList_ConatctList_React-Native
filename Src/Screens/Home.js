import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import ToDoList from "./ToDoList";
import ContactList from "./ToDoList";
import HomeStyle from "./HomeStyle";
const Home = () => {
  const navigation = useNavigation();
  const goToContactList = () => {
    navigation.navigate(ContactList);
  };

  const goToToDoList = () => {
    navigation.navigate(ToDoList);
    return (
      <View>
        <Pressable onPress={goToContactList} style={HomeStyle.button}>
          <Text> Contact List</Text>
        </Pressable>

        <Pressable onPress={goToToDoList} style={HomeStyle.button}>
          <Text>ToDo List</Text>
        </Pressable>
      </View>
    );
  };
};
export default Home;
