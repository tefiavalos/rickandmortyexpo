import React, { useState } from 'react'
import { connect } from 'react-redux'
import Render from '../components/Render'
import Card from '../components/Card'
import Search from '../components/Search'
import PropTypes from 'prop-types';

import { prevPageLocationAction, nextPageLocationAction } from '../redux/dataDuck'

const Locations = ({ locations, navigation, prevPageLocationAction, nextPageLocationAction }) => {
    const [formSearch, setFormSearch] = useState('');

    function renderLocations(location, i) {
        return (
            <Card {...location} key={i} navigation={navigation} />
        )
    }

    const handleChange = (text) => {
        setFormSearch(text.toLowerCase());
    }

    return (
        <>
            <Search handleChange={handleChange} formSearch={formSearch}></Search>
            <Render
                handleClick={nextPageLocationAction}
                handleClickPrev={prevPageLocationAction}
                render={renderLocations}
                data={locations}
                formSearch={formSearch}></Render>
        </>

    )
}

Locations.propTypes = {
    locations: PropTypes.array,
    navigation: PropTypes.any,
    prevPageLocationAction: PropTypes.func,
    nextPageLocationAction: PropTypes.func
}

function mapState({ data }) {

    return {
        locations: data.location,
    }
}


export default connect(mapState, { prevPageLocationAction, nextPageLocationAction })(Locations)