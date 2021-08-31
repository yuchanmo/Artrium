import { RouteProp } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchRank from '../Analysis/Tables/SearchRank';

interface Props{
   
    route:RouteProp<ArtistStackParamList,"EasyPick">;    
    navigation:NativeStackScreenProps<ArtistStackParamList,"EasyPick">;    
}


const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1
        },
        comboContainer:{
            height:60,
            flexDirection:'row'

        },
        combo:{
            flex:9,

        },
        searchBtn:{
            flex:1,
            width:30
        },
        rankTable:{
            flex:10
        }        

    })
);

const EasyPick = ({route,navigation}:Props) =>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'North America', value: 'na'},
        {label: 'United States', value: 'usa', parent: 'na'},
        {label: 'Canada', value: 'canada', parent: 'na'},
      
        {label: 'Europe', value: 'eu'},
        {label: 'Norway', value: 'norway', parent: 'eu'},
        {label: 'Belgium', value: 'belgium', parent: 'eu'},
      ]);
  
    return (
        <View style={styles.cotainer}>
            <View style={styles.comboContainer}>
                <DropDownPicker style={styles.combo}
                multiple={true}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    categorySelectable={true}
                    showBadgeDot={true}
                />
                <TouchableOpacity style={styles.searchBtn}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rankTable}>
                <SearchRank Month={3} route={route} navigation={navigation}></SearchRank>
            </View>
      </View>
    );
}


export default EasyPick;