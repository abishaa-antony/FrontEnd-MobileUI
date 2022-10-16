import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Alert, StyleSheet, ScrollView, TouchableHighlight , TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Button, Card, Title,Paragraph} from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';


const TopicDetails = (props) => {  

	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}
	
   return(
        <View style={{flex:1, backgroundColor:"white"}}>
			<MyComponent backBtn={true} titleText="Topic Detail" goback={goback}/>
            <View style={{fontWeight:'bold', fontSize:30, alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:30, alignItems:'center'}}>Topic 1</Text>
            </View>

            <ScrollView>
            <Card>
            <Card.Title title="Learning outcomes" />
            <Card.Content>
            <Title>Generations of Computer</Title>
            <Paragraph>Fundamentals of Computing offers a focused curriculum designed around foundational computer science concepts, including computer systems, programming, networks, and data management.</Paragraph>
            </Card.Content>
            <Card.Cover source={require('../assets/computing.jpg')}/>
            <Card.Actions>
            <Button >References</Button>
            </Card.Actions>
            </Card>
            </ScrollView>

            <Button icon="login" style={{marginTop: 10, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false}>Download Lecture Note</Button>
            <Button icon="login" style={{marginTop: 10, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false}>Download Lecture Video</Button>
            <Button icon="login" style={{marginTop: 10, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false}>View Assignments</Button>
			<ScrollView>
			
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

export default  TopicDetails