import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, Form, Item} from 'native-base';
import {Input}  from '../common';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 



class Forms extends Component {
  constructor() {
      super();
      this.state = {
         inputValue: ""
      }  
  }

  
  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Form Show Room</Text>
            </View>
            <View style={styles.formContainer}>                                      
                  <Input label = "User Name " 
                      placeholder="Username" 
                      onChangeText={
                          val => { 
                            this.setState({ inputValue: val});
                            console.log(val)}
                    }
                  />
                               
                  <Input label = "Password "
                      placeholder="Password" 
                      secureTextEntry={true}
                      onChangeText={
                        val => { 
                          this.setState({ inputValue: val});
                          console.log(val)}
                  }
                  />                  
            </View>
            <View style={styles.footer}>
                    <Button bordered light onPress = {()=>Actions.cards()} style={{backgroundColor:"white"}}>
                        <Text>Cards</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.badges()} style={{backgroundColor:"white"}}>
                        <Text>Badges</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.checkboxes()} style={{backgroundColor:"white"}}>
                        <Text>CheckBoxes</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.lists()} style={{backgroundColor:"white"}}>
                        <Text>Lists</Text>                      
                    </Button>
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>  
                    </Button>                 
             </View>  
          </View>   
        );
      }
  }

const styles = {
  container: {
    flex: 1 ,     
  }, 
  header : {
    position: 'absolute',
    top: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: '#EE5407',
    alignItems: "center",
  },
  formContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column", 
    justifyContent: "space-around", 
    alignItems: "center", 
    overflow: "scroll"  
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: 'green',
    flexDirection: "row", 
    justifyContent: "space-around", 
  }
};

export default Forms
