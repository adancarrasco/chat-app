import React, { useState } from "react";
import { StyleSheet, Text, Animated } from "react-native";

interface IMessageProps {
  isLocalUser: boolean;
  userName: string;
  message: string;
  shouldAnimate: boolean;
}

export default function Message({
  isLocalUser,
  userName,
  message,
  shouldAnimate
}: IMessageProps) {
  const {
    container,
    localUser,
    remoteUser,
    userNameText,
    messageText
  } = styles;
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
        container,
        isLocalUser ? localUser : remoteUser,
        shouldAnimate ? { opacity: fadeAnim } : ""
      ]}
    >
      <Text style={userNameText}>{userName}</Text>
      <Text style={messageText}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 14,
    maxWidth: "65%"
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
