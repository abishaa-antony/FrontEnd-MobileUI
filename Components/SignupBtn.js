import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, StatusBar, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB } from 'react-native-paper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignupBtn = (props) => {
    return (
			<Button icon="account-plus" style={{ paddingTop:2, marginTop: 15, backgroundColor: "#f0f2ff", paddingBottom:2, color:"white"}} uppercase={false} onPress={() => { props.onclick(props.roleSign) } }>{props.roleSignName}</Button>
    )
}
const styles = StyleSheet.create({

    container1: {
      flex: 1,
      justifyContent: 'center',
    },
  
      myHome: {
          alignItems: 'center',
          justifyContent: 'center',
      },
      
      headingName: {
          marginLeft: 20,
            fontSize: 22,
            fontWeight: 'bold',
          color: '#fff',
      },
  
        inputView :{
          backgroundColor:'white',
          borderRadius: 5,
          margin: 2,
          flexDirection: 'row',
      },
  
      labelText: {
          flex: 1,
          fontSize: 14,
          padding: 10,
      },
  
      orderDelButton: {
          borderRadius: 10,
          fontSize: 13,
          padding: 5,
          marginTop: 5,
          marginHorizontal: 10,
          height: 30,
          backgroundColor: 'red',
          color: 'white',
      },
  
      orderDetailsButton: {
          borderRadius: 10,
          fontSize: 13,
          padding: 5,
          marginTop: 5,
          marginLeft: 10,
          height: 30,
          backgroundColor: 'green',
          color: 'white',
      },
  
      inputText: {
          borderRadius: 20,
          borderColor: '#990000',
          backgroundColor: 'white',
          width: 160,
          paddingLeft: 8,
          paddingRight: 8,
          paddingBottom: 4,
          paddingTop: 4,
          borderWidth: 0.5,
      },
  
      heading : {
        fontSize: 20,
      },
  
      footerBtn : {
          fontSize: 25,
          color: '#1D2434',
      }
  
  });
  
export default SignupBtn
