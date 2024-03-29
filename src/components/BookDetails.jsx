import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

export function BookDetails({ route }) {
    const { book } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Image 
                    source={{ uri: book.cover }} 
                    style={styles.image}
                />
                <Text style={styles.title}>
                    {book.title}
                </Text>
                <Text style={styles.boldText}>
                    Autor:
                </Text>
                <Text>{book.author}</Text>
                <Text style={styles.boldText}>
                    Gênero:
                </Text>
                <Text>{book.genre}</Text>
                <Text style={styles.boldText}>
                    Avaliação:
                </Text>
                <Text>{book.rating}/5</Text>
                <Text style={styles.boldText}>
                    Sinopse:
                </Text>
                <Text>{book.synopsis}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    scrollContainer: {
        width: '100%',
    },
    image: {
        height: 600,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 4,
    },
    boldText: {
        fontWeight: 'bold',
    },
});