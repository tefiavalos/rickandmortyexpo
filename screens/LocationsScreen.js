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

const Locations = ({ locations }) => {
    const [formSearch, setFormSearch] = useState('');

    function renderLocations(location, i) {
        return (
        
            <Card {...location}  key={i} />
         
        )
    }

    const handleChange = (text) => {
        setFormSearch(text);
    }

    return (
        <>
            <Search handleChange={handleChange} formSearch={formSearch}></Search>
            <Render 
            handleClick={nextPageLocationAction} 
            render={renderLocations}
            data={locations}
            formSearch={formSearch}></Render>
            </>

    )
}

function mapState({ data }) {

    return {
        locations: data.location,
    }
}


export default connect(mapState, { prevPageAction, nextPageLocationAction })(Locations)