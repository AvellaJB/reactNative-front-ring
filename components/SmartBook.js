import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import ISBNApi from "../api/ISBNApi";
import Book from "./Book";

export default function SmartBook({ ISBN }) {
  const [book, setBook] = useState([]);

  let data = ISBN;

  function APIFetch() {
    ISBNApi.getDetailsFromISBN(data)
      .then((apiBook) => setBook(apiBook))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    APIFetch();
  }, []);

  return (
    <View style={styles.container}>
      <Book bookDetails={book} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,

    borderRadius: 20,
    width: "100%",
    marginBottom: 20,
  },
});
