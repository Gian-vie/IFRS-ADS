import { Text, View } from "react-native";

export default function Loading({message = "Loading..."}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{message}</Text>
    </View>
  );
}