import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function HeaderSection(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("~/assets/images/bat.jpg")}
        resizeMode="contain"
        style={styles.userAvatar}
      ></Image>
      <View style={styles.searchHeader}>
        <Icon name="search" style={styles.searchIcon}></Icon>
        <TextInput placeholder="Search" style={styles.searchInput}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  userAvatar: {
    width: 30,
    height: 36,
    borderRadius: 10,
    marginLeft: 10,
    alignSelf: "center"
  },
  searchHeader: {
    height: 40,
    backgroundColor: "#1a1a1c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    flex: 1,
    marginRight: 4,
    marginLeft: 6,
    alignSelf: "center"
  },
  searchIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 5,
    marginRight: 1
  },
  searchInput: {
    width: 239,
    height: 40,
    color: "rgba(255,255,255,1)",
    marginRight: 1,
    marginLeft: 5,
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  }
});

export default HeaderSection;
