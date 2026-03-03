import { Text } from "@react-navigation/elements";
import { View, Animated, Easing } from "react-native";
import { communStyle } from "../style/cummun";
import { Link } from "expo-router";
import { useEffect, useRef } from "react";

export default function ListScreen() {
    const bounceValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounceValue, {
            toValue: 1,
            duration: 600,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(bounceValue, {
            toValue: 0,
            duration: 600,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [bounceValue]);

    const bounce = bounceValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    });

    return (
        <View style={communStyle.container404}>
            <Animated.Text style={[communStyle.title404, { transform: [{ translateY: bounce }] }]}>
              404
            </Animated.Text>
            <Text style={communStyle.subtitle404}>Página não encontrada</Text>
            <Text style={communStyle.description404}>Desculpe, a página que você procura não existe.</Text>
            <Link href="/interno/" style={communStyle.button404}>
              <Text style={communStyle.buttonText}>Voltar ao Início</Text>
            </Link>
        </View>
    )
}