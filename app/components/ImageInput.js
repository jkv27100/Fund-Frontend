import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../config/theme";

export default function ImageInput() {
  useEffect(() => {
    requestPermission();
  }, []);

  const [imageUri, setImageUri] = useState("");

  const requestPermission = async () => {
    // Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert("Permission denied", "Message");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      Alert.alert("Something Went Wrong", error);
    }
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else handleDelete();
  };
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => setImageUri("") },
      { text: "No" },
    ]);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons
          name="camera"
          size={35}
          color={theme.colors.light}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: 100,
    height: 100,
    padding: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: 125,
    height: 125,

    borderRadius: 25,
  },
});
