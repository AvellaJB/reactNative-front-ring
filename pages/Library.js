import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import MONGOApi from "../api/MONGOApi";
import SmartBook from "../components/SmartBook";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Library() {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    fetchAndSetBooks();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const fetchAndSetBooks = async () => {
    const apiResult = await MONGOApi.getBookList();
    setBooks(apiResult);
  };

  const deleteBookAndRefresh = async (id) => {
    MONGOApi.deleteBookById(id);
    onRefresh();
  };

  useEffect(() => {
    fetchAndSetBooks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Mes livres</Text>
      </View>
      <ScrollView
        style={styles.Library}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {books.map((book) => (
          <SmartBook
            key={book._id}
            ISBN={book.ISBN}
            onDeleteBook={() => deleteBookAndRefresh(book._id)}
          />
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
    padding: 30,
  },
});
