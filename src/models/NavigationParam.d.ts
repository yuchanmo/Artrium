// import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ArtistTabParamList = {
  Favorite: undefined;
  Analysis: undefined;
  EasyPick: undefined;
};

type ReleaseStackParamList = {
  TabRoot: undefined;
  ReleaseDetail: {Info: ArtDisplayInfo};
  ReleaseList: {option: string};
};

type ArtistStackParamList = {
  ArtistList: undefined;
  ArtDisplay: undefined;
  ArtDisplayList: undefined;
  ArtDetail: {
    Info: ArtDisplayInfo;
    // PrevNavigation: NativeStackScreenProps<ArtistStackParamList, 'ArtDetail'>;
  };
  TabRoot: undefined;
  ArtistDetail: {name: string};
  ArtistDescription: {artistinfo: ArtistInfo};
  Favorite: undefined;
  Analysis: undefined;
  EasyPick: undefined;
  // SignIn : undefined;
  // SignUp : undefined;
  // Camera : undefined;
  // Cameraroll : {folder:string}|undefined;
  // Filter:{detailUri:string}|undefined;
  // Internet:undefined;
  // Details:undefined;
  // Gallery: undefined;
  // Configure:undefined;
};
