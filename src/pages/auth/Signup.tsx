import { useState} from "react"
import { TextInput, Button, Text, View } from "react-native";

export default function SignUP() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
}
const Login = () => {
    console.log(username);
    console.log(password);
    console.log(fullname);
    console.log(email);
return (
     <View>
            <Text>LOGIN</Text>
             
            <TextInput placeholder ="Enter your fullname" value={fullname} onChangeText={setFullname}/>
            <TextInput placeholder ="Enter your email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder ="Enter your username" value={username} onChangeText={setUsername}/>
            <TextInput placeholder = "Enter your password"/>
            <Button title= "Login " onPress={Login}/>
           
       
       
        </View>
)