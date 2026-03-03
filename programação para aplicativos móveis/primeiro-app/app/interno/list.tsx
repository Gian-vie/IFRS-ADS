import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { communStyle } from "../style/cummun";
import { Link } from "expo-router";

export default function ListScreen() {
    return (

        <View style={communStyle.container}>
            <Text style={communStyle.title}>List</Text>
            <Link href="/interno/" style={[communStyle.button, communStyle.buttonText]}>Go to Home</Link>
            <Link href="/interno/list2" style={[communStyle.button, communStyle.buttonText]}>Go to List 2</Link>
        </View>
    )
}
