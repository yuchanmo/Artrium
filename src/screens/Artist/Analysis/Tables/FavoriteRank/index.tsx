import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { DataTable, Divider } from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';
import ApiUrl from '~/GlobalContant';
const optionsPerPage = [2, 3, 4];

const styles = StyleSheet.create(({
  container:{
      margin:7,
  },
  titleText: {
      color: "black",
      fontSize: 20,        
    }
}));

interface Props{
  Month:string;
  route : RouteProp<ArtistStackParamList,"Analysis">
  navigation:NativeStackScreenProps<ArtistStackParamList,"Analysis">;
}

const FavoriteRank = ({Month,route,navigation}:Props) => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const [data,setData] = React.useState<Array<FavoriteRank>>([]);

  const initData = async () =>{
    try {
        let res = await RNFetchBlob.fetch('GET', ApiUrl['favoriterank']);
        let status = res.info().status;
        if(status == 200){                            
            //let tmp:Array<ArtDisplayInfo> = [...data, res.data];
            setData(res.json());
        }        
    } catch (error) {
        Alert.alert('info',error.message);
        Alert.alert('info',error.stack);
    }      
    

};
  React.useEffect(() => {
    setPage(0);
    initData();
  }, []);

  React.useEffect(() => {
    setPage(0);
    initData();
  }, [Month]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>인기 판매 작가</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Rank</DataTable.Title>
          <DataTable.Title>작가이름</DataTable.Title>          
          <DataTable.Title>판매금액</DataTable.Title>          
        </DataTable.Header>

        {data.map((v,i)=>(
          <DataTable.Row key={v.rank + i.toString()} onPress={()=>navigation.navigate('ArtistDetail',{name:v.artist_name_kor})}>
            <DataTable.Cell>{v.rank}</DataTable.Cell>
            <DataTable.Cell>{v.artist_name_kor}</DataTable.Cell>          
            <DataTable.Cell>{v.sum}</DataTable.Cell>          
          </DataTable.Row>
        ))}        

        {/* <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        /> */}
      </DataTable>
      <Divider></Divider>
    </View>
  );
}

export default FavoriteRank;