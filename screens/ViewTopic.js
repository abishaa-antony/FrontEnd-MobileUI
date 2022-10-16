import React, { useEffect, useState } from 'react';
import { Text, TextInput, Modal, Alert, StyleSheet, StatusBar, View, Image, FlatList, ScrollView, TouchableHighlight , TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Button, Card, List} from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';


const ViewTopics = (props) => {  
	 const Details = () => {
		props.navigation.navigate("Detail")
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
			<Text style={styles.closeButton}>Choose among these Topics of : Fundamentals of Computing</Text>
			<ScrollView>
			<List.Item
			title="Topic 1"
			description="Generations of Computer"					
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 2"
			description="Generations of Computer"	
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 3"
			description="Generations of Computer"
		   />
		   		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>
		   <List.Item
			title="Topic 4"
			description="Generations of Computer"
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 5"
			description="Generations of Computer"
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 6"
			description="Generations of Computer"
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 7"
			description="Generations of Computer"
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 8"
			description="Generations of Computer"
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 9"
			description="Generations of Computer"			
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

		   <List.Item
			title="Topic 10"
			description="Generations of Computer"			
		   />
		   	<Button icon="login" style={{marginTop: 20, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { Details() }}>View Details</Button>

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

export default  ViewTopics