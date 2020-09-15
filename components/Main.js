import React, { useState } from 'react'
import Filter from './Filter'
import Search from './Search'
import Render from './Render' 
import Card from './Card'
import { connect } from 'react-redux'
import { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction } from '../redux/dataDuck'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput
  } from 'react-native';


function Home({ characters, nextPageAction, location, episode, fetching, 
    nextPageEpisodesAction, nextPageLocationAction, prevPageAction, nextPage }) {
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

   /*  function filter(text) {
        return (
            setValor(text)
        )
    }
 */
    const handleChange = (text) => {
        setFormSearch(text);
        console.log(formSearch)
    } 

    /* if(fetching){
        return(
            <Loading message={'Mientras carga, toma tu birrita'}/>
        )
    }  */

    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.containerButtons}>
                <View style={styles.button}>
                <Button onPress={() =>setValor("characters")} value="characters" title='characters'/>
                </View>
                <View style={styles.button}>
                <Button onPress={() =>setValor("location")} value="location" title='locations'/>
                </View>
                <View style={styles.button}>
                <Button onPress={() =>setValor("episode")}  title='episodes'/>
                </View>
        </View>
            <View className="card-container">
            {valor === "characters" &&
            <>
            <View>
            <TextInput type="text" placeholder="Search" onChangeText={handleChange}
                value={formSearch} name="Characters"/>
                </View>
            <Render 
            handleClickPrev={prevPageAction}
            handleClick={nextPageAction} 
            render={renderCharacter} 
            data={characters}
            valor={valor}
            formSearch={formSearch}></Render>
            </>
            }
            {valor === "episode" &&
            <>
            <Search handleChange={handleChange} formSearch={formSearch}></Search>
            <Render 
            handleClick={nextPageEpisodesAction} 
            render={renderEpisode} 
            data={episode}
            valor={valor}
            formSearch={formSearch}></Render>
            </>
            }
            {valor === "location" &&
            <>
            <Search handleChange={handleChange} formSearch={formSearch}></Search>
            <Render 
            handleClick={nextPageLocationAction} 
            render={renderLocation}
            data={location}
            valor={valor}
            formSearch={formSearch}></Render>
            </>
            }
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