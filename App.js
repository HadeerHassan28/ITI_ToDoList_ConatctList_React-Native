import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigation/roots";
import Home from "./Src/Screens/Home";
//import Home from "./Src/Screens/Home";
//import { StyleSheet, Text, View } from "react-native";
//import ContactList from "./Src/Screens/ContactList";

export default function App() {
  return (
    <NavigationContainer>
      <Root>
        <Home></Home>
      </Root>
    </NavigationContainer>
  );
}
