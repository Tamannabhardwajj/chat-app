import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Title } from "react-native-paper";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: connect with backend
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome Back</Title>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Text style={styles.registerText}>
        Don’t have an account?{" "}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, marginBottom: 20, textAlign: "center", color: "#4A90E2" },
  input: { marginBottom: 15 },
  button: { marginTop: 10, paddingVertical: 5, borderRadius: 8 },
  registerText: { textAlign: "center", marginTop: 15, fontSize: 14 },
  registerLink: { color: "#4A90E2", fontWeight: "bold" },
});
