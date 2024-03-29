import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase';
import { Button } from "../components/Button";

export function SignUpScreen(props) {
    const { navigation } = props;

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [msg, setMsg] = useState(null);

    async function verifyUser() {
        try {
            const auth = getAuth(firebase);
            const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            navigation.navigate("Home");
        } catch (error) {
            setMsg(error.message);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.formCard}>
                <Text>Email:</Text>
                <TextInput 
                    style={styles.input} 
                    value={userEmail}
                    onChangeText={setUserEmail}
                    keyboardType="email-address"
                />
                <Text>Senha:</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    value={userPassword}
                    onChangeText={setUserPassword}
                />
                <View style={styles.btnContainer}>
                    <Button 
                        label="Criar"
                        action={verifyUser}
                    />
                </View>
                {msg && <Text>{msg}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    formCard: {
        backgroundColor: '#fff',
        padding: 10,
        gap: 4,
        borderRadius: 8,
    },
    input: {
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 4,
    },
    btnContainer: {
        marginTop: 8,
    },
});