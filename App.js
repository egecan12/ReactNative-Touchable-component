import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
  
    {name:'Cara', id:"1"},
    {name:'mert', id:"2"},
    {name:'hakan', id:"3"},
    {name:'shantel', id:"4"},
    {name:'bourak', id:"5"},
    {name:'john', id:"6"},
    {name:'jason', id:"7"},

  
  ]);

  const PressHandler = (id) => {

    console.log(id)
    setPeople((people) => {
      return people.filter(person => person.id != id) })

  }
  return (

    <View style={styles.container}>
    
    <FlatList
      data={people}
      renderItem={({item}) =>(<TouchableOpacity onPress={() => PressHandler(item.id)  }>

      <Text style={styles.item}>{item.name}
    
      </Text>
      </TouchableOpacity>
      
      )}
      keyExtractor={(item) => item.id}
    />
{/* As a fundemantal it reads key value. But in case of the data is containing id, we should use key extrator */}

    </View>

    
  



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  item: {
    marginTop:40,
    padding:40,
    width:300,
    backgroundColor: '#f13',
    fontSize:24



  }


});
