import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, Image, ScrollView, Modal, Alert} from "react-native";
import { Button, Card, FAB, TextInput } from 'react-native-paper';
import axios from 'axios';
import LoggedoutFooter from '../Components/LoggedoutFooter';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';
import AsyncStorage from '@react-native-async-storage/async-storage'


const StudentLogin = (props) => {
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")


	const submitData= () => {
		props.navigation.navigate('StudentDashboard')
	}
	const homeNav = () => {
		props.navigation.navigate("Home")
	}

	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}

	const loginNav = () => {
		props.navigation.navigate("Login")
	}

	return(
		<View style={ styles.container1 }>
		<MyComponent backBtn={true} titleText="Login as" goback={goback}/>
		<ScrollView>
			<View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
				<Text style={{ marginTop: 20, fontSize: 20 }}>Login</Text>
				<TextInput
					style={{width: 280, margin: 8, height: 40, borderColor: '#e0e0e0', backgroundColor: "#fff", borderWidth: 2, padding: 10,}}
					value={username}
					placeholder="Username"
					placeholderTextColor="#a0a0a0"
					onChangeText={text => setUsername( text )}
				/>
				<TextInput
					style={{width: 280, margin: 8, height: 40, borderColor: '#e0e0e0', backgroundColor: "#fff", borderWidth: 2, padding: 10,}}
					value={password}
					placeholder="Password"
					placeholderTextColor="#a0a0a0"
					onChangeText={text => setPassword( text )}
				/>
				<Button mode="contained" icon="login" style={{ width: 200,marginTop: 20, marginBottom: 10 }} onPress={()=> submitData()}>
					Login
				</Button>
				<Text>OR</Text>
				<Button mode="contained" icon="account-plus" style={{backgroundColor: 'red', marginTop: 10}} onPress={()=> {homeNav()}}>
					Signup Here!
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
  
export default StudentLogin