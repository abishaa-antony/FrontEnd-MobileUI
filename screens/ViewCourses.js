import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB, TextInput, Title, Paragraph} from 'react-native-paper';
import LoggedoutFooter from '../Components/LoggedoutFooter';
import MyComponent from './Menu';

const ViewCourses = (props) => {
    const AddTopic = () => {
		props.navigation.navigate("Notes")
	}
    const ViewTopic = () => {
		props.navigation.navigate("Topics")
	}
    const ViewAssignment = () => {
		props.navigation.navigate("Assignment")
	}
    const ViewStudents = () => {
		props.navigation.navigate("Students")
	}
   

    return( <View style={{flex:1, backgroundColor:'#fff'}}>
    <MyComponent backBtn={false} titleText="Courses"/>

    <View style={styles.container1}>
    <ScrollView>
    <Card>
    <Card.Title title="Level 1" subtitle="Course 1" />
    <Card.Content>
    <Title>Fundamentals of Computing</Title>
    <Paragraph>Fundamentals of Computing offers a focused curriculum designed around foundational computer science concepts, including computer systems, programming, networks, and data management.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/computing.jpg')}/>
    <Card.Actions>
    <Button onPress = { () => { AddTopic() }}>Add Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => { ViewTopic() }}>View Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => { ViewAssignment() }}>Evaluate</Button>
    </Card.Actions>
    </Card>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false}  onPress = { () => { ViewStudents() }} >View Students</Button>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5, marginBottom:20}} mode="contained" uppercase={false}  onPress = { () => { ViewStudents() }} >Post Announements</Button>

    <Card>
    <Card.Title title="Level 2" subtitle="Course 2"  />
    <Card.Content>
    <Title>Programming Concepts</Title>
    <Paragraph>This specialization develops strong programming fundamentals for learners who want to solve complex problems by writing computer programs.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/programming.jpg')}/>
    <Card.Actions>
    <Button onPress = { () => { AddTopic() }}>Add Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => { ViewTopic()  }}>View Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => { ViewAssignment() }}>Evaluate</Button>
    </Card.Actions>
    </Card>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { ViewStudents() }} >View Students</Button>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5, marginBottom:20}} mode="contained" uppercase={false}  onPress = { () => { ViewStudents() }} >Post Announements</Button>
    <Card>
    <Card.Title title="Level 3" subtitle="Course 3" />
    <Card.Content>
    <Title>Mobile Development</Title>
    <Paragraph>This specialization develops strong programming fundamentals for learners who want to solve complex problems by writing computer programs.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/mobile.jpg')}/>
    <Card.Actions>
    <Button onPress = { () => { AddTopic() }}>Add Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => {ViewTopic()  }}>View Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => {ViewAssignment() }}>Evaluate</Button>
    </Card.Actions>
    </Card>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { ViewStudents() }} >View Students</Button>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5 , marginBottom:20}} mode="contained" uppercase={false}  onPress = { () => { ViewStudents() }} >Post Announements</Button>
    <Card>
    <Card.Title title="Level 3" subtitle="Course 4"  />
    <Card.Content>
    <Title>Information System</Title>
    <Paragraph>ntroduction to modern programming design techniques using C++. A study of basic programming constructs, techniques and fundamental control structures. Emphasis is on Object Oriented and modular programming. Coverage includes data types, functions, arrays and pointers. The course examines problem analysis, decomposition and modern programming paradigms and methodologies.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/information.jpg')}/>
    <Card.Actions>
    <Button onPress = { () => { AddTopic() }}>Add Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => { ViewTopic()  }}>View Topics</Button>
    <Button style={{marginLeft:30}} onPress = { () => { ViewAssignment()}}>Evaluate</Button>
    </Card.Actions>
    </Card>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false} onPress = { () => { ViewStudents() }} >View Students</Button>
    <Button icon="login" style={{marginTop: 5, paddingTop: 5, paddingBottom: 5, marginBottom:20}} mode="contained" uppercase={false}  onPress = { () => { ViewStudents() }} >Post Announements</Button>
    </ScrollView>	
    </View>	
   
</View>)
   
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
      justifyContent: 'center'
    },
  
  });
  export default ViewCourses