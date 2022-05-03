import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import MONGOApi from "../api/MONGOApi";

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pseudo: "",
      mail: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    MONGOApi.register(data)
      .then((result) => {
        console.log("User created");
        navigation.navigate("Connexion");
      })
      .catch((err) => {
        console.log(err);
        console.log("Register Failed");
      });
  };

  return (
    <View style={styles.formcontainer}>
      <Text style={styles.pres}>On a hâte de vous connaître ! </Text>

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
            placeholder="Pseudo"
          />
        )}
        name="pseudo"
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
            placeholder="Confirmez votre mot de passe"
          />
        )}
        name="confirmPassword"
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text>S'inscrire</Text>
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

  pres: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
