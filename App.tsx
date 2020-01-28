import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import ChatContainer from "./components/ChatContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ChatContainer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    height: "82%"
  }
});
