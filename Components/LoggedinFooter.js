import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, StatusBar, View, Image, ScrollView, Linking, Platform, Alert} from "react-native";
import { Button, Card, FAB } from 'react-native-paper';
import Constants from 'expo-constants';
import InstituteAdminFooter from './InstituteAdminFooter';
import DepartmentFooter from './DepartmentFooter';
import TeacherFooter from './TeacherFooter';
import StudentTeacherFooter from './StudentTeacherFooter';
import AsyncStorage from '@react-native-async-storage/async-storage'


const LoggedinFooter = (props) => {

    const [data, setData] = React.useState('');

	const logoutBtn = () => {
        fetch(`https://agile-bastion-40085.herokuapp.com/logout`)
       .then(res=>res.json())
       .then(results=>{
           setData(results)
           AsyncStorage.removeItem('usernameToken')
           AsyncStorage.removeItem('nameToken')
           AsyncStorage.removeItem('courseToken')
           AsyncStorage.removeItem('rollnoToken')
           AsyncStorage.removeItem('instituteToken')
           AsyncStorage.removeItem('roleToken')
           AsyncStorage.removeItem('deptToken')
       .then(
			res => {
                props.homeProp()
            }
           )
       }). catch(err=>{
           Alert.alert(err.message)
       })
   }

   if (props.role == "institute-admin"){
    return (
           <InstituteAdminFooter instituteDashboard={props.instituteDashboard} logoutButton={logoutBtn}/>
       )
    } else if(props.role == "dept-admin"){
    return (
        <DepartmentFooter deptDashboard={props.deptDashboard} deptCourses={props.deptCourses} addCourse={props.addCourse} logoutButton={logoutBtn}/>
     )
    } else if(props.role == "institute-teacher"){
        return (
            <TeacherFooter teacherDashboard={props.teacherDashboard} logoutButton={logoutBtn}/>
         )
    } else if(props.role == "institute-student"){
        return (
            <StudentTeacherFooter studentTeacherDashboard={props.studentTeacherDashboard} logoutButton={logoutBtn}/>
         )
    }
 }
  
export default LoggedinFooter