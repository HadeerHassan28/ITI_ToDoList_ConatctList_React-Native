import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SectionList, Text, View, Image } from "react-native";
import styles from "./ContactListStyle";

const ContactList = () => {
  const contactData = [
    {
      id: 0,
      title: "A",
      data: [
        {
          id: 0,
          text: "User 1",
          require: require("../../assets/Images/1.jpeg"),
        },
        {
          id: 1,
          text: "User 2",
          require: require("../../assets/Images/1.jpeg"),
        },
        {
          id: 2,
          text: "User 3",
          require: require("../../assets/Images/1.jpeg"),
        },
      ],
    },
    {
      id: 1,
      title: "B",
      data: [
        {
          id: 0,
          text: "User 1",
          require: require("../../assets/Images/1.jpeg"),
        },
        {
          id: 1,
          text: "User 2",
          require: require("../../assets/Images/1.jpeg"),
        },
      ],
    },
    {
      id: 2,
      title: "C",
      data: [
        {
          id: 0,
          text: "User 1",
          require: require("../../assets/Images/1.jpeg"),
        },
      ],
    },
    {
      id: 3,
      title: "D",
      data: [
        {
          id: 0,
          text: "User 1",
          require: require("../../assets/Images/1.jpeg"),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={contactData}
        renderSectionHeader={(props) => (
          <Text style={styles.TextHeader}>{props.section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Image source={item.require} style={styles.Imgs} />
            <Text style={styles.TextItem}>{item.text}</Text>
          </View>
        )}
      ></SectionList>
    </SafeAreaView>
  );
};

export default ContactList;
