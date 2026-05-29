import { View, Text, StyleSheet, FlatList } from 'react-native';
import { profissionais } from '../dados/profissionais';

export default function Profissionais() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>👨‍⚕️ Profissionais</Text>

            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => (
                    <View style={styles.card}>

                        <View style={styles.avatar}>
                            <Text style={styles.avatarTexto}>
                                {item.nome.charAt(0)}
                            </Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.nome}>
                                {item.nome}
                            </Text>

                            <Text style={styles.especialidade}>
                                {item.especialidade}
                            </Text>
                        </View>

                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        padding: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 18,
        marginBottom: 15,

        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 5,
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#5b7cfa',

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 15,
    },

    avatarTexto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    info: {
        flex: 1,
    },

    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 5,
    },

    especialidade: {
        fontSize: 15,
        color: '#666',
    },

});