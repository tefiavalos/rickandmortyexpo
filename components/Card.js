import React, { useState } from 'react'


import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Modal,
    Button,
    Image
} from 'react-native';

export default function Card({
    name, image, dimension, episode, type, created, gender, species, residents, episodeCharacter
}) {

    const [modal, setModal] = useState(false)

    return (
        <>
            <ScrollView>
                <View className="container">
                    <Text>
                        {name}
                    </Text>
                    {image ? <Image className="data-image" alt={name} source={{ uri: image }} style={{ width: 200, height: 200 }} /> :
                        <Text >{dimension || episode}</Text>}
                        <Button className='button-card'  onPress={() => {setModal(true)}}  title='see more'/>
                    </View> 
            </ScrollView>
            <Modal visible={modal} animationType='fade'>
                        <Text>{type}</Text>
                        <Text>{created}</Text>
                        <Text>{gender}</Text>
                        <Text>{species}</Text>
                        {image && <Image className="data-image" alt={name} source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        {residents && residents.map((resident, i) => {
                            if(i < 5){
                                return(
                                    <Text key={i}>{resident.name}</Text>
                                )
                            }
                        })}
                        {episodeCharacter && episodeCharacter.map((character, i) => {
                            if(i < 5){
                                return(
                                <Text key={i}>{character.name}</Text>
                                )
                            }
                        })} 
                        <View style={styles.button}>
                        <Button onPress={() => { return (setModal(false)) }} title='cerrar'></Button>
                    </View>
                    </Modal>
                    
        </>
    )
}

const styles = StyleSheet.create({
                button: {
                width: 200
    },
  });