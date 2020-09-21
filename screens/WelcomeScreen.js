import React from 'react'
import GeneralButton from '../components/GeneralButton'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Welcome = props => {
  let today = new Date()
  let date = `${today.getDate()}-${(today.getMonth())}-${(today.getFullYear())}`

  return (
    <View style={styles.container}>
      <Text style={styles.text}>REACT NATIVE PROJECT</Text>
      <Text style={styles.text}>Estefania Avalos</Text>
      <GeneralButton handleClick={() => {props.navigation.navigate({ routeName: 'Categories' });
      }}
      text={'Entrar'}/>
      <Text style={styles.text}>{date}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDB796'
  },
  text: {
    fontSize: 25,
    margin: 10,
    color: '#796589',
    fontFamily: 'kufam'
  }
});

export default Welcome