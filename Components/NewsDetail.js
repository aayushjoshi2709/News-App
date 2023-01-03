import { StyleSheet, Text,Image,View, ScrollView, BackHandler } from 'react-native'
import React,{useEffect, useState} from 'react'
import Colors from '../Colors/Colors';
const NewsDetail = ({article,setCurrentArticle, theme}) => {
  const styles = StyleSheet.create({
    NewsDetail:{
      display:'flex',
      flexDirection:'column',
      flex:1,
      color:theme=="dark"?Colors.dark.secondary:Colors.light.secondary
    },
    container:{
      flex:1,
      padding:8,
    },
    heading:{
      fontSize:24,
      textAlign:'justify',
      color:theme=="dark"?Colors.dark.primary:Colors.light.primary
    },
    subheading:{
      fontSize:18,
      fontStyle:'italic',
      textAlign:'justify',
      color:theme=="dark"?Colors.dark.primary:Colors.light.primary,
      marginBottom:16
    },
    content:{
      color:theme=="dark"?Colors.dark.primary:Colors.light.primary,
      fontSize:18
    }
    ,source:{
      color:Colors.grey,
      paddingBottom:8,
      borderBottomWidth:1,
      borderBottomColor:Colors.grey,
      marginBottom:16
    },
    image:{
      borderWidth:1,
      height:350,
      flex:1,
      flexBasis:'auto',
      objectFit:'cover'
    }
  })
  useEffect(() => {
    const backAction = () => {
      setCurrentArticle({});
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  console.log(article)
  return (
      <ScrollView style={styles.NewsDetail}>
          <Image style={styles.image} source={article.urlToImage?{uri:article.urlToImage}:""}/>
          <View style={styles.container}>
            <Text style={styles.heading}>{article.title}</Text>
            <Text style={styles.source}>Source: {article.source.name}</Text>
            <Text style={styles.subheading}>{article.description}</Text>
            <Text style={styles.content}>{article.content.slice(0,article.content.lastIndexOf('['))}</Text>
          </View>
      </ScrollView>
  )
}

export default NewsDetail