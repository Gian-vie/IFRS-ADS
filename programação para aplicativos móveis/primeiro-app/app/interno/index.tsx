import { Text, View, ScrollView, StyleSheet, Image, Animated, Easing, Button} from "react-native";
import { useEffect, useRef } from "react";
import { Link, useRouter } from "expo-router";
import { communStyle } from "../style/cummun";
import { estados } from "../../mock/mockData";

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

  const router = useRouter();
  const handleDetailButtonPress = () => {
    router.push({
      pathname: "/interno/[id]",
      params: {id: 4, color: 'darkgreen'}
    });
  }

  return (
    <ScrollView contentContainerStyle={communStyle.container} showsVerticalScrollIndicator={true}>
      <Text style={communStyle.title}>o grande e foderoso titulo </Text>
      <Text style={communStyle.nottitle}>texto a baixo</Text>
      <Text style={communStyle.nottitle}>pedro pedro pedro</Text>
      <Link href="/interno/list">
      <Animated.Image
      
        source={require("../../assets/pedro.png")}
        style={[
          style.rotatingImage,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />
      </Link>
      <Link href="/interno/2" style={[communStyle.button, communStyle.buttonText]}>registro 2</Link>
      <Link href={{pathname: "/interno/[id]", params: {id: 3, color: '#851b35ff'}}} style={[communStyle.button, communStyle.buttonText]}>registro com pathname</Link>
      <Button style={communStyle.button} title="button" onPress={handleDetailButtonPress}>clique para detalhes</Button>
      {estados.map((estados) => (
        <Link key={estados.id} href={{pathname: "/interno/[id]", params: {id: estados.id, color: '#851b35ff'}}} style={[communStyle.button, communStyle.buttonText]}>{estados.sigla}</Link>
      ))
    }
    </ScrollView>
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
