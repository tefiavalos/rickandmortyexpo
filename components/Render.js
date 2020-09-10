import React from 'react'
import Card from './Card'
/* import Loading from '../loading/Loading'  */
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';

export default function Render({  formSearch, handleClick, render, data, handleClickPrev }) {
    return (
        <>
        <ScrollView>
            <Button handleClickPrev={handleClickPrev} message={'<'} title='<'/>
            <Button handleClickNext={handleClick} message={'>'} title='>'/>
            <View className="container-render">
                {formSearch.length >= 3 && data.filter(data => data.name.toLowerCase().includes(formSearch)).map((data, i) => {
                    return (
                        <Card name={data.name} image={data.image} i={i}></Card>
                    )
                })}
               {/* {formSearch && formSearch.length < 3 &&
                    <Loading message={'Mientras buscas, tomá tu birrita (y dame 3 caracteres)'}/>}  */}
                {!formSearch && data.map(render)}
            </View>
            <Button handleClickPrev={handleClickPrev} message={'<'} title='press me'/>
            <Button handleClickNext={handleClick} message={'>'} title='press me'/>
            </ScrollView>
</>
    )
}