import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-paper";

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userRow}
            onPress={() => navigation.navigate("Chat", { user: item })}
          >
            <Avatar.Text size={40} label={item.name[0]} />
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  userRow: { flexDirection: "row", alignItems: "center", padding: 15, borderBottomWidth: 1, borderBottomColor: "#eee" },
  userName: { marginLeft: 15, fontSize: 16 },
});
