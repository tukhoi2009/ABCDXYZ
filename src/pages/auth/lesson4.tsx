import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { useState } from 'react';

interface Student {
    ten: string;
    email: string;
    score: string;
    msv: string;
    status?: boolean;
}
export default function loginPage() {
   const [students, setStudents] = useState<Student[]>([
    {
        ten: "ABCDXYZ",
        email:"abcdxyz@gmail.com",
        score: "4",
        msv: "@67890"
    },

   ]);
   
    const [msv, setMSV] = useState("");
    const [ten, setTen] = useState("");
    const [email, setEmail] = useState("");
    const [score, setScore] = useState("");


    const handleLogin = () => {
        setStudents([
            ...students,
            {
                msv: msv,
                ten: ten,
                email: email,
                score: score,
            }
        ])
    }
    const Delete = (msv: string) => {
        setStudents(students.filter((student) => student.msv != msv));
    }

    return (
        <View>
            <TextInput placeholder = "Enter your name" value ={ten} onChangeText ={setTen}/>
            <TextInput placeholder = "Enter your email" value ={email} onChangeText ={setEmail}/>
            <TextInput placeholder = "MSV:" value ={msv} onChangeText ={setMSV}/>
            <TextInput placeholder = "Enter your score" value ={score} onChangeText ={setScore}/>
            <Button title = "Add Students information" onPress ={handleLogin}/>
            {
                students.map((student) => (
                    <View key ={student.msv}>
                        <Text>{student.ten}</Text>
                        <Text>{student.email}</Text>
                        <Text>{student.msv}</Text>
                        <Text>{student.score}</Text>
                        <Button title = "Delete" onPress= {() => Delete(student.msv)}/>
                    </View>
                ))
            }
          
        </View>
    )
}