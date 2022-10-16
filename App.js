import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/Registeration';
import StudentLogin from './screens/StudentLogin';
import ViewCourses from './screens/ViewCourses';
import ViewTopics from './screens/ViewTopic';
import AddNotes from './screens/AddNotes'
import TopicDetails from './screens/TopicDetail';
import AddAssignment from './screens/UploadAssignment';
import ViewStudents from './screens/ViewStudent';
import ViewGrades from './screens/ViewGrades';
import ViewCourseStudent from './screens/StudentDashboard';
import LecturerLogin from './screens/LecturerLogin';
import AllView from './screens/AllView';
import MyGrades from './screens/MyGrades';
import Enrollment from './screens/Enrollment';
function App() {

  const Stack = createStackNavigator(); 
  const myOptions1 = {
    headerStyle: {
      backgroundColor: '#5601F3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }}

  return (    
      <Stack.Navigator initialRouteName="Home" headerMode={false}>
      <Stack.Screen name="ViewCourse" mode="card" component={ViewCourses} options={myOptions1}/>
      <Stack.Screen name="Home" mode="card" component={WelcomeScreen} options={myOptions1}/>
      <Stack.Screen name="TrueSignup" mode="card" component={RegisterScreen} options={myOptions1}/>
      <Stack.Screen name="StudentLogin" mode="card" component={StudentLogin} options={myOptions1}/>
      <Stack.Screen name="Notes" mode="card" component={AddNotes} options={myOptions1}/>
      <Stack.Screen name="Topics" mode="card" component={ViewTopics} options={myOptions1}/>
      <Stack.Screen name="Detail" mode="card" component={TopicDetails} options={myOptions1}/>
      <Stack.Screen name="Assignment" mode="card" component={AddAssignment} options={myOptions1}/>
      <Stack.Screen name="Students" mode="card" component={ViewStudents} options={myOptions1}/>
      <Stack.Screen name="Grades" mode="card" component={ViewGrades} options={myOptions1}/>
      <Stack.Screen name="StudentDashboard" mode="card" component={ViewCourseStudent} options={myOptions1}/>
      <Stack.Screen name="LecturerLogin" mode="card" component={LecturerLogin} options={myOptions1}/>
      <Stack.Screen name="AllView" mode="card" component={AllView} options={myOptions1}/>
      <Stack.Screen name="MyGrade" mode="card" component={MyGrades} options={myOptions1}/>
      <Stack.Screen name="Enroll" mode="card" component={Enrollment} options={myOptions1}/>
    </Stack.Navigator>
  );
}

export default () => {

  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
