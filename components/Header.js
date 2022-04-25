import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../src/assets/styles";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerImage}>
        <Image
          source={require("./../src/assets/img/avatar.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ color: "white" }}>Let's start your day with</Text>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
          BOG Simple To Do App
        </Text>
      </View>
    </View>
  );
}
