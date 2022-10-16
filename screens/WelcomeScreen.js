import React, { useState } from 'react';
import { Text, StyleSheet,View, Image} from "react-native";
import { Button, Card, FAB } from 'react-native-paper';
import LoggedoutFooter from '../Components/LoggedoutFooter';
import MyComponent from './Menu';


const WelcomePage = (props) => {
	//Login button navigation
	const loginLecturer = () => {
		props.navigation.navigate("LecturerLogin")
	}
	const LoginStudent = () => {
		props.navigation.navigate("StudentLogin")
	}
	return (

		<View style={{flex:1, backgroundColor:'#fff'}}>
			<MyComponent backBtn={false} titleText="E-Learning"/>
			<View style={styles.container1}>
			<View style={{justifyContent:'center', alignItems:'center'}}>
				<Image source={require('../assets/LoginIllustration.png')} style={{ width: 370, height: 320}}/>
			</View>
				<Button icon="account-plus" style={{ paddingTop:2, marginTop: 15, backgroundColor: "#f0f2ff", paddingBottom:2, color:"white"}} uppercase={false} onPress={() => { props.navigation.navigate("TrueSignup", {insti:true}) } } >Register as Lecturer</Button>
				<Button icon="account-plus" style={{ paddingTop:2, marginTop: 15, backgroundColor: "#f0f2ff", paddingBottom:2, color:"white"}} uppercase={false} onPress={() => { props.navigation.navigate("TrueSignup", {insti:false}) } } >Register  as Student</Button>
				<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { loginLecturer() }}>Login As Lecturer</Button>
				<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { LoginStudent()  }}>Login As Student</Button>
			</View>		
		</View>
	)
}
const styles = StyleSheet.create({
  container1: {
  	flex: 1,
	justifyContent: 'center'
  },

});
export default WelcomePage