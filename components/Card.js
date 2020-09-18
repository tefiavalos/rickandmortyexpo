import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

const Card = ({
    name, image, dimension, episode, navigation, id
}) => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    {image ? <Image className="data-image" alt={name} source={{ uri: image }} style={styles.image} /> :
                        <Text >{dimension || episode}</Text>}
                    <Text style={styles.text}>
                        {name}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate({
                            routeName: 'Details', params: {
                                cid: id,
                                valor: navigation.state.routeName
                            }
                        });
                    }}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#CABCD3',
        borderRadius: 5
    },
    image: {
        width: 100, 
        height: 100 
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: '#9882A7',
        color: '#eee',
        padding: 5,
        borderRadius: 30,
        marginRight: 5
    },
    textButton: {
        textAlign: 'center',
        color: '#eee',
        fontWeight: '600',
        fontSize: 15
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