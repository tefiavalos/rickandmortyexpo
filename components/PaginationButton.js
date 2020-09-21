import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const PaginationButton = ({text, handleClickButton}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={handleClickButton}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        width: 100,
        backgroundColor: '#796589',
        color: '#eee',
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 15,
    },
    textButton: {
        textAlign: 'center',
        color: '#DDB796',
        fontWeight: '600',
        fontSize: 15,
        fontFamily: 'kufam'
    }
});

export default PaginationButton