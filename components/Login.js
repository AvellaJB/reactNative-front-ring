import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import MONGOApi from "../api/MONGOApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mail: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    MONGOApi.login(data)
      .then((result) => {
        const { jwt } = result;
        const setJWT = async (result) => {
          try {
            await AsyncStorage.setItem("jwt", result);
          } catch (e) {
            console.log("Error asyncStorage.");
          }
        };
        setJWT(jwt);
        navigation.navigate("TabBar");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.formcontainer}>
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputText}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="mail"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputText}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
          />
        )}
        name="password"
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text>Se connecter</Text>
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
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },

  button: {
    backgroundColor: "#fff",
    color: "black",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
});
