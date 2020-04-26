import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, ScrollViewComponent } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
   {name:'mike', key:"1"},
    {name:'mert', key:"2"},
    {name:'hakan', key:"3"},
    {name:'shantel', key:"4"},
    {name:'bourak', key:"5"},
    {name:'john', key:"6"},
    {name:'jason', key:"7"},

  
  ]);

  const clickHandler = () => {
    <Text>Hi my name is {name}</Text> 

  }
  return (

    <View style={styles.container}>
    
    <ScrollView>
    {people.map((item)=>{
     return(
       <View key={item.key}>
         <Text style={styles.item}>{item.name}</Text>
       </View>
     )
    })}
    </ScrollView>

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
