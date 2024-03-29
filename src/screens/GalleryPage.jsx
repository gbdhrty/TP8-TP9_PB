import { Image, StyleSheet, ScrollView } from "react-native";
import { images } from "../components/TakePicture";

export function GalleryPage() {
    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {images.length > 0 && images.map((img, index) => (
                <Image style={styles.image} source={{ uri: img }} key={index} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    image: {
        flex: 1,
        width: '100%',
        height: 500,
        marginBottom: 8,
    },
});