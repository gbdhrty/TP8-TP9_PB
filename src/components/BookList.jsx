import { StyleSheet, FlatList } from "react-native";
import { BookCard } from "./BookCard";

export function BookList({ books, action }) {
    const renderItem = ({ item }) => (
        <BookCard {...item} action={() => action(item)} />
    );
  
    return (
        <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={(item) => item.ISBN}
            numColumns={2}
            columnWrapperStyle={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
    }
});