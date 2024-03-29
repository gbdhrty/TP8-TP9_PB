import { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { BookList } from "../components/BookList";

export function BooksListScreen(props) {
    const { navigation } = props;
    const [books, setBooks] = useState(null);
    const [bookFilter, setBookFilter] = useState('');

    const onPressBook = (book) => {
        navigation.navigate("Details", { book: book })
    }

    useEffect(() => {
        async function loadBooks() {
          const url = 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json';
          const request = await fetch(url);
          const booksJson = await request.json();
          setBooks(Object.values(booksJson));
        }
    
        loadBooks();
    }, []);

    function filteredBookList() {
        let bookList = [...books];
        const searchTerm = bookFilter.toLocaleLowerCase();
        if (bookFilter.length > 1) {
          bookList = bookList.filter(book => {
            return book.title.toLowerCase().includes(searchTerm) ||
                   book.author.toLowerCase().includes(searchTerm) ||
                   book.genre.toLowerCase().includes(searchTerm);
          });
        }
        return bookList;
      }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.filter}
                placeholder="Buscar livro..."
                value={bookFilter}
                onChangeText={setBookFilter}
            />
            {books && <BookList books={filteredBookList()} action={onPressBook} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
    },
    filter: {
        backgroundColor: '#fff',
        padding: 8,
        margin: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});