import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Colors/Colors'
const MenuItem = ({item, theme, currentTab, setCurrentArticle, setCurrentTab,setSearchText, searchText}) => {
  const [themeColor, setThemeColor] = useState(theme=="dark"?Colors.dark:Colors.light);
  const styles = StyleSheet.create({
    menuItem:{
        paddingHorizontal:8,
        justifyContent:'center',
        borderRightWidth: 1,
        borderRightColor:'grey'
      },
      text:{
        textAlign:'center',
        color:searchText.length==0?currentTab==item?themeColor.secondary:themeColor.primary:themeColor.primary,
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})
  return (
    <TouchableOpacity style={styles.menuItem} onPress={()=>{
      setSearchText("")
      setCurrentArticle({})
      setCurrentTab(item)
      }}>
      <View >
        <Text style={styles.text}>{item}</Text>
      </View>
    </TouchableOpacity>
  )
}


export default MenuItem
