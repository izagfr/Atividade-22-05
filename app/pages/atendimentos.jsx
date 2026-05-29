import { View, Text, StyleSheet, FlatList } from 'react-native';
import { atendimentos } from '../dados/profissionais';

export default function Atendimentos() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atendimentos</Text>

            <FlatList
                data={atendimentos}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.pet}>🐶 {item.pet}</Text>

                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Serviço:</Text>
                            <Text style={styles.info}>{item.servico}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Horário:</Text>
                            <Text style={styles.info}>{item.horario}</Text>
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
        padding: 18,
        borderRadius: 16,
        marginBottom: 15,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,

        elevation: 5,
    },

    pet: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 12,
    },

    infoContainer: {
        flexDirection: 'row',
        marginBottom: 6,
    },

    label: {
        fontWeight: 'bold',
        color: '#555',
        marginRight: 5,
    },

    info: {
        color: '#666',
        fontSize: 15,
    },
});