import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setname] = useState('ege');
  const [person, setperson] = useState({name:"mert", age:22})

  const clickHandler = () => {
    setname('Doruk');
    setperson({name:'ismail', age:20})
  }
  return (
  
    <View style={styles.container}>
      <Text>Hi my name is {name}</Text> 
      <Text>This is my friend {person.name}</Text> 
      <Text>Hi is {person.age} years old</Text> 

      <Text style={styles.pinkText}>Orange</Text>
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
  }
});
