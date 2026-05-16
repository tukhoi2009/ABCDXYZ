import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const Ten = "Tu Minh Khoi"
  let age = 17
  let address = "Mars "
  let email = "tukhoi2009@gmail.com"
  let isStudent = true
  console.log(Ten)
  

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nguyen Quoc Chung</Text>
      <TextInput placeholder='Enter your name' style={styles.input} />
      <TextInput placeholder='Enter your name' style={styles.input} />
      <Image style={{ width: 200, height: 100 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-4FA86cGLPHj6HgIMc7lcYwbw2kXfj3Omg&s' }} />
      <Image style={{ width: 200, height: 100 }} source={require('./assets/bg-sky.png')} />
      <Text>Hello World</Text>
      <TouchableOpacity style={{ backgroundColor: "green", borderWidth: 4, borderColor: "#d0d3d6", borderRadius: 10, padding: 10, marginTop: 30 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Click me</Text>
      </TouchableOpacity>
      <View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "red",
    fontWeight: "900",
    fontSize: 40,
    fontFamily: "Roboto",
    backgroundColor: 'blue'
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#d0d3d6",
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
Text:
color: Màu chữ;
fontWeight: Độ đậm của chữ;
fontSize: Kích thước chữ;
fontFamily: Font chữ;
backgroundColor: Màu nền;

Box Model:
width: Chiều rộng;
height: Chiều cao;
borderWidth: Độ rộng viền;
borderColor: Màu viền;
borderRadius: Bo tròn viền;
padding: Khoảng cách giữa nội dung và viền;
margin: Khoảng cách giữa các phần tử;
*/