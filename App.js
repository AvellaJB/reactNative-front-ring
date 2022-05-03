import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Connexion from "./pages/Connexion";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./components/Register";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./components/TabBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        style={styles.container}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
