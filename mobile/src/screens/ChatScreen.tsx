import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";

export default function ChatScreen({ route }: any) {
  const { user } = route.params;
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (text.trim() === "") return;
    const newMsg = { id: Date.now().toString(), text, sender: "me" };
    setMessages([...messages, newMsg]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={item.sender === "me" ? styles.myMsg : styles.theirMsg}>
            <Text style={styles.msgText}>{item.text}</Text>
          </Card>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Type a message"
          value={text}
          onChangeText={setText}
          mode="outlined"
          style={styles.input}
        />
        <Button mode="contained" onPress={sendMessage} style={styles.sendBtn}>
          Send
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  inputRow: { flexDirection: "row", padding: 10, backgroundColor: "#fff" },
  input: { flex: 1, marginRight: 10 },
  sendBtn: { alignSelf: "center" },
  myMsg: { alignSelf: "flex-end", margin: 5, padding: 10, backgroundColor: "#4A90E2" },
  theirMsg: { alignSelf: "flex-start", margin: 5, padding: 10, backgroundColor: "#eee" },
  msgText: { color: "#000" },
});
