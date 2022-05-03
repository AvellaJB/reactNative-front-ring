import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.formcontainer}>
      <TextInput placeholder="pseudo" style={styles.inputText} />
      <TextInput placeholder="email" style={styles.inputText} />
      <TextInput
        placeholder="password"
        style={styles.inputText}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("TabBar")}>CONNEXION</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    borderWidth: 2,
    width: "90%",
    padding: 5,
  },
});
