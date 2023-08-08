import React, { Component, useContext, useEffect, useState,Fragment } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  Button,
  Alert
} from "react-native";
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import Video from "react-native-video";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Divider } from "react-native-paper";

import {SignContext} from '~/context/SignContext';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import auth from "@react-native-firebase/auth";


const SignIn = ()=>{
  const {isSigned,trySignIn} = useContext<ISignContext>(SignContext);

  // <TouchableOpacity
  //         onPress={() => trySignIn(2)}
  //          style={styles.button2}
  //        >
  //        <Text style={styles.text6}>MO</Text>
  //       </TouchableOpacity>
  return (

  );
};


// function SignIn(props) {
//   // 카카오테스트코드
//   // const [result, setResult] = useState<string>('');

//   // const signInWithKakao = async (): Promise<void> => {
//   //   try{
//   //     const token: KakaoOAuthToken = await login();
//   //     Alert.alert('info',JSON.stringify(token));
//   //     setResult(JSON.stringify(token));
//   //   }
//   //   catch(err)
//   //   {
//   //     Alert.alert('info',err.toString());
//   //   }
    
//   // };

//   // const signOutWithKakao = async (): Promise<void> => {  
//   //   try{
//   //     const message = await logout();

//   //     setResult(message);
      
//   //     Alert.alert('info',message);
      
//   //   }
//   //   catch(err)
//   //   {
//   //     Alert.alert('info',err.toString());
//   //   }
//   // };

//   // const getProfile = async (): Promise<void> => {
//   //   try{
//   //   const profile: KakaoProfile = await getKakaoProfile();
//   //   Alert.alert('info',JSON.stringify(profile));
//   //   setResult(JSON.stringify(profile));
//   //   }
//   //   catch(err)
//   //   {
//   //     Alert.alert('info',err.toString());
//   //   }
//   // };

//   // const unlinkKakao = async (): Promise<void> => {
//   //   try{
//   //     const message = await unlink();

//   //   setResult(message);
     
//   //     Alert.alert('info',message);
      
//   //     }
//   //     catch(err)
//   //     {
//   //       Alert.alert('info',err.toString());
//   //     }
//   //   const message = await unlink();

//   //   setResult(message);
//   // };

//   // return (
//   //   <View style={{flex:1}}>
//   //     <View style={{flex:5}}>
//   //       <Text>{result}</Text>
//   //       </View>
//   //       <View style={{flex:3}}>
//   //         <Button title={'login'} onPress={()=>signInWithKakao()}></Button>
//   //         <Button title={'signout'} onPress={()=>signOutWithKakao()}></Button>
//   //         <Button title={'profile'} onPress={()=>getProfile()}></Button>
//   //         <Button title={'unlink'} onPress={()=>unlinkKakao()}></Button>
//   //     </View>
//   //     </View>

//   // );

//   const {isSigned,trySignIn} = useContext<ISignContext>(SignContext);
  
//   // useEffect(() => {
//   //   const socialGoogleConfigure = async () => {
//   //     await GoogleSignin.configure({
//   //       webClientId: "117739553173-09d7gpt5u1s3l0ud668vsppd8s5gahal.apps.googleusercontent.com"
//   //     });
//   //   };
//   //   socialGoogleConfigure();
//   // }, []);  

//   // const onGoogleButtonPress = async () => {
//   //   const { idToken } = await GoogleSignin.signIn();
//   //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   //   return auth().signInWithCredential(googleCredential);
//   // };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         {/* <Image style={styles.img} source={require('./icon.png')}></Image> */}
//       </View>
//       <View style={styles.btn}>
//         {/* <TouchableOpacity
//           onPress={onGoogleButtonPress}
//            style={styles.button2}
//          >
//          <Text style={styles.text6}>Google</Text>
//         </TouchableOpacity> */}
//         <TouchableOpacity
//           onPress={() => trySignIn(1)}
//            style={styles.button2}
//          >
//          <Text style={styles.text6}>CHO</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => trySignIn(2)}
//            style={styles.button2}
//          >
//          <Text style={styles.text6}>MO</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
    
//   );
// }

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  imageContainer:{
    flex:2,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',

  },
  img:{
    height:'100%',padding:400
    
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
  },
  rect: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    lineHeight: 50,
    marginTop: 118,
    marginLeft: 17
  },
  rect2: {
    height: 98,
    backgroundColor: "#1c2a38",
    flexDirection: "row",
    marginTop: -168
  },
  icon: {
    color: "rgba(29,161,242,1)",
    fontSize: 40,
    marginLeft: 168,
    alignSelf: "center"
  },
  iconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect3: {
    width: 124,
    height: 50,
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    width: 85,
    height: 50,
    justifyContent: "center"
  },
  text2: {
    width: 66,
    height: 50,
    color: "#1da1f2",
    fontSize: 18,
    lineHeight: 50,
    alignSelf: "center"
  },
  icon2: {
    color: "#1da1f2",
    fontSize: 25,
    marginTop: 13
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 14
  },
  text3: {
    color: "rgba(123,139,151,1)",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 102,
    marginLeft: 18
  },
  text4: {
    color: "rgba(123,139,151,1)",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 87,
    marginLeft: 17
  },
  textInput: {
    width: 339,
    height: 42,
    color: "#1da1f2",
    borderColor: "rgba(123,139,151,1)",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: 2,
    marginLeft: 17
  },
  text5: {
    color: "#7b8b97",
    fontSize: 18,
    lineHeight: 20,
    marginTop: 50,
    marginLeft: 82
  },
  textInput2: {
    width: 339,
    height: 42,
    color: "#1da1f2",
    borderColor: "#1da1f2",
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize: 18,
    lineHeight: 20,
    marginTop: -220,
    marginLeft: 17
  },
  textColumn: {},
  textColumnFiller: {
    flex: 1
  },
  rect4: {
    height: 91
  },
  divider: {
    width: 360,
    height: 1
  },
  button2: {
    width: 200,
    height: 50,
    backgroundColor: "#71bbff",
    borderRadius: 100,
    justifyContent: "center",
  
  },
  text6: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 20,
    alignSelf: "center"
  }
});

export default SignIn;
