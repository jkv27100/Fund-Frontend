import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import Animator from "../components/Animator";

export default function SuccesScreen({ visible }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Animator
          src={require("../assets/animations/9614-bluewallet-success-animation.json")}
          loop={false}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
