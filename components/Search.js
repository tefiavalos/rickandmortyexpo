import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
  } from 'react-native';
export default function Search({handleChange, formSearch}) {
    return (
          <View>
            <TextInput type="text" placeholder="Search" onChangeText={handleChange}
                value={formSearch} name="Characters"/>
                </View>
       
    )
}