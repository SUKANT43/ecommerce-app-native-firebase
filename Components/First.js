import { View, Text, StatusBar, Button, Image, StyleSheet, TextInput, ScrollView, Pressable, Modal } from "react-native";
import logo from "../assets/logo.png";
import New from "./New";
import { use, useState } from "react";
export default function First() {
   const[newAccount,setNewAccount]=useState(false);
    function click(){
        setNewAccount(true);
    }
    return (
        <View style={styles.main}>
           <View style={styles.header}>
                <Text style={styles.title}>Login here</Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>
            </View>
            <StatusBar />
            <Image source={logo} style={styles.logo} />
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
            </View>
            <View>
                <Text style={styles.forgot}>Forgot your password?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sign in" color={"#1f41ba"} />
            </View>
            <View>
                <Pressable>
                <Text  style={styles.create} onPress={click}>Create new account</Text>
                </Pressable>
            </View>
            
          <Modal visible={newAccount} animationType="slide">
                <New/>
          </Modal>
            
           
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        textAlign: "center",
        padding: 20
    },
    header: {
        marginVertical: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1f41ba"
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold"
    },
    logo: {
        width: 200,
        height: 200,
        marginVertical: 20
    },
    inputContainer: {
        width: "100%",
        marginLeft:40
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: 300,
        borderRadius:10,
    },
    forgot: {
        color: "#1f41ba",
        marginBottom: 20
    },
    buttonContainer: {
        marginVertical: 10,
        width: 200,
        borderRadius: 20,
        overflow: "hidden"
    },
    create: {
        marginTop: 20,
        color: "#898989"
    }
});
