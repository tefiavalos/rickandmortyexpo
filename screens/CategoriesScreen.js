import React from 'react'
import PropTypes from 'prop-types';
import GeneralButton from '../components/GeneralButton'
import { connect } from 'react-redux'
import { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction } from '../redux/dataDuck'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Qué querés buscar?</Text>
            <View style={styles.containerButtons}>
                <GeneralButton handleClick={() => { navigation.navigate({ routeName: 'Characters' }) }}
                    value="characters"
                    text="Characters" />

                <GeneralButton handleClick={() => { navigation.navigate({ routeName: 'Locations' }) }}
                    value="location"
                    text='Locations' />

                <GeneralButton handleClick={() => { navigation.navigate({ routeName: 'Episodes' }) }}
                    value="episode"
                    text='Episodes' />
            </View>
        </View>

    )
}

Home.propTypes = {
    navigation: PropTypes.any
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDB796'
    },
    text: {
        fontSize: 25,
        margin: 10,
        fontFamily: 'kufam',
        color: '#796589'
    },
    button: {
        width: 200,
        backgroundColor: '#9882A7',
        color: '#eee',
        padding: 5,
        borderRadius: 5,
        margin: 10,
        fontFamily: 'kufam'
    },
    textButton: {
        textAlign: 'center',
        color: '#eee',
        fontWeight: '600',
        fontSize: 20
    }
});



export default connect(mapState, { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction })(Home)