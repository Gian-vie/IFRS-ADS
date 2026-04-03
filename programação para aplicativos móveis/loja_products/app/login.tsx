import { useAuth } from '@/context/auth';
import { Redirect } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';

export default function Login() {
    
    const { isLogged, login } = useAuth();
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    if (isLogged) return <Redirect href="/" />;



    function handleLogin() {
        const req = {
            name: loginInput.trim(),
            password: passwordInput,
        };
        login(req);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#0f172a',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
            }}
        >
            <View
                style={{
                    width: '100%',
                    maxWidth: 380,
                    backgroundColor: '#1e293b',
                    borderRadius: 16,
                    padding: 24,
                    shadowColor: '#000',
                    shadowOpacity: 0.3,
                    shadowRadius: 12,
                    shadowOffset: { width: 0, height: 6 },
                    elevation: 8,
                }}
            >
                <Text
                    style={{
                        fontSize: 28,
                        color: '#e2e8f0',
                        marginBottom: 18,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Acesso ao sistema
                </Text>

                <TextInput
                    placeholder="Usuário"
                    placeholderTextColor="#94a3b8"
                    value={loginInput}
                    onChangeText={setLoginInput}
                    autoCapitalize="none"
                    style={{
                        backgroundColor: '#0f172a',
                        color: '#f8fafc',
                        borderRadius: 10,
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        marginBottom: 12,
                        borderWidth: 1,
                        borderColor: '#334155',
                    }}
                />

                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="#94a3b8"
                    secureTextEntry
                    value={passwordInput}
                    onChangeText={setPasswordInput}
                    style={{
                        backgroundColor: '#0f172a',
                        color: '#f8fafc',
                        borderRadius: 10,
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        marginBottom: 18,
                        borderWidth: 1,
                        borderColor: '#334155',
                    }}
                />

                <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                        backgroundColor: '#2563eb',
                        paddingVertical: 14,
                        borderRadius: 10,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}   