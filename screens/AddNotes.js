import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, StatusBar, View, Image, ScrollView, Modal, Alert} from "react-native";
import { Button, Card, FAB } from 'react-native-paper';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Feather';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';

const AddNotes = () => {

	
	
	const [course, setCourse] = useState("")
	const [topicname, setTopicname] = useState("")
	const [desc, setDesc] = useState("")
	const [file, setFile] = useState({
		name: "",
		type: "",
		uri: ""
	})
	const [uploadingFile, setUploadingFile] = useState()
	
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

	const pickDocument = async () => {
		console.log("here")
		let result = await DocumentPicker.getDocumentAsync({});
		if(result.type == "cancel"){
			Alert.alert("Please Choose a File first")
		} else{
			let newFile = {
				uri : result.uri,
				type : "test/pdf",
				name: result.name
			}
			setFile(newFile)
		}
	}
	return(
		<View style={ styles.container1 }>
		<MyComponent backBtn={true} titleText="Add" />
		<ScrollView>
		<View style={{ flex:1, margin: 20, alignItems: 'center', backgroundColor: '#fafaff'}}>
				<Text style={{ marginTop: 20, fontSize: 20}}>Add Lecture Topics</Text>
				<TextInput
					style={{width: 280, margin: 8, height: 40, borderColor: '#e0e0e0', backgroundColor: "#fff", borderWidth: 2, padding: 10,}}
					placeholder="Topic Name"
					placeholderTextColor="#a0a0a0"
			        value={topicname}
			        onChangeText={text => setTopicname( text )}
	      		/>
				<TextInput
					style={{width: 280, margin: 8, height: 40, borderColor: '#e0e0e0', backgroundColor: "#fff", borderWidth: 2, padding: 10,}}
					placeholder="Description"
					placeholderTextColor="#a0a0a0"
			        value={desc}
			        onChangeText={text => setDesc( text )}
	      		/>
	    		<TextInput
					style={{width: 280, margin: 8, height: 40, borderColor: '#e0e0e0', backgroundColor: "#fff", borderWidth: 2, padding: 10,}}
					placeholder="Course"
					placeholderTextColor="#a0a0a0"
					value={course}
					editable={false}
			        onChangeText={text => setCourse( text )}
	      		/>
	    		
				<Button mode="contained" style={{ width: 280, margin:10  }} onPress={pickDocument}>
					Choose File
				</Button>
				<Button mode="contained" style={{ width: 280, margin:10 }} onPress={pickDocument}>
					Upload Video
				</Button>
				<Button mode="contained" style={{ marginTop: 50 }} >
						Add Topics
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
  
export default AddNotes