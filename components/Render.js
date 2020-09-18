import React from 'react'
import PaginationButton from './PaginationButton'
import PropTypes from 'prop-types';

import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Button
} from 'react-native';


const Render = ({ formSearch, handleClick, handleClickPrev, render, data,  }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.containerButton}>
                    <PaginationButton handleClickButton={handleClickPrev} text={'Anterior'}/>
                    <PaginationButton handleClickButton={handleClick} text={'Siguiente'}/>
                </View>
                <View>
                    {formSearch.length >= 3 && data.filter(data => data.name.toLowerCase().includes(formSearch)).map(render)}
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
});

export default Render