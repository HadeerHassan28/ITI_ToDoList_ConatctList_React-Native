import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../common/routes";
import ContactList from "../Screens/ContactList";
import ToDoList from "../Screens/ToDoList";
import Home from "../Screens/ToDoList";
import React from "react";
const stack = createNativeStackNavigator();
const Root = () => {
  return (
    <stack.Navigator>
      <stack.Screen name={routes.Home} component={Home} />
      <stack.Screen
        name={routes.ToDoList}
        component={ToDoList}
        options={{ headerTitle: "To Do List" }}
      ></stack.Screen>
      <stack.Screen
        name={routes.ContactList}
        component={ContactList}
        options={{ headerTitle: "Contact List" }}
      ></stack.Screen>
    </stack.Navigator>
  );
};

export default Root;
