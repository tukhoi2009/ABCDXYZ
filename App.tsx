

 

import { StyleSheet, View } from 'react-native';
import Login from './src/pages/auth/login';

export default function App() {
  // JS logic
  return (
    // return JSX
    <View style={styles.container}>
      <Login/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});