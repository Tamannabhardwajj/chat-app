import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Card } from "react-native-paper";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Create Account ✨" />
        <Card.Content>
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            mode="outlined"
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={() => navigation.replace("Login")}
            style={styles.button}
          >
            Register
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
