import React, { useState } from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction } from '../redux/dataDuck'

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


function Home({ characters, nextPageAction, location, episode, fetching,
    nextPageEpisodesAction, nextPageLocationAction, prevPageAction, nextPage, navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Qué querés buscar?</Text>
            <View style={styles.containerButtons}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate({ routeName: 'Characters' })
                    }} value="characters">
                        <Text style={styles.textButton}>Characters</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate({ routeName: 'Locations' })
                    }} value="location" >
                        <Text style={styles.textButton}>Locations</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate({ routeName: 'Episodes' })
                    }} >
                        <Text style={styles.textButton}>Episodes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 25,
        margin: 10
      },
    button: {
        width: 200,
        backgroundColor: '#9882A7',
        color: '#eee',
        padding: 5,
        borderRadius: 5,
        margin: 10
    },
    textButton: {
        textAlign: 'center',
        color: '#eee',
        fontWeight: '600',
        fontSize: 20
    }
});

export default connect(mapState, { nextPageAction, nextPageEpisodesAction, nextPageLocationAction, prevPageAction })(Home)