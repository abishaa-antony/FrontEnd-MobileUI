import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, StatusBar, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB } from 'react-native-paper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'


const LoggedoutFooter = (props) => {

    const [data, setData] = React.useState('');

	const logoutBtn = () => {
        fetch(`https://agile-bastion-40085.herokuapp.com/logout`)
       .then(res=>res.json())
       .then(results=>{
           setData(results)
           AsyncStorage.removeItem('usernameToken')
           AsyncStorage.removeItem('nameToken')
           AsyncStorage.removeItem('courseToken')
           AsyncStorage.removeItem('rollnoToken')
           AsyncStorage.removeItem('instiToken')
           AsyncStorage.removeItem('roleToken')
           AsyncStorage.removeItem('deptToken')
       .then(
			res => {
                props.homeProp()
            }
           )
       }). catch(err=>{
           Alert.alert(err.message)
       })
   }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor:'#f0f0f0', borderTopColor: "#222", alignItems: 'center', shadowColor: "#000", shadowOffset: {width: 0, height: 0,},shadowOpacity: 2,shadowRadius: 2, elevation: 2,}} >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button icon="home" compact={true} uppercase={false} labelStyle={styles.footerBtn} onPress={() => {props.homeProp()}}>
                </Button>
                <Text style={{padding:0, marginTop:-18, color: "#333"}}>
                    Home
                </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button icon="login" compact={true} uppercase={false} labelStyle={styles.footerBtn} onPress={() => {props.loginProp()}}>
                </Button>
                <Text style={{padding:0, marginTop:-18, color: "#333"}}>
                    Login
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    footerBtn : {
        fontSize: 25,
        color: '#333',
        backgroundColor: 'blue'
    }
  });
  
export default LoggedoutFooter
