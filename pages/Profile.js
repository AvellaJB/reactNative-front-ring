import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MONGOApi from "../api/MONGOApi";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const [user, setUser] = useState({});

  const fetchProfileData = async () => {
    const apiResult = await MONGOApi.getUserFromDB();
    setUser(apiResult);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profilePhoto}>
        <Ionicons name="person" size={96} color="black" />
      </View>
      <Text style={styles.text}>PSEUDO : {user.pseudo}</Text>
      <Text style={styles.text}>EMAIL : {user.mail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
  },

  profilePhoto: {
    backgroundColor: "grey",
    padding: 50,
    borderRadius: 100,
  },
});
