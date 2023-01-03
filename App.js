import { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Keyboard, Appearance} from 'react-native';
import Colors from './Colors/Colors';
import Display from './Components/Display';
import Menu from './Components/Menu';
import ProgressDialog from './Components/ProgressDialog';
import TopBar from './Components/TopBar';

export default function App() {
  const [news, setNews] = useState([]);
  const [currentTab, setCurrentTab] = useState("general");
  const [pageNo, setPageNo] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const scrollRef = useRef();
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [items, setItems] = useState(["general","business","sports","technology","entertainment","health","science"]);
  const [apiKey, setApiKey] = useState('930f8dd1be4c414396da614a239eab74');
  const [currentArticle, setCurrentArticle] = useState({});
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  Appearance.addChangeListener((scheme)=>{
    setTheme(scheme.colorScheme)
  })
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); 
       }
       );
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
  }, []);
  useEffect(() => {
      if(!isKeyboardVisible)
        setLoading(true)
      let url = ""
      if(searchText.length > 0)
        url = `https://newsapi.org/v2/top-headlines?q=${searchText}&language=en&apiKey=${apiKey}`
        else
        url = `https://newsapi.org/v2/top-headlines?category=${currentTab}&language=en&apiKey=${apiKey}`
      fetch(url)
      .then((res)=> res.json())
      .then((data)=> {
        setLoading(false)
        data.status == "ok"?setNews([...data.articles]):setNews([])
        setPageNo(1)
        setMaxPages(Math.floor(data.totalResults/20))
        scrollRef.current?.scrollTo({y: 0,animated: true})
      })
    }, [currentTab,searchText])
    useEffect(() => {
      
    }, [searchText])
    useEffect(() => {
      if(pageNo != 1 && pageNo <= maxPages){
        setLoading(true)
        let url = ""
        if(searchText.length > 0)
        url = `https://newsapi.org/v2/top-headlines?q=${searchText}&language=en&page=${pageNo}&apiKey=${apiKey}`
        else
        url = `https://newsapi.org/v2/top-headlines?category=${currentTab}&language=en&page=${pageNo}&apiKey=${apiKey}`
      fetch(url)
      .then((res)=> res.json())
      .then((data)=> {
        setLoading(false)
        data.status == "ok"?setNews([...news,...data.articles]):setNews([...news])
      })
    }
  }, [pageNo])
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TopBar theme={theme} searchText={searchText} setSearchText={setSearchText}/>
        <ProgressDialog theme={theme} visible={loading}/>
        <Menu setCurrentArticle={setCurrentArticle} theme={theme} searchText={searchText} setSearchText={setSearchText} items={items} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <Display setCurrentArticle={setCurrentArticle} currentArticle={currentArticle} theme={theme} isKeyboardVisible={isKeyboardVisible} pageNo={pageNo} setPageNo={setPageNo} news={news} scrollRef={scrollRef} maxPages={maxPages}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});