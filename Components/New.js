import { View, Text, StatusBar, TextInput, Button, Image, StyleSheet, Pressable, Modal } from "react-native";
import logo from "../assets/logo.png";
import First from "./First";
import { useState } from "react";
export default function New() {
    const[alredyHave,setAleadyHave]=useState(false);
    const bool=false;
function click(){
    setAleadyHave(true);
}
    return (
        <View style={styles.main}>
            <StatusBar />
            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
            </View>
            <View style={styles.subHeader}>
                <Text style={styles.subtitle}>
                    Create an account so you can explore all the Products
                </Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    placeholderTextColor="#666"
                />
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                     
                    placeholderTextColor="#666"
                />
                <TextInput 
                    placeholder="Confirm Password" 
                    style={styles.input} 
                     
                    placeholderTextColor="#666"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign up" color="#1f41ba" />
            </View>
            <Pressable>
            <Text style={styles.footerText} onPress={click}>Already have an account</Text>
            </Pressable>
            <Modal visible={alredyHave} animationType="slide">
            <First/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        
    },
    header: {
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1f41ba"
    },
    subHeader: {
        marginBottom: 20,
        paddingHorizontal: 20,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center"
    },
    logoContainer: {
        marginVertical: 30
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    inputContainer: {
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: "100%",
        backgroundColor: "#fff",
        shadowColor: "#1f41ba",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5
    },
    buttonContainer: {
        marginVertical: 20,
        width: "80%",
        borderRadius: 10,
        overflow: "hidden"
    },
    footerText: {
        marginTop: 20,
        color: "#898989"
    }
});
