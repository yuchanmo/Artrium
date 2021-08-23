import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function NotificationComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.commentRow}>
        <MaterialCommunityIconsIcon
          name="comment"
          style={styles.comment}
        ></MaterialCommunityIconsIcon>
        <View style={styles.notificationData}>
          <Text style={styles.notificationHeading}>
            {props.NotificationHeading ||
              "u/ABC replied to your post in r/pics."}
          </Text>
          <Text style={styles.notificationContent}>
            {props.notificationContent || "You should check it out."}
          </Text>
          <Text style={styles.time}>{props.Time || "Post reply • 1h"}</Text>
        </View>
      </View>
      <View style={styles.commentRowFiller}></View>
      <MaterialCommunityIconsIcon
        name="dots-vertical"
        style={styles.moreIcon}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row"
  },
  comment: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    alignSelf: "flex-start",
    height: 20,
    width: 20,
    marginTop: 2
  },
  notificationData: {
    width: 267,
    height: 77,
    alignSelf: "center",
    marginLeft: 14
  },
  notificationHeading: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular",
    width: 266,
    height: 38
  },
  notificationContent: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  time: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    marginTop: 2
  },
  commentRow: {
    height: 77,
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 14
  },
  commentRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  moreIcon: {
    color: "grey",
    fontSize: 20,
    alignSelf: "flex-start",
    height: 20,
    width: 20,
    marginRight: 8,
    marginTop: 16
  }
});

export default NotificationComponent;
