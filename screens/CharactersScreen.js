import React, { useState } from 'react'
import { connect } from 'react-redux'
import Render from '../components/Render'
import Card from '../components/Card'
import PropTypes from 'prop-types';

import { nextPageAction, prevPageAction } from '../redux/dataDuck'

import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';

const Characters = ({ nextPageAction, prevPageAction, characters, navigation }) => {
    const [formSearch, setFormSearch] = useState('');

    function renderCharacter(chars, i) {
        return (
            <Card {...chars} key={i} navigation={navigation} />
        )
    }

    const handleChange = (text) => {
        setFormSearch(text.toLowerCase());
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.input} type="text" placeholder="Search" onChangeText={handleChange}
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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    input: {
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderRadius: 5,
        height: 50,
        width: 300
    }
});

Characters.propTypes = {
    nextPageAction: PropTypes.func,
    prevPageAction: PropTypes.func,
    characters: PropTypes.array,
    navigation: PropTypes.any
};

function mapState({ data }) {

    return {
        characters: data.character,
    }
}


export default connect(mapState, { nextPageAction, prevPageAction })(Characters)