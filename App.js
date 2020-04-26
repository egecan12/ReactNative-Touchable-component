import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('ege');
  const [age, setAge] = useState(23)

  const clickHandler = () => {
    <Text>Hi my name is {name}</Text> 

  }
  return (

    <View style={styles.container}>
    <Text>What is your name?</Text> 

      <TextInput style={styles.input} placeholder={'name please e.g John '} onChangeText={(val)=>setName(val)}></TextInput>
      <Text>What is your age?</Text> 

      <TextInput style={styles.input} placeholder={'age please e.g 23'} keyboardType='numeric' onChangeText={(val)=>setAge(val)}></TextInput>
{/* Burada ki ananonim fonksyonlar valueyu otomatik olarak aliyor */}
      <Text>Hi my name is {name} and my age is {age}</Text> 

      <Button title='update state' onPress={clickHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinkText: {
    color: '#FF5733',
  },
  input: {
    borderWidth:4,
    borderColor:'#000000',
    padding:15,
  
  }
});
