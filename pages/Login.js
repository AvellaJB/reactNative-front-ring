import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>LOGO</Text>
      </View>
      <View style={styles.loginText}>
        <View>
          <Text style={styles.title}>BIENVENUE SUR RING PROJECT</Text>
        </View>
        <View>
          <Text>
            Gérer votre bibliothèque et partager vos livres n'a jamais été aussi
            simple.
          </Text>
        </View>
        <View>
          <Text style={styles.connect}>CONNECTEZ VOUS</Text>
        </View>
      </View>
      <View style={styles.formcontainer}>
        <TextInput placeholder="email" style={styles.inputText} />
        <TextInput placeholder="password" style={styles.inputText} />
        <TouchableOpacity>
          <Text>CONNEXION</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text>On en se connaît pas encore?</Text>
        <TouchableOpacity>
          <Text>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 100,
    fontWeight: "bold",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  connect: {
    fontWeight: "bold",
  },

  loginText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  formcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    borderWidth: 2,
    width: "90%",
  },

  registerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
