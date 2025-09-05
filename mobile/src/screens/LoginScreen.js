import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Welcome Back 👋" />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry
            mode="outlined"
            onChangeText={setPassword}
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={() => navigation.replace("Home")}
            style={styles.button}
          >
            Login
          </Button>
          <Button onPress={() => navigation.navigate("Register")}>
            Don’t have an account? Sign up
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  card: { padding: 20 },
  input: { marginBottom: 15 },
  button: { marginTop: 10 },
});
