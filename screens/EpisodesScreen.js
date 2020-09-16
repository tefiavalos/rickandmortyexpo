import React, { useState } from 'react'
import { connect } from 'react-redux'
import Render from '../components/Render'
import Card from '../components/Card'
import Search from '../components/Search'
import PropTypes from 'prop-types';


import { nextPageEpisodesAction, prevPageEpisodesAction } from '../redux/dataDuck'

const Episodes = ({ episodes, navigation, nextPageEpisodesAction, prevPageEpisodesAction }) => {
    const [formSearch, setFormSearch] = useState('');

    function renderEpisode(episode, i) {
        return (
            <Card {...episode} episodeCharacter={episode.characters} key={i} navigation={navigation} />
        )
    }

    const handleChange = (text) => {
        setFormSearch(text.toLowerCase());
    }

    return (
        <>
            <Search handleChange={handleChange} formSearch={formSearch}></Search>
            <Render
                handleClick={nextPageEpisodesAction}
                handleClickPrev={prevPageEpisodesAction}
                render={renderEpisode}
                data={episodes}
                formSearch={formSearch}></Render>
        </>

    )
}


Episodes.propTypes = {
    episodes: PropTypes.array,
    navigation: PropTypes.any,
    nextPageEpisodesAction: PropTypes.func,
    prevPageEpisodesAction: PropTypes.func,
}

function mapState({ data }) {

    return {
        episodes: data.episode,
    }
}


export default connect(mapState, { prevPageEpisodesAction, nextPageEpisodesAction })(Episodes)