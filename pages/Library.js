import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import MONGOApi from "../api/MONGOApi";
import SmartBook from "../components/SmartBook";

export default function Library() {
  const [books, setBooks] = useState([]);

  const fetchAndSetBooks = async () => {
    const apiResult = await MONGOApi.getBookList();
    setBooks(apiResult);
  };

  useEffect(() => {
    fetchAndSetBooks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Mes livres</Text>
      </View>
      <ScrollView style={styles.Library}>
        {books.map((book) => (
          <SmartBook key={book._id} ISBN={book.ISBN} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Library: {
    flex: 1,
    padding: 40,
  },
});
