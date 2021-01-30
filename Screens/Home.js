import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View,StyleSheet, TouchableOpacity, Text} from 'react-native';
import { getNews } from '../Actions';
import NewsItem from '../Components/NewsItem';
import Loader from '../Components/Loader';

const Home=props=>{
    const state=useSelector(state=>state);
    console.log("State   :",state);
    const Dispatch=useDispatch();
    return(
        <View>
            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>{
                Dispatch(getNews());
            }}
             style={{backgroundColor:'blue',paddingHorizontal:20,paddingVertical:10,
                borderRadius:30
            }}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
                    Button
                </Text>
            </TouchableOpacity>
            {
                Object.keys(state).length!==0 ?
                <Loader isLoading={state.loading}/>
                :
                <View></View>

            }
            <NewsItem/>
        </View>
    )
}

export default Home;