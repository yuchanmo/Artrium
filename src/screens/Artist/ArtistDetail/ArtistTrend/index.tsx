import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, Alert, ScrollView } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ApiUrl from '~/GlobalContant';
import ZeroLineChartScreen from './AxisLineChartScreen';
import LineChartScreen from './LineChartScreen';
import StackedBarChartScreen from './StackBarChart';
import PieChartScreen from './StockChartScreen';



const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1,
            width:'100%'
        },
        
        

    })
);

const ArtistTrend = ({}) =>{
    const [arts,setArts] = useState<Array<ArtDisplayInfo>>([]);
    const initData = async () =>{
        try {
            let res = await RNFetchBlob.fetch('GET', ApiUrl['artist']);
            let status = res.info().status;
            if(status == 200){              
                setArts(res.json());
            }
            
        } catch (error) {
            Alert.alert('info',error.message);
            Alert.alert('info',error.stack);
        }      
        
  
    };
    return (
        <>
        <ScrollView style={styles.cotainer}>
            <Text>Hello</Text>
            {/* <LineChartScreen></LineChartScreen>
            <PieChartScreen></PieChartScreen>
            <ZeroLineChartScreen></ZeroLineChartScreen>
            <StackedBarChartScreen></StackedBarChartScreen> */}
        </ScrollView>
        </>
        
    );
}


export default ArtistTrend;