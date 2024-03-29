import { Pressable, Text, StyleSheet, Platform } from "react-native"

export function Button({ label, action }) {
    return (
        <Pressable 
            style={styles.btn}
            onPress={action}
        >
            <Text style={styles.btnLabel}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        borderRadius: 7,
        ...Platform.select({
            android: {
                backgroundColor: '#899878',
            },
            ios: {
                backgroundColor: '#9b2226',
            },
            web: {
                backgroundColor: '#9b2226',
            },
        })
    },
    btnLabel: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16,
    },
});