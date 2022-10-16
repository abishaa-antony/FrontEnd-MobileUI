import React, { useEffect, useState } from 'react';
import { Text, TextInput, Modal, Alert, StyleSheet, StatusBar, View, Image, FlatList, ScrollView, TouchableHighlight , TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Button, Card, FAB} from 'react-native-paper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'

import LoggedinFooter from '../Components/LoggedinFooter';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';

const StudentTeacherDashboard = (props) => {
    const [course, setCourse] = useState("")
    const [role, setRole] = useState("institute-student")
    
    const checkToken = async () => {
		var institute = await AsyncStorage.getItem("instituteToken");
		var dept = await AsyncStorage.getItem("deptToken");
		var username = await AsyncStorage.getItem("usernameToken");
		if(props.route.params){
			var course = props.route.params.course
			setCourse(course)
			var role = props.route.params.role
			setRole(role)
		} else{
			var course = await AsyncStorage.getItem("courseToken");
			setCourse(course)
		}
		var obj = {
			institute : institute,
			dept : dept,
			role : role,
			username : username,
			course : course
		}
		console.log("role", role)
		return obj
	}

    const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	
  
    
  	const fetchData = () => {
		checkToken()
		.then(res =>{
			fetch(`https://agile-bastion-40085.herokuapp.com/${res.institute}/${res.dept}/${res.course}`)
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

	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}

	const studentTeacherDashboardNav = () => {
		props.navigation.navigate("StudentTeacherDashboard", {course, role:role})
	}

	const teacherDashboardNav = () => {
		props.navigation.navigate("TeacherDashboard")
	}

	const deptCoursesNav = () => {
        props.navigation.navigate("DeptAdminCourses")
    }

	const notesPage = () => {
        props.navigation.navigate("Notes", {course, role})
	}
	
	const videosPage = () => {
        props.navigation.navigate("Videos", {course, role})
    }

	const deptDashboardNav = () => {
        props.navigation.navigate("DeptAdminDashboard")
	}

	const addCourseNav = () => {
        props.navigation.navigate("CreateCourse")
    }

	return(
        <View style={{flex:1, backgroundColor: 'white'}}>
			<MyComponent backBtn={false} titleText="Course" goback={goback}/>
			<View>
			<TouchableHighlight onPress = { () => console.log("this is")}>
                <View style={styles.ordersView} onPress={() => console.log("hello")}>
                    <View style={styles.middleOrderView}>
                        <Button icon="access-point" labelStyle={styles.ordersMiddleHeading2}>Live Lecture</Button >
                    </View>
                </View>
			</TouchableHighlight>
			<TouchableHighlight onPress = {() => {console.log("touched")}}>
				<View style={styles.ordersView} onPress={() => console.log("hello")}>
                    <View style={styles.middleOrderView}>
                        <Button icon="book-open" labelStyle={styles.ordersMiddleHeading2}>Live Test</Button>
                    </View>
                </View>
			</TouchableHighlight>
			<TouchableHighlight onPress = {() => notesPage() }>
				<View style={styles.ordersView} onPress={() => console.log("hello")}>
                    <View style={styles.middleOrderView}>
                        <Button icon="notebook-multiple" labelStyle={styles.ordersMiddleHeading2}>Notes</Button>
                    </View>
                </View>
			</TouchableHighlight>
			<TouchableHighlight onPress = {() => videosPage() }>
			<View style={styles.ordersView} onPress={() => console.log("hello")}>
                    <View style={styles.middleOrderView}>
                        <Button icon="library-video" labelStyle={styles.ordersMiddleHeading2}>Videos</Button>
                    </View>
                </View>
			</TouchableHighlight>
			</View>
			<Text style={styles.closeButton}>All Students : {course}</Text>
				<View style={styles.ordersView}>
                    <View style={{ flexDirection: 'row', flex: 2, justifyContent:'space-between'}}>
                        <View style={styles.middleOrderView}>
                            <Text style={{ textAlign:'left', paddingRight:70}}>Name </Text>
                        </View>
                        <View style={styles.middleOrderView}>
                            <Text style={{textAlign:'center', paddingRight:130}}>Roll No.</Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', flex: 1, alignItems:'center'}}>
                        <Text style={styles.orderUserName}>Username</Text>
                    </View>
                </View>
            <FlatList
                data = {data}
                renderItem = {({item})=>
                <View style={styles.ordersView}>
                    <View style={{ flexDirection: 'row', flex: 2, justifyContent:'space-between'}}>
	                    <View style={styles.middleOrderView}>
							<Text style={styles.ordersMiddleHeading}>{item.name} </Text>
        	            </View>
            	        <View style={styles.middleOrderView}>
						<Text style={{textAlign:'center', paddingRight:50}}>{item.rollno}</Text>
		    			</View>
					</View>
					<View style={{justifyContent: 'center', flex: 1, alignItems:'center'}}>
						<Text style={styles.orderUserName}>{item.username}</Text>
                    </View>
				</View>
                }
                keyExtractor={item=>item._id}
                onRefresh={()=>fetchData()}
                refreshing={loading}
            />
			<LoggedinFooter homeProp={homeNav} teacherDashboard={teacherDashboardNav} deptDashboard={deptDashboardNav} deptCourses={deptCoursesNav} addCourse={addCourseNav} studentTeacherDashboard={studentTeacherDashboardNav} role={role} />
        </View>
	)
}

const styles = StyleSheet.create({


	ordersView : {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		borderBottomColor: '#e0e0e0',
		borderBottomWidth: 0.8,
		backgroundColor: 'white',
		flexDirection: 'row',
	},

	middleOrderView : {
		marginLeft: 10,
		marginRight: 10,
		alignItems:'center',
		justifyContent: 'center',
	},

	ordersMiddleHeading : {
		fontWeight: 'bold',
		color: '#5c6bc0',
		alignItems:'center',
		justifyContent: 'center',
	},
	
	ordersMiddleHeading2 : {
		color: '#5c6bc0',
		fontWeight: 'bold',
		alignItems:'center',
		justifyContent: 'center',
	},
	
	orderUserNameClicked : {
		fontSize: 20,
		marginBottom: 8,
		marginTop: 5,
		fontWeight: 'bold',
	},

	orderValFrom : {
		fontWeight: 'normal',
		color: 'red',
	},

	ordersValHeading : {
		color: '#5c6bc0',
	},

	orderVal : {
		fontWeight: 'normal',
		color: 'red',
		fontSize: 17,
	},

	ordersViewClicked : {
		marginTop: 4,
		paddingTop: 13,
		paddingBottom: 13,
		paddingLeft: 10,
		borderRadius: 5,
		backgroundColor: 'white',
	},

	acceptButton : {
		borderRadius: 5,
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

    footerBtn : {
    	fontSize: 25,
    	color: '#1D2434',
    },

	tagButton : {
		backgroundColor: '#5601F3',
		color: 'whitesmoke',
		fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign:'center'
	},

	itemClicked : {
		paddingTop: 20,
		borderRadius: 4,
		paddingBottom: 40,
		paddingLeft: 10,
		margin: 10,
		backgroundColor: 'white',
	},

})

export default StudentTeacherDashboard