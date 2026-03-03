import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { communStyle } from "../style/cummun";
import { Link } from "expo-router";

export default function ListScreen() {
    return (

        <View style={communStyle.container}>
            <Text style={communStyle.title}>List 2</Text>
            <Link href="/interno/list" style={[communStyle.button, communStyle.buttonText]}>Go to List</Link>
        </View>
    )
}
