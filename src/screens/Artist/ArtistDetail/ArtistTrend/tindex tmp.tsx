import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import RNFetchBlob from 'rn-fetch-blob';
import ApiUrl from '~/GlobalContant';



const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1,
            width:'100%'
        },
        
        

    })
);

const ArtistTrend = ({}) =>{
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };


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
        <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
            data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
                }
            ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        </View>
        </ScrollView>
        </>
        
    );
}


export default ArtistTrend;