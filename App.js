import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigation/roots";
import Home from "./Src/Screens/Home";
//import Home from "./Src/Screens/Home";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import ContactList from "./Src/Screens/ContactList";

export default function App() {
  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );
}
