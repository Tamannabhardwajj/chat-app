import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { List, Divider, FAB } from "react-native-paper";

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description="Tap to chat"
            left={(props) => <List.Icon {...props} icon="account" />}
            onPress={() => navigation.navigate("Chat", { user: item })}
          />
        )}
      />
      <FAB
        style={styles.fab}
        icon="account-plus"
        label="Add Friend"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
