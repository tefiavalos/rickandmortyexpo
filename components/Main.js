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
  } from 'react-native';


function Home({ characters, nextPageAction, location, episode, fetching, 
    nextPageEpisodesAction, nextPageLocationAction, prevPageAction, nextPage }) {
      let [valor, setValor] = useState("characters")
    let [page, setPage] = useState(1)
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

    function filter(e) {
        return (
            setValor(e.target.value)
        )
    }

    const handleChange = (e) => {
        setFormSearch(e.target.value);
    } 

    /* if(fetching){
        return(
            <Loading message={'Mientras carga, toma tu birrita'}/>
        )
    }  */
  console.log(characters)
    return (
        <ScrollView>
        <View>
         <Filter filter={filter}></Filter>
            <View className="card-container">
            {valor === "characters" &&
            <>
            <Search handleChange={handleChange} formSearch={formSearch}></Search>
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

export default connect(mapState, { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction })(Home)