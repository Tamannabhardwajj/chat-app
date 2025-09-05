import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { TextInput, Button, Card, Text } from "react-native-paper";

export default function ChatScreen({ route }) {
  const { user } = route.params;
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey there!", fromMe: false },
    { id: "2", text: "Hello 👋", fromMe: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      { id: Date.now().toString(), text: input, fromMe: true },
    ]);
    setInput("");
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.message,
        item.fromMe ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      <Card style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <Button mode="contained" onPress={sendMessage} style={styles.sendButton}>
          Send
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f8" },
  chatContainer: { padding: 10 },
  message: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4A90E2",
  },
  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0",
  },
  messageText: { color: "#000" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
  input: { flex: 1, marginRight: 10 },
  sendButton: { borderRadius: 20 },
});
