import { Text, StyleSheet, View,Image } from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'
const ListItem = ({title,theme, subTitle,image}) => {
  
const styles = StyleSheet.create({
  listItem:{
    padding:8,
    borderTopColor:Colors.grey,
    borderTopWidth:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  textContainer:{
    flex:1
  },
  heading:{
    fontSize:20,
    flex:1,
    color:theme=="dark"?Colors.dark.primary:Colors.light.primary
  },
  subHeading:{
    color: Colors.greydark,
    fontSize:16,
    flex:1
  },
  imageContainer:{
    marginRight:5,
    display:'flex',
    justifyContent:'center'
  },
  image:{
    width:50,
    height:50,
    borderRadius:40
  }
})
  return (
    <View style = {styles.listItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image?{uri:image}:""}/>
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.heading}>{title}</Text>
        <Text numberOfLines={2} style={styles.subHeading}>{subTitle}</Text>
      </View>
    </View>
  )
}

export default ListItem;