import { Image, StyleSheet, Text, Pressable } from "react-native";

export function BookCard({ title, cover, author, action }) {
    return (
        <Pressable 
            style={styles.container}
            onPress={action}
        >
            <Image 
                source={{ uri: cover }}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <Text>{author}</Text>
        </Pressable>  
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '48%',
        margin: 4,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },
    image: {
        height: 250,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
});