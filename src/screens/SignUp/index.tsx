import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function SignUp(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.textColumn}>
        <Text style={styles.text}>
          See what&#39;s happening in the world right now.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signup")}
          style={styles.button}
        >
          <Text style={styles.text2}>Create account</Text>
        </TouchableOpacity>
        <Icon name="twitter" style={styles.icon}></Icon>
      </View>
      <View style={styles.textColumnFiller}></View>
      <View style={styles.rect2}>
        <Text style={styles.text3}>Have an account already?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    lineHeight: 50,
    textAlign: "left",
    marginTop: 200,
    marginLeft: 3,
    marginRight: 2
  },
  button: {
    height: 81,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 120
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(29,161,242,1)",
    fontSize: 40,
    marginTop: -554,
    marginLeft: 137
  },
  textColumn: {
    marginTop: 33,
    marginLeft: 31,
    marginRight: 31
  },
  textColumnFiller: {
    flex: 1
  },
  rect2: {
    height: 39,
    marginBottom: 45,
    marginLeft: 28,
    marginRight: 28
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 13
  }
});

export default SignUp;
