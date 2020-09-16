import React, { useState } from 'react'
import { connect } from 'react-redux'
import Render from '../components/Render'
import Card from '../components/Card'
import Search from '../components/Search'

import { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction } from '../redux/dataDuck'

import {
    View,
    TextInput,
} from 'react-native';

const Characters = ({ nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction, characters, navigation }) => {
    const [formSearch, setFormSearch] = useState('');

    function renderCharacter(chars, i) {
        return (
            <Card {...chars} key={i} navigation={navigation}/>
        )
    }

    const handleChange = (text) => {
        setFormSearch(text);
    }

    return (
        <>
            <View>
                <TextInput type="text" placeholder="Search" onChangeText={handleChange}
                    value={formSearch} name="Characters" />
            </View>
            <Render
                handleClickPrev={prevPageAction}
                handleClick={nextPageAction}
                render={renderCharacter}
                data={characters}
                formSearch={formSearch}></Render>
        </>

    )
}

function mapState({ data }) {

    return {
        characters: data.character,
    }
}


export default connect(mapState, { nextPageAction, prevPageAction })(Characters)