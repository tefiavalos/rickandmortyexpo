import React from 'react'
import { Button } from 'react-native'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native'

export default function Filter({ filter }) {
    return (
        <View className='container-filter'>
            <Text class="container-input">
                
                <Button onPress={filter} title='characters'/>
            </Text>
            <Text  class="container-input">
                
                <Button onPress={filter} value='location' title='locations'/>
            </Text>
            <Text class="container-input">
                
                <Button onPress={filter} value='episode'  title='episodes'/>
            </Text>
        </View>
    )
} 