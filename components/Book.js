import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Book({ bookDetails }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bookDetails.title}</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `https://covers.openlibrary.org/b/isbn/${bookDetails.isbn_13}-L.jpg`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
  },

  imgContainer: {
    width: "70%",
    height: "70%",
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 30,
  },
});
