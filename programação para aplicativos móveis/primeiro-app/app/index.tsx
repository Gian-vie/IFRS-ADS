import { Text, View, StyleSheet, Image, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { Link } from "expo-router";
import { communStyle } from "./style/cummun";

export default function Index() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 480000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["86400deg","0deg"],
  });

  return (
    <View style={communStyle.container}>
      <Text style={communStyle.title}>o grande e foderoso titulo </Text>
      <Text style={communStyle.nottitle}>texto a baixo</Text>
      <Text style={communStyle.nottitle}>pedro pedro pedro</Text>
      <Link href="/list">
      <Animated.Image
      
        source={require("../assets/pedro.png")}
        style={[
          style.rotatingImage,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />
      </Link>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 100,
    justifyContent: "flex-start",
    // flexDirection: "column-reverse",
    alignItems: "center",
    backgroundColor: "rebeccapurple",
  },
  title: {
    fontSize: 44,
    fontFamily: "Old English Text MT",
    textShadowColor: "black",
    textShadowOffset: { width: 6, height: 6 },
    textTransform: "uppercase"
  },
  nottitle: {
    fontSize: 30,
    fontFamily: "Old English Text MT",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    // textTransform: "uppercase"
  },
  rotatingImage: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});
