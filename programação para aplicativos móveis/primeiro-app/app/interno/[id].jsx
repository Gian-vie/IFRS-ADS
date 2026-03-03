import { View, Text, StyleSheet, Button} from 'react-native'
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { communStyle } from "../style/cummun";


export default function() {

    const router = useRouter();
    {/* rota de retorno, evita ficar empilhando e "fingindo voltar"  */}
    const handleReturnButtonPress = () => {
        router.back();
    }

      const params = useLocalSearchParams()
    //   const idNumber = +params.id
    const backgroundColor = params.color
      console.log(params)
    return (
        <View style={[communStyle.container, {backgroundColor}]} >
            <Text style={communStyle.title}>[id].jsx</Text>
            <Text style={communStyle.nottitle}>ID: {params.id}</Text>
            
            <Button title="Go to Home" onPress={handleReturnButtonPress} style={[communStyle.button, communStyle.buttonText]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})