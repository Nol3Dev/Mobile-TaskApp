import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

    },

    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#f92e6a"
    },

    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottonWidth: 1,
        borderBottonColor: "#f92e6a",
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    buttonNewTask: {
        width: 60,
        height: 60,
        botton: 30,
        left: 20,
        backgroundColor: "#f92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    iconButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
     }
});

export default styles