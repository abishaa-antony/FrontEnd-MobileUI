import React, { useEffect, useState } from 'react';
import { Text, TextInput, Modal, Alert, StyleSheet, StatusBar, View, Image, FlatList, ScrollView, TouchableHighlight , TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Button, Card, List} from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';


const ViewStudents = (props) => {  
	
    const Grades = () => {
		props.navigation.navigate("Grades")
	}

	const makeDownload = (item) =>{
		Alert.alert("Downloaded")
	}

	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}
	
   return(
        <View style={{flex:1, backgroundColor:"white"}}>
			<MyComponent backBtn={true} titleText="Notes" goback={goback}/>
			<Text style={styles.closeButton}>Choose among these enrolled students of : Fundamentals of Computing</Text>
			<ScrollView>
			<List.Item
			title="IM/2018/070"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"					
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Grades() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/071"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Grades() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/072"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Grades() }}>View Grades</Button>
		   <List.Item
			title="IM/2018/073"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => {Grades() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/074"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Grades() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/075"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/076"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/077"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/078"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"				
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Grades</Button>

		   <List.Item
			title="IM/2018/079"
			description="Abishaa Rubanathan, Last Activity on : 18 hours ago"				
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Grades</Button>

		   </ScrollView>
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
		flex: 2,
		padding: 5,
		justifyContent: 'center',
	},

	ordersMiddleHeading : {
		fontWeight: 'bold',
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

    footerBtn : {
    	fontSize: 25,
    	color: '#1D2434',
	},
	
	fab: {
		color: 'red',
		backgroundColor: '#4700cc',
		position: 'absolute',
		margin: 20,
		right: 10,
		bottom: 40,
	  },
	})

export default  ViewStudents