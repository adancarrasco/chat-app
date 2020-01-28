import React, { useState } from "react";
import { Animated, Image, StyleSheet } from "react-native";

export default function ImageMessage({ isLocalUser, shouldAnimate }) {
  const { localUser, remoteUser } = styles;
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700
    }).start();
  }, []);
  return (
    <Animated.View
      style={[
        { opacity: 1 },
        styles.container,
        isLocalUser ? localUser : remoteUser,
        shouldAnimate ? { opacity: fadeAnim } : ""
      ]}
    >
      <Image
        resizeMode="contain"
        style={{ height: 120, width: 180 }}
        source={{
          uri:
            "https://www.petmd.com/sites/default/files/CANS_dogsmiling_379727605.jpg"
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    padding: 10,
    borderRadius: 8,
    // color: "#f00",
    marginBottom: 14
    // width: "65%"
  },
  localUser: {
    backgroundColor: "rgb(140,149,154)"
  },
  remoteUser: {
    backgroundColor: "rgb(43,114,221)",
    alignItems: "flex-end",
    color: "#fff",
    alignSelf: "flex-end"
  },
  userNameText: {
    color: "#fff",
    marginBottom: 6,
    fontWeight: "600"
  },
  messageText: {
    color: "#fff"
  }
});
