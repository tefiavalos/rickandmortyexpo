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
                
                <Button onPress={filter} value="characters" title='characters'/>
                
                <Button onPress={filter} value="location" title='locations'/>
                
                <Button onPress={filter} value="episode"  title='episodes'/>
        </View>
    )
} 