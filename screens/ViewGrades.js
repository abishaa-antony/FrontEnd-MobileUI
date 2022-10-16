import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Alert, StyleSheet, ScrollView, TouchableHighlight , TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import {Button, DataTable, Card, Title,Paragraph} from 'react-native-paper';
import { StackActions } from '@react-navigation/native';
import MyComponent from './Menu';


const ViewGrades = (props) => {  
    const optionsPerPage = [2, 3, 4];
	const goback = () =>{
		props.navigation.dispatch(StackActions.pop());
	}
    const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
	
   return(
        <View style={{flex:1, backgroundColor:"white"}}>
			<MyComponent backBtn={true} titleText="Grade Detail" goback={goback}/>
            <View style={{fontWeight:'bold', fontSize:30, alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:30, alignItems:'center'}}>Grades structure</Text>
            </View>

            <ScrollView>
            <DataTable>
      <DataTable.Header>
        <DataTable.Title>Grade Item</DataTable.Title>
        <DataTable.Title numeric>Range</DataTable.Title>
        <DataTable.Title numeric>Grade</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Assignment 1</DataTable.Cell>
        <DataTable.Cell numeric>0-100</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Assignment 2</DataTable.Cell>
        <DataTable.Cell numeric>0-100</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell>Quiz 1</DataTable.Cell>
        <DataTable.Cell numeric>0-100</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
    <Button icon="login" style={{marginTop: 50, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false}>Add Marks</Button>
    <Button icon="login" style={{marginTop: 10, paddingTop: 5, paddingBottom: 5}} mode="contained" uppercase={false}>Edit Marks</Button>
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

export default  ViewGrades