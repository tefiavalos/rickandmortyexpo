import React, { useState } from 'react'
import { connect } from 'react-redux'
import Render from '../components/Render'
import Card from '../components/Card'
import Search from '../components/Search'

import { nextPageEpisodesAction, prevPageEpisodesAction } from '../redux/dataDuck'

import {
    View
} from 'react-native';

const Episodes = ({ episodes, navigation, nextPageEpisodesAction, prevPageEpisodesAction}) => {
    const [formSearch, setFormSearch] = useState('');

    function renderEpisode(episode, i) {
        return (
            <Card {...episode} episodeCharacter={episode.characters} key={i} navigation={navigation}/>         
        )
    }

    const handleChange = (text) => {
        setFormSearch(text);
    }

    return (
        <View>
        <Search handleChange={handleChange} formSearch={formSearch}></Search>
        <Render 
        handleClick={nextPageEpisodesAction} 
        handleClickPrev={prevPageEpisodesAction}
        render={renderEpisode} 
        data={episodes}
        formSearch={formSearch}></Render>
        </View>

    )
}

function mapState({ data }) {

    return {
        episodes: data.episode,
    }
}


export default connect(mapState, { prevPageEpisodesAction, nextPageEpisodesAction })(Episodes)