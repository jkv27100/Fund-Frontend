import { Ionicons } from "@expo/vector-icons";
import * as Document from "expo-document-picker";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../config/theme";
import AppButton from "./AppButton";

export default function DocumentPicker({ text, setUri, uri }) {
  const [isPicked, setIsPicked] = useState(false);
  const [fileName, setFileName] = useState("");
  const [size, setSize] = useState();
  const handlePress = async () => {
    const result = await Document.getDocumentAsync({
      copyToCacheDirectory: false,
    });
    if (result.type === "success") {
      let array = uri;
      array.push(result.uri);
      setUri(array);
      setIsPicked(true);
      setFileName(result.name);
      setSize(result.size);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.white }}>{text}</Text>
      <AppButton
        name="cloud-upload-alt"
        width={80}
        height={40}
        onPress={handlePress}
      />
      <View style={{ width: 100, height: 20 }}>
        <Text numberOfLines={1} style={{ color: theme.colors.light }}>
          {fileName}
        </Text>
        <Text numberOfLines={1} style={{ color: theme.colors.light }}>
          {size ? (size && size / 1000000).toFixed(2) + " MB" : ""}
        </Text>
      </View>
      {isPicked ? (
        <Ionicons size={25} name="cloud-done" color={theme.colors.success} />
      ) : (
        <Ionicons size={25} name="cloud-offline" color={theme.colors.danger} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
