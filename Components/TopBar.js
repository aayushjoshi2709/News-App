import { Text, StyleSheet, View, TextInput} from 'react-native'
import React,{useState, useEffect} from 'react'
import Colors from '../Colors/Colors'
const TopBar = ({searchText, setSearchText, theme}) => {

  const styles = StyleSheet.create({
    topBar:{
        flex:1,
        padding:8
    },
    search:{
        borderWidth:1,
        borderColor:'#D3D3D3',
        backgroundColor:Colors.light.secondary,
        flex:1,
        borderRadius:22,
        paddingHorizontal:18,
        fontSize:18,
    }
})
  return (
    <View style={styles.topBar}>
        <TextInput onChangeText={setSearchText} placeholder='Search' style={styles.search}>{searchText}</TextInput>
      </View>
  )
}

export default TopBar
