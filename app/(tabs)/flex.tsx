import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function FlexScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "lime", flex: 1 }} />
      <View style={{ backgroundColor: "magenta", flex: 2 }} />
      <View style={{ backgroundColor: "cyan", flex: 2 }} />
    </View>
  );
}
