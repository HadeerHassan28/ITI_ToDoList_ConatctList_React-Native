import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
const Box = () => {
  const [isSelected, setSelection] = useState(false);
  const schemelist = [{ title: "Done" }, { title: "Delate" }];
  return (
    <View style={styles.container}>
      {schemelist.map(({ title }) => (
        <View>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{title}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default Box;
