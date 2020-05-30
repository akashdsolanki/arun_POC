//Globle Imports
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// File imports
import App from './App';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

//navigators
const Stack = createStackNavigator();

class MainScreen extends Component{
  state = {
    userName: ''
  }

  _startCall = (type) => {
    const { userName } = this.state

    if(userName == ''){
      Alert.alert('Please enter your user name')
    } else {
      this.props.navigation.navigate('App', { userName: this.state.userName, type: type })
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>  
        <Text style={{ fontSize: 30, marginBottom: 30, textAlign: 'center' }}>Jitsi Voice/Video {'\n'}call Example</Text>
        <TextInput
          placeholder="Enter your user name"
          onChangeText={(val) => this.setState({ userName: val })}
          value={this.state.userName}
          style={{
            borderColor: 'darkgray',
            borderWidth: 1,
            width: '80%',
            padding: 12,
            borderRadius: 50,
            fontSize: 20,
            textAlign: 'center'
          }}
        />
        <TouchableOpacity
          onPress={() => this._startCall('video')}
          style={{
          backgroundColor: '#3277a8',
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 50,
          marginTop: 15
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            textTransform: 'uppercase',
          }}>Start Video Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._startCall('voice')}
          disabled
          style={{
          backgroundColor: '#9a32a8',
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 50,
          marginTop: 10
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            textTransform: 'uppercase',
          }}>Start Voice Call</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class AppNavigator extends Component {

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="App"
            component={App}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
