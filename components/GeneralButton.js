import React from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native'

const GeneralButton = ({text, handleClick, style}) => {
    return(
        <View>
        <TouchableOpacity style={[styles.button, style]} onPress={handleClick}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        backgroundColor: '#796589',
        color: '#eee',
        padding: 5,
        borderRadius: 5,
        margin: 10
    },
    textButton: {
        color: '#DDB796',
        fontWeight: '600',
        fontSize: 20,
        fontFamily: 'kufam'
    }
});

export default GeneralButton