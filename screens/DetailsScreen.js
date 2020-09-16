import React from 'react'
import { connect } from 'react-redux'

import {
    Image,
    View,
    Text
  } from 'react-native';

const Details = ({navigation, characters, locations, episodes}) => {

  const cid = navigation.getParam('cid')
  const valor = navigation.getParam('valor')
  const idselected = characters.find(char => char.id === cid)
  const locidselected = locations.find(loc => loc.id === cid)
  const episodeselected = episodes.find(ep => ep.id === cid) 

  return(
  <View>
            {valor === 'Characters' && <Text>{idselected.name}</Text>}
            {valor === 'Locations' && <Text>{locidselected.name}</Text>}
            {valor === 'Episodes'&& <Text>{episodeselected.name}</Text>}
            {valor === 'Characters' && <Image source={{uri: idselected.image}} style={{ width: 200, height: 200 }}/>}
            {valor === 'Characters' && <Text>{idselected.type}</Text>}
            {valor === 'Characters' && <Text>{idselected.gender}</Text>}
            {valor === 'Characters' && <Text>{idselected.species}</Text>}
            {valor === 'Episodes' && <Text>{episodeselected.species}</Text>}
            {valor === 'Locations' && <Text>{locidselected.dimension}</Text>}
            {valor === 'Locations' && 
            <>
            <Text>Residents:</Text>
            <Text>{locidselected.residents.map((resident, i)=>{
              if(i<5){
              return(
                `${resident.name} - `
              )}
            })}</Text>
            </>}
            {valor === 'Episodes' && 
            <>
            <Text>Characters:</Text>
            <Text>{episodeselected.characters.map((char, i)=>{
              if(i<5){
              return(
                `${char.name} - `
              )}
            })}</Text>
            </>}
        </View>
       
    )
  }


function mapState({ data }) {

  return {
      characters: data.character,
      locations: data.location,
      episodes: data.episode
  }
}


export default connect(mapState)(Details)