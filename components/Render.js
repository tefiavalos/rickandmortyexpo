import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types';

import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Button
} from 'react-native';


export default function Render({ formSearch, handleClick, render, data, handleClickPrev }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={handleClickPrev} style={styles.button}>
                        <Text style={styles.textButton}>Anterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleClick}>
                        <Text style={styles.textButton}>Siguiente</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {formSearch.length >= 3 && data.filter(data => data.name.toLowerCase().includes(formSearch)).map((data, i) => {
                        return (
                            <Card
                                name={data.name}
                                image={data.image}
                                key={i}></Card>
                        )
                    })}
                    {!formSearch && data.map(render)}
                </View>
            </ScrollView>
        </View>
    )
}

Render.propTypes = {
    formSearch: PropTypes.any,
    handleClick: PropTypes.func,
    render: PropTypes.func,
    data: PropTypes.any,
    handleClickPrev: PropTypes.func
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerButton: {
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: 100,
        backgroundColor: '#9882A7',
        color: '#eee',
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 15,
    },
    textButton: {
        textAlign: 'center',
        color: '#eee',
        fontWeight: '600',
        fontSize: 20
    }
});