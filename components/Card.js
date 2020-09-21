import React, { useState } from 'react'
import { connect } from 'react-redux'
import CardButton from './CardButton'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

const Card = ({
    name, image, dimension, episode, navigation, id
}) => {

    const handleClick = () => {
        return(
        navigation.navigate({
            routeName: 'Details', params: {
                cid: id,
                valor: navigation.state.routeName
            }
        }))
    }

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {image ? <Image className="data-image" alt={name} source={{ uri: image }} style={styles.image} /> :
                        <Text style={styles.text}>{dimension || episode}</Text>}
                    <Text style={styles.text}>
                        {name}
                    </Text>
                    <CardButton style={styles.button} handleClick={handleClick} text={'+'}/>
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#D2A884',
        borderRadius: 5
    },
    image: {
        width: 100, 
        height: 100 
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'kufam',
        color: '#796589'
    }
});

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    dimension: PropTypes.string,
    episode: PropTypes.string,
    navigation: PropTypes.any,
    id: PropTypes.string
}

function mapState({ data }) {

    return {
        episodesid: data.episode.id,
        charactersid: data.character.id,
        locationsid: data.location.id,
    }
}


export default connect(mapState)(Card)