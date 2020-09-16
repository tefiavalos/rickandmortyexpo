import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
  } from 'react-native';
export default function Search({handleChange, formSearch}) {
    return (
      <View style={styles.container}>
            <TextInput style={styles.input} type="text" placeholder="Search" onChangeText={handleChange}
                value={formSearch}/>
                </View>
       
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
},
  input:{
    margin: 10,
    borderBottomColor: 'black', 
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 50,
    width: 300
  }
});
