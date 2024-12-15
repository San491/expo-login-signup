import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#050625",
    },
    avoidingView: {
        flex: 1,
        justifyContent: "center",
    },
    formContainer: {
        backgroundColor: "#050625",
        padding: 20,
        marginHorizontal: 0,
        marginBottom: 100,
        borderRadius: 0,
        elevation: 0,
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    description: {
        fontSize: 14,
        marginBottom: 20,
        color: "#fff",
    },
    input: {
        color: "white",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#5d62ff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    linkToggle: {
        color: "#7d81ff",
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
        marginTop: -5,
    },
    successBox: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 5,
        margin: 20,
        alignItems: "center",
    },
    successText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;