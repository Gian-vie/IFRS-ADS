import { useAuth } from '@/context/auth';
import { Redirect } from 'expo-router';
import { Button, View } from 'react-native';

export default function Login() {
    const { isLogged, login } = useAuth();

    if (isLogged) return <Redirect href="/" />;

    function handleLogin() {
        login();
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
        <Button title="Login" onPress={() => login()} />
        </View>
    );
}   