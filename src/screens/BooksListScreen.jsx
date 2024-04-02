import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { BookList } from "../components/BookList";

export function BooksListScreen(props) {
    const { navigation } = props;
    const [books, setBooks] = useState(null);
    const [bookFilter, setBookFilter] = useState('');
    const [msg, setMsg] = useState(null);

    const onPressBook = (book) => {
        navigation.navigate("Details", { book: book })
    }

    useEffect(() => {
        async function loadBooks() {
          try {
            const url = 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json';
            const request = await fetch(url);
            const booksJson = await request.json();
            setBooks(Object.values(booksJson));
          } catch (error) {
            setMsg(error.message)
          }
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
            {msg && <Text style={styles.errorMsg}>{msg}</Text>}
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
    errorMsg: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },
});