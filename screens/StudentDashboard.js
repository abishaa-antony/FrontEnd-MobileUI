import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB, Appbar, Title, Paragraph} from 'react-native-paper';
import LoggedoutFooter from '../Components/DashboardFooter';
import MyComponent from './Menu';

const ViewCourseStudent = (props) => {
    
    const ViewTopic = () => {
		props.navigation.navigate("Topics")
	}
    const ViewGrade = () => {
		props.navigation.navigate("MyGrade")
	}

	const HomeBack = () => {
		props.navigation.navigate("StudentDashboard")
	}

	const LoginBack = () => {
		props.navigation.navigate("AllView")
	}
   

    return( <View style={{flex:1, backgroundColor:'#fff'}}>
    <Appbar.Header>
        {props.backBtn?<Appbar.BackAction onPress={props.goback} />: <Text></Text>}
        <Appbar.Content title={props.titleText}/>              
        <Button style={{marginLeft:30, backgroundColor:'white'}} onPress = { () => { ViewGrade() }}>Grades</Button>
     
      </Appbar.Header>

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
   
    <Button style={{marginLeft:30}} onPress = { () => { ViewTopic() }}>View Topics</Button>
   
    </Card.Actions>
    </Card>   

    <Card>
    <Card.Title title="Level 2" subtitle="Course 2"  />
    <Card.Content>
    <Title>Programming Concepts</Title>
    <Paragraph>This specialization develops strong programming fundamentals for learners who want to solve complex problems by writing computer programs.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/programming.jpg')}/>
    <Card.Actions>

    <Button style={{marginLeft:30}} onPress = { () => { ViewTopic()  }}>View Topics</Button>
   
    </Card.Actions>
    </Card>
   
    <Card>
    <Card.Title title="Level 3" subtitle="Course 3" />
    <Card.Content>
    <Title>Mobile Development</Title>
    <Paragraph>This specialization develops strong programming fundamentals for learners who want to solve complex problems by writing computer programs.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/mobile.jpg')}/>
    <Card.Actions>

    <Button style={{marginLeft:30}} onPress = { () => {ViewTopic()  }}>View Topics</Button>
    
    </Card.Actions>
    </Card>
   
    <Card>
    <Card.Title title="Level 3" subtitle="Course 4"  />
    <Card.Content>
    <Title>Information System</Title>
    <Paragraph>ntroduction to modern programming design techniques using C++. A study of basic programming constructs, techniques and fundamental control structures. Emphasis is on Object Oriented and modular programming. Coverage includes data types, functions, arrays and pointers. The course examines problem analysis, decomposition and modern programming paradigms and methodologies.</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/information.jpg')}/>
    <Card.Actions>
   
    <Button style={{marginLeft:30}} onPress = { () => { ViewTopic()  }}>View Topics</Button>
    
    </Card.Actions>
    </Card>
   
    </ScrollView>	
    <LoggedoutFooter homeProp={HomeBack} loginProp={LoginBack}/>
    </View>	
   
</View>)
   
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
      justifyContent: 'center'
    },
  
  });
  export default ViewCourseStudent