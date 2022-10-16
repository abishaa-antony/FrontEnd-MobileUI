import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB, TextInput} from 'react-native-paper';
import LoggedoutFooter from '../Components/LoggedoutFooter';
import MyComponent from './Menu';
import { StackActions } from '@react-navigation/native';

const RegisterScreen = (props) => {
	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}

	const handleSignupBtn = (role) =>{
		props.navigation.navigate("TeacherDashboard", {role: role});
	}

	const HomeBack = () => {
		props.navigation.navigate("Home")
	}

	const LoginBack = () => {
		props.navigation.navigate("Login")
	}

	if(props.route.params.insti){
		return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
				<MyComponent backBtn={true} titleText="Lecturer Account" goback={goback}/>

				
				<ScrollView>
				<View style={styles.container1 }>
				<TextInput
				label="Full Name"
				style={{marginTop:10, marginBottom:10}}
				/>
				<TextInput
				label="Reference Number"
				style={{marginBottom:10}}
				/>
				<TextInput
				label="Department"
				style={{marginBottom:10}}
				/>
				<TextInput
				label="Work Email"
				style={{marginBottom:10}}
				/>
				<TextInput
				label="Password"
				style={{marginBottom:20}}
				/>
				<Button mode="contained" icon="account-plus" style={{ marginTop: 0 }} onPress={handleSignupBtn} >
						Register
  				</Button>	
				<View style={{justifyContent:'center', alignItems:'center'}}>
				<Image source={require('../assets/Lecturer.jpg')} style={{ width: 350, height: 300}}/>
				</View>
				</View>	
				
				</ScrollView>
				
							
				<LoggedoutFooter homeProp={HomeBack} loginProp={LoginBack}/>
			</View>

		)} else{
			return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
				<MyComponent backBtn={true} titleText="Student Account" goback={goback}/>
				<ScrollView>
				<View style={styles.container1}>
				<TextInput
				label="Full Name"
				style={{marginTop:10, marginBottom:10}}
				/>
				<TextInput
				label="Student Number"
				style={{marginBottom:10}}
				/>
				<TextInput
				label="Faculty"
				style={{marginBottom:10}}
				/>
				<TextInput
				label="Email"
				style={{marginBottom:10}}
				/>
				<TextInput
				label="Password"
				style={{marginBottom:20}}
				/>
				<Button mode="contained" icon="account-plus" style={{ marginTop: 10 }}>
						Register
  				</Button>		
				<View style={{justifyContent:'center', alignItems:'center'}}>
				<Image source={require('../assets/Student.png')} style={{ width: 350, height: 300}}/>
				</View>
				</View>
			
				</ScrollView>
				<LoggedoutFooter homeProp={HomeBack} loginProp={LoginBack}/>
			</View>
		)}
}

const styles = StyleSheet.create({
  container1: {
  	flex: 1,
	justifyContent: 'center'
  },

});
export default RegisterScreen