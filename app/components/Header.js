import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import theme from "../config/theme";
import Icon from "./Icon";

export default function Header({
  onPress,
  title,
  handleItemPick,
  modalVisible,
  handleModal,
  setModalVisible,
}) {
  return (
    <View style={styles.container}>
      <Icon name="bars" size={28} onPress={onPress} />
      <Text
        style={{ color: theme.colors.white, fontSize: 25, fontWeight: "bold" }}
      >
        {title}
      </Text>
      <Icon name="ellipsis-v" size={28} onPress={handleModal} />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View
            style={{
              width: "100%",
              height: "70%",
              opacity: 0.4,
              backgroundColor: theme.colors.black,
            }}
          ></View>
          <View style={styles.modalContent}>
            <View style={styles.modalItems}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => handleItemPick(1)}
                  style={{
                    borderBottomColor: theme.colors.yellow,
                    borderBottomWidth: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: 18,
                      paddingVertical: 10,
                    }}
                  >
                    Sort by Pledged
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleItemPick(2)}
                  style={{
                    borderBottomColor: theme.colors.yellow,
                    borderBottomWidth: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: 18,
                      paddingVertical: 10,
                    }}
                  >
                    Sort by Upvotes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleItemPick(3)}
                  style={{
                    borderBottomColor: theme.colors.yellow,
                    borderBottomWidth: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: 18,
                      paddingVertical: 10,
                    }}
                  >
                    Filter by food tag
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleItemPick(4)}
                  style={{
                    borderBottomColor: theme.colors.yellow,
                    borderBottomWidth: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: 18,
                      paddingVertical: 10,
                    }}
                  >
                    Filter by technology tag
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleItemPick(5)}
                  style={{
                    borderBottomColor: theme.colors.yellow,
                    borderBottomWidth: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.white,
                      fontSize: 18,
                      paddingVertical: 10,
                    }}
                  >
                    Filter by Art tag
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    width: "100%",
    height: "30%",
    backgroundColor: theme.colors.black,
    elevation: 4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  modalItems: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },
});
