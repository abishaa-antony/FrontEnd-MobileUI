import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, Image, ScrollView, Modal, Alert} from "react-native";
import { Button, Card, FAB, TextInput } from 'react-native-paper';
import axios from 'axios';
import LoggedoutFooter from '../Components/LoggedoutFooter';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Enrollment = (props) => {
	
	const submitData= () => {
		props.navigation.navigate('ViewCourse')
	}
	
	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}

	return(
		<View style={ styles.container1 }>
		<MyComponent backBtn={true} titleText="Enrollment" goback={goback}/>
		<ScrollView>
			<View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
				<Text style={{ marginTop: 20, fontSize: 20 }}>Self Enrollment</Text>
				<TextInput
					style={{width: 280, margin: 8, height: 40, borderColor: '#e0e0e0', backgroundColor: "#fff", borderWidth: 2, padding: 10,}}
					
					placeholder="Enrollment Key"
					placeholderTextColor="#a0a0a0"
					
				/>
				
				<Button mode="contained" icon="login" style={{ width: 200,marginTop: 20, marginBottom: 10 }} onPress={()=> submitData()}>
					Enroll here
				</Button>
				
				
			</View>
			</ScrollView>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container1: {
		backgroundColor: "#fafaff",
		flex: 1,
	},
  
  });
  
export default Enrollment