import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native';


export default function Login() {
    const[username, setUsername] = useState("");
    const login = () => {
        console.log(username)
    }


 
   
    return (
       

        <View>
            <Text>LOGIN</Text>
            <TextInput placeholder ="Enter your username" value={username} onChangeText={setUsername}/>
            <TextInput placeholder = "Enter your password"/>
            <Button title= "Login " onPress={Login}/>
           
       
       
        </View>
    )
}