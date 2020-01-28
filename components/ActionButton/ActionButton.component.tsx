import React, { useState } from "react";
import { StyleSheet, Text, Animated } from "react-native";

type ActionButtonProps = {
  isBottomButton?: boolean;
  onTouchEnd: () => void;
  children?: HTMLElement | string;
};

export default function ActionButton({
  isBottomButton,
  onTouchEnd,
  children
}: ActionButtonProps) {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      delay: 2500
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={[
        styles.container,
        isBottomButton ? { top: "50%" } : { top: 0 },
        { opacity: fadeAnim }
      ]}
      onTouchEnd={() => {
        onTouchEnd();
        setFadeAnim(new Animated.Value(0));
      }}
    >
      <Text>{children}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "50%",
    opacity: 0
  }
});
