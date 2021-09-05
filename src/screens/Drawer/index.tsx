import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-elements";

function DrawerPanel(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.rect2}>
        <View style={styles.rect11}>
          <View style={styles.imageColumn}>
            <Image
              source={require("../assets/images/IMG_20190324_163843_1.jpg")}
              resizeMode="cover"
              style={styles.image}
            ></Image>
            <View style={styles.text8ColumnRow}>
              <View style={styles.text8Column}>
                <Text style={styles.text8}>Ankur Kedia</Text>
                <Text style={styles.text9}>@theankurkedia</Text>
              </View>
              <IoniconsIcon
                name="ios-arrow-down"
                style={styles.icon8}
              ></IoniconsIcon>
            </View>
          </View>
          <View style={styles.imageColumnFiller}></View>
          <View style={styles.rect12Row}>
            <View style={styles.rect12}>
              <Text style={styles.text10}>211</Text>
              <Text style={styles.text11}>Following</Text>
            </View>
            <View style={styles.rect13}>
              <Text style={styles.text12}>122</Text>
              <Text style={styles.text13}>Followers</Text>
            </View>
          </View>
        </View>
        <Divider style={styles.divider4}></Divider>
        <View style={styles.rect7}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
            style={styles.button}
          >
            <View style={styles.icon4Row}>
              <FontAwesomeIcon
                name="user-o"
                style={styles.icon4}
              ></FontAwesomeIcon>
              <Text style={styles.text4}>Profile</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.rect8}>
            <View style={styles.icon5Row}>
              <MaterialIconsIcon
                name="format-list-bulleted"
                style={styles.icon5}
              ></MaterialIconsIcon>
              <Text style={styles.text5}>Lists</Text>
            </View>
          </View>
          <View style={styles.rect9}>
            <View style={styles.icon6Row}>
              <MaterialIconsIcon
                name="bookmark-border"
                style={styles.icon6}
              ></MaterialIconsIcon>
              <Text style={styles.text6}>Bookmarks</Text>
            </View>
          </View>
          <View style={styles.rect10}>
            <View style={styles.icon7Row}>
              <MaterialIconsIcon
                name="flash-on"
                style={styles.icon7}
              ></MaterialIconsIcon>
              <Text style={styles.text7}>Moments</Text>
            </View>
          </View>
        </View>
        <Divider style={styles.divider3}></Divider>
        <View style={styles.divider2Stack}>
          <Divider style={styles.divider2}></Divider>
          <View style={styles.rect5}>
            <View style={styles.rect6}>
              <View style={styles.icon3Row}>
                <FeatherIcon name="share" style={styles.icon3}></FeatherIcon>
                <Text style={styles.text3}>Twitter Ads</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dividerStack}>
          <Divider style={styles.divider}></Divider>
          <View style={styles.rect4}>
            <Text style={styles.text}>Settings and privacy</Text>
            <Text style={styles.text2}>Help Center</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <MaterialCommunityIconsIcon
            name="lightbulb-outline"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="qrcode"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "#141f28"
  },
  rect2: {
    width: 276,
    backgroundColor: "#151f2b",
    elevation: 54,
    shadowOffset: {
      height: 9,
      width: 3
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.4,
    shadowRadius: 18,
    flex: 1
  },
  rect11: {
    width: 188,
    height: 123,
    marginTop: 20,
    marginLeft: 22
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 1
  },
  text8: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 1
  },
  text9: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 1
  },
  text8Column: {
    width: 103
  },
  icon8: {
    color: "#1da5f8",
    fontSize: 20,
    marginLeft: 120,
    marginTop: 3
  },
  text8ColumnRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 6
  },
  imageColumn: {
    marginRight: -48
  },
  imageColumnFiller: {
    flex: 1
  },
  rect12: {
    width: 92,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  text10: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 20
  },
  text11: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20
  },
  rect13: {
    width: 92,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 3
  },
  text12: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    lineHeight: 20
  },
  text13: {
    color: "#798894",
    fontSize: 14,
    lineHeight: 20
  },
  rect12Row: {
    height: 21,
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 1
  },
  divider4: {
    width: 276,
    height: 1,
    marginTop: 5
  },
  rect7: {
    height: 288,
    justifyContent: "space-around",
    marginTop: 1,
    marginLeft: 15,
    marginRight: 6
  },
  button: {
    width: 228,
    height: 25,
    flexDirection: "row"
  },
  icon4: {
    color: "#8899a6",
    fontSize: 25
  },
  text4: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 22,
    marginTop: 3
  },
  icon4Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 133
  },
  rect8: {
    width: 137,
    height: 25,
    flexDirection: "row"
  },
  icon5: {
    color: "#8899a6",
    fontSize: 25
  },
  text5: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 18,
    marginTop: 3
  },
  icon5Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 59
  },
  rect9: {
    width: 137,
    height: 25,
    flexDirection: "row"
  },
  icon6: {
    color: "#8899a6",
    fontSize: 25
  },
  text6: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 18,
    marginTop: 3
  },
  icon6Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 4
  },
  rect10: {
    width: 137,
    height: 25,
    flexDirection: "row"
  },
  icon7: {
    color: "#8899a6",
    fontSize: 25
  },
  text7: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 18,
    marginTop: 3
  },
  icon7Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 17
  },
  divider3: {
    width: 276,
    height: 1
  },
  divider2: {
    top: 14,
    left: 0,
    width: 276,
    height: 1,
    position: "absolute"
  },
  rect5: {
    top: 0,
    left: 15,
    width: 261,
    height: 90,
    position: "absolute",
    justifyContent: "center"
  },
  rect6: {
    width: 137,
    height: 25,
    flexDirection: "row"
  },
  icon3: {
    color: "#8899a6",
    fontSize: 25
  },
  text3: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 18,
    marginTop: 3
  },
  icon3Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  divider2Stack: {
    width: 276,
    height: 90,
    marginTop: 75
  },
  divider: {
    top: 39,
    left: 0,
    width: 276,
    height: 1,
    position: "absolute"
  },
  rect4: {
    top: 0,
    left: 20,
    width: 249,
    height: 93,
    position: "absolute",
    justifyContent: "space-around"
  },
  text: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20
  },
  text2: {
    color: "#fefefe",
    fontSize: 18,
    lineHeight: 20
  },
  dividerStack: {
    width: 276,
    height: 93,
    marginTop: 8
  },
  rect3: {
    width: 240,
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 31,
    marginLeft: 15
  },
  icon: {
    color: "#1da1f2",
    fontSize: 30
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 30
  }
});

export default DrawerPanel;
