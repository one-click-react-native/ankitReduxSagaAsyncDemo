import React from 'react';
import {useSelector} from 'react-redux'
import {View,StyleSheet, Text, Image} from 'react-native';

const NewsItem=props=>{
    const state=useSelector(state=>state)
    console.log(state)
    return(
        <View>
            <Text style={styles.articleStyle}>Hello</Text>
           <Text style={styles.articleStyle}>Hello</Text>
            <Text style={styles.articleStyle}>Hello</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    imgStyle:{
        height:'auto',
        width:'80%',
        borderWidth:1,
        borderRadius:30
    },
    articleStyle:{
        color:'olive',
        margin:5,
        fontSize:18,
        fontWeight:'bold'
    }
})

export default NewsItem;