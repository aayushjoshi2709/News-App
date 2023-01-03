import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({items,theme, currentTab, setCurrentTab, setCurrentArticle, setSearchText, searchText}) => {
  return (
    <ScrollView horizontal={true} style={styles.menu}>
      {
        items.map((item, idx) => {return <MenuItem  theme={theme} setCurrentArticle={setCurrentArticle} searchText={searchText} setSearchText={setSearchText} key={idx} item={item} currentTab={currentTab} setCurrentTab={setCurrentTab}/>})
      }
    </ScrollView>
  )
}

export default Menu

const styles = StyleSheet.create({
    menu:{
        display:'flex',
        flex:0.8,
        borderTopColor:'grey',
        borderTopWidth:1,
        overflow:'scroll'
    }
})