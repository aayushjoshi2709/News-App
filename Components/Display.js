import { Text, StyleSheet, View, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Colors from '../Colors/Colors';
import ListItem from './ListItem';
import NewsDetail from './NewsDetail';
const Display = ({news, setCurrentArticle,currentArticle,isKeyboardVisible,theme, scrollRef,pageNo, setPageNo, maxPages}) => {
  const styles = StyleSheet.create({
        display:{
            display:'flex',
            flex:isKeyboardVisible?9:14,
            backgroundColor:theme == "dark"?Colors.dark.secondary:Colors.light.secondary
        }
  })
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 100;
    return layoutMeasurement.height + contentOffset.y >=contentSize.height - paddingToBottom;
  };

  return (
    <View style={styles.display}>
      <ScrollView ref={scrollRef}
       onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          if(pageNo < maxPages)
          setPageNo(pageNo + 1)
        }
      }}
      >
        {Object.keys(currentArticle).length===0?news.map((article, idx) =>{return <TouchableOpacity key={idx} onPress={()=>setCurrentArticle(article)}><ListItem theme={theme}  image={article.urlToImage} title={article.title} subTitle={article.description}/></TouchableOpacity>}):<NewsDetail theme={theme} setCurrentArticle={setCurrentArticle} article={currentArticle}/>}
      </ScrollView>
    </View>
  )
}


export default Display;