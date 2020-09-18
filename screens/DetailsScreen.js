import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

const Details = ({ navigation, characters, locations, episodes }) => {
  const cid = navigation.getParam('cid')
  const valor = navigation.getParam('valor')
  const idselected = characters.find(char => char.id === cid)
  const locidselected = locations.find(loc => loc.id === cid)
  const episodeselected = episodes.find(ep => ep.id === cid)

  const residentsDetail = () => {
    return(
      locidselected.residents.map((resident, i) => {
        if (i < 5) {
          return (
            <Text key={i} style={{ color: '#9882A7' }}>{resident.name}</Text>
          )
        }
      })
    )
  }

  const charactersInEpisodes = () => {
    return(
    episodeselected.characters.map((char, i) => {
      if (i < 5) {
        return (
          <Text key={i} style={{ color: '#9882A7' }}>{char.name}</Text>
        )
      }
    })
    )
  }

  return (
    <View style={styles.container}>
      {valor === 'Characters' && <Text style={styles.text}>{idselected.name}</Text>}
      {valor === 'Locations' && <Text style={styles.text}>{locidselected.name}</Text>}
      {valor === 'Episodes' && <Text style={styles.text}>{episodeselected.name}</Text>}
      {valor === 'Characters' && <Image source={{ uri: idselected.image }} style={styles.image} />}
      {valor === 'Characters' && <Text style={styles.text}>{idselected.type}</Text>}
      {valor === 'Characters' && <Text style={styles.text}>{idselected.gender}</Text>}
      {valor === 'Characters' && <Text style={styles.text}>{idselected.species}</Text>}
      {valor === 'Episodes' && <Text style={styles.text}>{episodeselected.species}</Text>}
      {valor === 'Locations' && <Text style={styles.text}>{locidselected.dimension}</Text>}
      {valor === 'Locations' &&
        <>
          <Text style={styles.text}>Residents:</Text>
          <View>{residentsDetail()}</View>
        </>}
      {valor === 'Episodes' &&
        <>
          <Text style={styles.text}>Characters:</Text>
          <View>{charactersInEpisodes()}</View>
        </>}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CABCD3'
  },
  image: {
width:200,
height: 200
  },
  text: {
    fontSize: 30,
    color: '#9882A7'
  },
});

function mapState({ data }) {

  return {
    characters: data.character,
    locations: data.location,
    episodes: data.episode
  }
}

Details.propTypes = {
  navigation: PropTypes.any,
  characters: PropTypes.array,
  locations: PropTypes.array,
  episodes: PropTypes.array
}

export default connect(mapState)(Details)