import React, { useState } from 'react'
import Filter from '../components/Filter'
import Search from '../components/Search'
import Render from '../components/Render' 
import Card from '../components/Card'
import { connect } from 'react-redux'
import { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction } from '../redux/dataDuck'

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    TextInput
  } from 'react-native';


function Home( { characters, nextPageAction, location, episode, fetching, 
    nextPageEpisodesAction, nextPageLocationAction, prevPageAction, nextPage, navigation }) {
      let [valor, setValor] = useState("characters")
    const [formSearch, setFormSearch] = useState('');

    function renderCharacter(chars, i) {
        return (
            
            <Card {...chars} key={i} />
       
        )
    }

    function renderLocation(location, i) {
        return (
  
            <Card {...location} key={i} />

        )
    }

    function renderEpisode(episode, i) {
        return (
        
            <Card {...episode} episodeCharacter={episode.characters} key={i} />
         
        )
    }

    const handleChange = (text) => {
        setFormSearch(text);
    } 

    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.containerButtons}>
                <View style={styles.button}>
                <Button onPress={() =>{
                        setValor("characters")
                        navigation.navigate({routeName: 'Characters'})}} value="characters" title='characters'/>
                </View>
                <View style={styles.button}>
                <Button onPress={() =>{
                        setValor("locations")
                        navigation.navigate({routeName: 'Locations'})}} value="location" title='locations'/>
                </View>
                <View style={styles.button}>
                <Button onPress={() =>{
                        setValor("episodes")
                        navigation.navigate({routeName: 'Episodes'})}}  title='episodes'/>
                </View>
        </View>
            
        </View> 
        </ScrollView>
    )
}

function mapState({ data }) {

    return {
        characters: data.character,
        nextPage: data.nextPage,
        location: data.location,
        episode: data.episode,
        fetching: data.fetching
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerButtons: {
        width: '100%',
        flexDirection: 'row'
    },
    button: {
      width: 120
    },
  });

export default connect(mapState, { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction })(Home)