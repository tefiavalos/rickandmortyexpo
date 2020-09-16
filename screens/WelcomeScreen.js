import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
 
  const Welcome = props => {
    let today = new Date()
    let date = `${today.getDate()}-${(today.getMonth())}-${(today.getFullYear())}`

    return (
          <View style={styles.container}>
            <Text style={styles.text}>REACT NATIVE PROJECT</Text>
            <Text style={styles.text}>Estefania Avalos</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{
                props.navigation.navigate({routeName: 'Categories'});}}>
            <Text style={styles.textButton}>Enter</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{date}</Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    margin: 10
  },
  button: {
  width: 100,
  backgroundColor: '#9882A7',
  color: '#eee',
  padding: 5,
  borderRadius: 5,
  margin: 10
},
textButton:{
  textAlign: 'center',
  color: '#eee',
  fontWeight: '600',
  fontSize: 20
}
});

export default Welcome