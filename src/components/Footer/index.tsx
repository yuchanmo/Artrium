import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Footer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Home")}
        style={styles.button3}
      >
        <MaterialCommunityIconsIcon
          name="reddit"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Explore")}
        style={styles.button4}
      >
        <IoniconsIcon name="md-apps" style={styles.icon4}></IoniconsIcon>
      </TouchableOpacity>
      <View style={styles.group5}>
        <MaterialCommunityIconsIcon
          name="pencil"
          style={styles.icon5}
        ></MaterialCommunityIconsIcon>
      </View>
      <FontAwesomeIcon name="commenting" style={styles.icon6}></FontAwesomeIcon>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Notifications")}
        style={styles.button2}
      >
        <EntypoIcon name="mail" style={styles.icon7}></EntypoIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button3: {
    width: 28,
    height: 28,
    justifyContent: "center"
  },
  icon3: {
    color: "grey",
    fontSize: 28
  },
  button4: {
    width: 28,
    height: 28,
    justifyContent: "center"
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 28,
    alignSelf: "center"
  },
  group5: {
    width: 40,
    height: 40,
    alignSelf: "center",
    borderRadius: 100,
    borderColor: "rgba(2,107,189,1)",
    borderWidth: 3,
    justifyContent: "center"
  },
  icon5: {
    color: "grey",
    fontSize: 28,
    alignSelf: "center"
  },
  icon6: {
    color: "grey",
    fontSize: 28
  },
  button2: {
    width: 28,
    height: 28
  },
  icon7: {
    color: "grey",
    fontSize: 28
  }
});

export default Footer;
