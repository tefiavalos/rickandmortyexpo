import React from 'react'
import {
    View,
    Text,
    Button
  } from 'react-native';
 
  const Welcome = props => {
    return (
          <View>
            <Text>WELCOME</Text>
            <Text>Estefania Avalos</Text>
            <Button title='Enter' onPress={()=>{
                props.navigation.navigate({routeName: 'Categories'});}}/>
        </View>
       
    )
}

export default Welcome