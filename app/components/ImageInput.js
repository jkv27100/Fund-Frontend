import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";

import theme from "../config/theme";
import Animator from "./Animator";

export default function ImageInput({ imageUri, onChangeImage }) {
  const [loading, setLoading] = useState(false);
  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

  useEffect(() => {
    requestPermission();
  }, []);

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
        allowsEditing: true,
      });
      if (!result.cancelled) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          onChangeImage(result.uri);
        }, 1800);
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
      { text: "Yes", onPress: () => onChangeImage(null) },
      { text: "No" },
    ]);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {imageUri ? (
        base64regex.test(imageUri) ? (
          <Image
            source={{ uri: `data:image/jpg;base64,${imageUri}` }}
            style={styles.image}
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )
      ) : loading ? (
        <Animator
          src={require("../assets/animations/btn-loading.json")}
          width={25}
        />
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
    resizeMode: "contain",
  },
});
