import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView } from 'react-native';
import SearchRank from '~/screens/Artist/Analysis/Tables/SearchRank';
import FollowingArtist from '~/screens/Artist/Analysis/Tables/FollowingArtist';
import FavoriteRank from '~/screens/Artist/Analysis/Tables/FavoriteRank';
import { Divider, RadioButton } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props{
    route : RouteProp<ArtistStackParamList,"Analysis">
    navigation:NativeStackScreenProps<ArtistStackParamList,"Analysis">;    
}


const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1
        },
        radioContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-evenly' ,
            alignContent:'center',
            alignItems:'center'
        },
        tableContainer:{
            flex:7,
            padding:10
        },
        radioButtonStyle:{
            flexDirection:'row',
            alignContent:'center',
            alignItems:'center'
        }
        

    })
);

const Analysis = ({route,navigation}:Props) =>{
    const [month, setMonth] = useState<string>('6');
    
    return (
        <>   
        <View style={styles.cotainer}>
            <View style={styles.radioContainer}>  
                <View style={styles.radioButtonStyle}>
                    <Text>6개월</Text>
                    <RadioButton
                        value="6"
                        status={ month === '6' ? 'checked' : 'unchecked' }
                        onPress={() => setMonth('6')}
                    />
                </View>
                <View style={styles.radioButtonStyle}>
                    <Text>최근1년</Text>
                    <RadioButton
                        value="12"
                        status={ month === '12' ? 'checked' : 'unchecked' }
                        onPress={() => setMonth('12')}
                    />
                </View>
                <View style={styles.radioButtonStyle}>
                    <Text>최근3년</Text>
                    <RadioButton
                        value="18"
                        status={ month === '18' ? 'checked' : 'unchecked' }
                        onPress={() => setMonth('18')}
                    />
                </View>               
            </View>   
            <Divider ></Divider>
            <View  style={styles.tableContainer}>
            <ScrollView>
                <SearchRank Month={month} route={route} navigation={navigation}></SearchRank>
                <FavoriteRank Month={month} route={route} navigation={navigation}></FavoriteRank>
                <FollowingArtist Month={month} route={route} navigation={navigation}></FollowingArtist>
            </ScrollView> 
            </View>  
        </View>       
        </>
        
    );
}


export default Analysis;