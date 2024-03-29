import { StyleSheet, View } from "react-native";
import { Button } from "../components/Button";

export function InitialPage(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Button 
                    label="Entrar"
                    action={() => navigation.navigate("Entrar")} 
                />
                <Button 
                    label="Criar Nova Conta"
                    action={() => navigation.navigate("Criar Conta")}
                />
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
    card: {
        backgroundColor: '#fff',
        padding: 10,
        gap: 10,
        borderRadius: 8,
    },
});