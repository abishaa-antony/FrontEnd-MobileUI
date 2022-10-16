import React, { useEffect, useState } from 'react';
import { Text, TextInput, Modal, Alert, StyleSheet, StatusBar, View, Image, FlatList, ScrollView, TouchableHighlight , TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Button, Card, FAB} from 'react-native-paper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoggedinFooter from '../Components/LoggedinFooter';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';

const TeacherDashboard = (props) => {
    
    const checkToken = async () => {
		var institute = await AsyncStorage.getItem("instituteToken");
		var dept = await AsyncStorage.getItem("deptToken");
		var role = await AsyncStorage.getItem("roleToken");
		var obj = {
			institute: institute,
			dept: dept,
			role: role
		}
		setRole(role)
		return obj
    }

    const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [role, setRole] = useState("")

  	const fetchData = () => {
		checkToken()
		.then(res =>{
			fetch(`https://agile-bastion-40085.herokuapp.com/dept-admin-dashboard/${res.institute}/${res.dept}/courses`)
			.then(res=>res.json())
			.then(results=>{
				setData(results)
				setLoading(false)
			}). catch(err=>{
				Alert.alert(err.message)
				setLoading(false)
			})
		})
	}

	useEffect(()=>{
		fetchData()
	}, [])

	const homeNav = () => {
		props.navigation.dispatch(StackActions.replace("Home"))
	}

	const teacherDashboardNav = () => {
        props.navigation.navigate("TeacherDashboard")
	}

	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}

	return(
        <View style={{flex:1, backgroundColor:"white"}}>
			<MyComponent backBtn={false} titleText="Teacher" goback={goback}/>
			<Text style={styles.closeButton}>Choose among these Courses</Text>
            <FlatList
                data = {data}
                renderItem = {({item})=>
                <TouchableHighlight onPress = { () => props.navigation.navigate("StudentTeacherDashboard", {role: 'institute-teacher', course:item.course})}>
                <View style={styles.ordersView} onPress={() => console.log("hello")}>
                    <View style={styles.middleOrderView}>
                        <Button icon="open-in-new" labelStyle={styles.ordersMiddleHeading}>{item.course}</Button>
                    </View>
                </View>	
				</TouchableHighlight>
                }
                keyExtractor={item=>item._id}
                onRefresh={()=>fetchData()}
                refreshing={loading}
            />
			<LoggedinFooter homeProp={homeNav} teacherDashboard={teacherDashboardNav} role="institute-teacher" />
        </View>
	)
}

const styles = StyleSheet.create({

	ordersView : {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		borderBottomColor: '#e0e0e0',
		borderBottomWidth: 0.8,
		backgroundColor: 'white',
		flexDirection: 'row',
	},

	middleOrderView : {
		justifyContent: 'center',
	},

	ordersMiddleHeading : {
		color: '#5c6bc0',
	},

	acceptButton : {
		borderRadius: 5,
		marginTop: 10,
		backgroundColor: 'green',
		color: 'whitesmoke',
		fontWeight: 'bold',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5,
	},

	closeButton : {
		backgroundColor: 'red',
		color: 'whitesmoke',
		fontWeight: 'bold',
		paddingLeft: 10,
		paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
	},

	tagButton : {
		backgroundColor: '#5601F3',
		color: 'whitesmoke',
		fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign:'center'
	},

    footerBtn : {
    	fontSize: 25,
    	color: '#1D2434',
    },
})

export default TeacherDashboard