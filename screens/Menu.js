import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar} from 'react-native-paper';
import { StackActions } from '@react-navigation/native';

// Create home app bar
const MyComponent = (props) => {

  
    return (
      <Appbar.Header>
        {props.backBtn?<Appbar.BackAction onPress={props.goback} />: <Text></Text>}
        <Appbar.Content title={props.titleText}/>    
        <Appbar.Action icon="alert-octagon" />
        <Appbar.Action icon="dictionary" />
     
      </Appbar.Header>
    );
  };

export default MyComponent;