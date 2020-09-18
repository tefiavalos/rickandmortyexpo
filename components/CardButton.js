import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const GeneralButton = ({text, handleClick}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        textAlign: 'center',
        color: '#eee',
        fontWeight: '600',
        fontSize: 15
    },
    button: {
        width: 30,
        height: 30,
        backgroundColor: '#9882A7',
        color: '#eee',
        padding: 5,
        borderRadius: 30,
        marginRight: 5
    }
})

export default GeneralButton