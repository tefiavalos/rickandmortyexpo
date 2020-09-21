import React from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native'

const GeneralButton = ({text, handleClick}) => {
    return(
        <View>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        backgroundColor: '#796589',
        color: '#eee',
        padding: 5,
        borderRadius: 5,
        margin: 10
    },
    textButton: {
        textAlign: 'center',
        color: '#DDB796',
        fontWeight: '600',
        fontSize: 20,
        fontFamily: 'kufam'
    }
});

export default GeneralButton