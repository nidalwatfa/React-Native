
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>React Native</Text>
      </View>

      <Text style={styles.cardTitle}>
        محاكمة الكترونية
      </Text>

      <Text style={styles.cardTitle}>
        تجربة ديمو أولى للمطور نضال
      </Text>

      {/* Button example 1 */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>عرض</Text>
      </TouchableOpacity>
      
      {/* Button example 2 */}
      <TouchableOpacity style={styles.buttonOutlineText}>
        <Text style={styles.text}>عرض</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#16213e',
  },
  titleText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    color: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00ddff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonOutlineText: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,
    borderColor: '#00ddff',
    borderWidth: 1,
  },
});

export default App;
