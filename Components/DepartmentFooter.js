import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, StatusBar, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB } from 'react-native-paper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'


const DepartmentFooter = (props) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor:'#f0f0f0', borderTopColor: "#222", alignItems: 'center', shadowColor: "#000", shadowOffset: {width: 0, height: 0,},shadowOpacity: 2,shadowRadius: 2, elevation: 2,}} >
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Button icon="home" compact={true} uppercase={false} labelStyle={styles.footerBtn} onPress={() => {props.deptDashboard()}}>
                </Button>
                <Text style={{padding:0, marginTop:-18, color: "#333"}}>
                    Dept
                </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button icon="notebook-multiple" compact={true} uppercase={false} labelStyle={styles.footerBtn} onPress={() => {props.deptCourses()}}>
                </Button>
                <Text style={{padding:0, marginTop:-18, color: "#333"}}>
                    Course
                </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Button icon="logout" compact={true} uppercase={false} labelStyle={styles.footerBtn} onPress={() => {props.logoutButton()} }>
                </Button>
                <Text style={{padding:0, marginTop:-18, color: "#333"}}>
                    Logout
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
export default DepartmentFooter