import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.card}>

                <Text style={styles.titulo}>🐾 Sesi Pet</Text>
                <Text style={styles.subtitulo}>
                    Bem-vindo! Faça login para continuar
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Insira seu e-mail'
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder='********'
                    placeholderTextColor="#999"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={() => navigation.replace('Principal')}
                >
                    <Text style={styles.textoBotao}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botaoCadastro}
                    onPress={() => navigation.navigate('Registro')}
                >
                    <Text style={styles.textoCadastro}>
                        Não possui conta? Cadastre-se
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f4f6fb',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 6,
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#f1f3f6',
        borderRadius: 12,
        padding: 15,
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
    },

    botaoLogin: {
        backgroundColor: '#5b7cfa',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    botaoCadastro: {
        marginTop: 20,
        alignItems: 'center',
    },

    textoCadastro: {
        color: '#5b7cfa',
        fontSize: 15,
        fontWeight: '600',
    },

});