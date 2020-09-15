import React, { useState } from 'react'
import ModalCard from '../components/Modal'

import {
    View,
    Text,
    Modal,
    Button
} from 'react-native';

export default function Modal(type, created, gender, species, residents, episodeCharacter){
    return (
        <Modal visible={modal} animationType='fade'>
            <Text>{type}</Text>
            <Text>{created}</Text>
            <Text>{gender}</Text>
            <Text>{species}</Text>
            {residents.map((resident, i)=>{
                i < 5 &&
            <Text>{resident.name}</Text>})}
            {episodeCharacter.map((character, i)=>{
                 i < 5 &&
            <Text>{character.name}</Text>})}
            <View style={styles.button}>
                <Button onPress={() => { return (setModal(false)) }} title='cerrar'></Button>
            </View>
        </Modal>
    )
}