import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function LoginPage() {
    const fruits = ["Apple", "Orange", "Tomato"]



    const age =  [2,4,6,8,10,5,7,9,7]
    const age_2 = [...age,1000, 200]
    const  names = ["Nam", "Hùng", "Khoa", "Anh", "Minh", "Đạt"]
    console.log(age_2[10])

    return (
        <View>
                <Text>LOGIN</Text>
                {
                    names.map((name) => (
                        <Text>{name}</Text>
                    ))
                }
                {
                    names.filter((name) => name != "Nam" && name != "Minh" && name != "Anh").map((name) => (
                        <Text>{name}</Text>
                    ))
                }
                for 


        </View>


        
    
    );
}
