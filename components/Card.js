import React, { useState } from 'react'

/* import Modal from '../modal/Modal' */
/* import Button from '../button/Button' 
import './card.css' */
 import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image
  } from 'react-native';

export default function Card({
    name, image, dimension, episode, type, created, gender, species, residents, data, episodeCharacter
}) {
    /* const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }; */

    return (
        <>
        <ScrollView>
            <View className="container">
                <Text>
                    {name}
                </Text>
                {image ? <Image className="data-image" alt={name} source={{ uri: image}} style={{width: 400, height: 400}}/> : 
                <Text className='p-card'>{dimension || episode}</Text>}
                <Button className='button-card' /* onClick={handleOpen} */ title='see more'/>
                 {/* <Modal
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                    name={name}
                    type={type}
                    created={created}
                    gender={gender}
                    species={species}
                    image={image}
                    dimension={dimension}
                    episode={episode}
                    episodeCharacters={episodeCharacter} 
                    residents={residents}></Modal>  */}
            </View>
            </ScrollView>
        </>
    )
}
