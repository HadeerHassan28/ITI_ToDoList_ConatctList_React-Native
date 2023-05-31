import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
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
        <View>
          <Pressable onPress={goToContactList} style={HomeStyle.button}>
            <Text style={HomeStyle.text}> Contact List</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={goToToDoList} style={HomeStyle.button}>
            <Text>ToDo List</Text>
          </Pressable>
        </View>
      </View>
    );
  };
};
export default Home;
