import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Card, CardItem, Button } from '../common';

const  screenWidth = Dimensions.get('window').width; 
const  screenHeight = Dimensions.get('window').height; 


class Cards extends Component {
  constructor() {
      super();
  }

  buttonPressed =() => {
     console.log("pressed");
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Card Show Room</Text>
            </View>
            <View style={styles.cardContainer}>
                  <Card>
                      <CardItem  style={{padding: 15, backgroundColor:"blue"}}>
                          <Text style={{color: "white", fontWeight:"bold"}}>Card Header</Text>
                      </CardItem>
                      <CardItem style={{padding: 10, backgroundColor:"lightblue"}}>
                          <Text>
                            Card Item 1: NativeBase is a free and open source framework that enable
                            developers to build
                            high-quality mobile apps using React Native iOS and Android
                            apps
                            with a fusion of ES6.
                          </Text>                  
                    </CardItem>
                    <CardItem style={{padding: 15, backgroundColor:"lightgreen"}}>                    
                          <Text>
                            Card Item 2: NativeBase is a free and open source framework that enable
                            developers to build
                            high-quality mobile apps using React Native iOS and Android
                            apps
                            with a fusion of ES6.
                        </Text>                      
                    </CardItem>
                    <CardItem  style={{padding:20,  backgroundColor:"lightgray"}}>                
                          <Text>
                            Card Item 3: NativeBase is a free and open source framework that enable
                            developers to build
                            high-quality mobile apps using React Native iOS and Android
                            apps
                            with a fusion of ES6.
                          </Text>                    
                    </CardItem>
                    <CardItem style={{padding: 15, backgroundColor:"blue"}}>
                           <Text style={{color: "white", fontWeight: "bold"}}>Card Footer</Text>
                    </CardItem>
                  </Card>
            </View>
            <View style={styles.footer}>
                    <Button onPress = {()=>Actions.buttons()} 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle} >
                          Buttons                       
                    </Button>
                    <Button onPress = {()=>Actions.badges()} 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle} >
                          Badges                        
                    </Button>
                    <Button onPress = {()=>Actions.checkboxes()} 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle}>
                          CheckBoxes                        
                    </Button>
                    <Button onPress = {()=>Actions.lists()} 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle} >
                          Lists                     
                    </Button>
                    <Button onPress = {()=>Actions.forms()} 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle} >
                          forms  
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
  cardContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "row",      
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: 'green',
    flexDirection: "row", 
    justifyContent: "space-around", 
  },
  user: {
    width: 150,
    height: 150, 
  },
  image: {
    width: 100,
    height: 100, 
  },
  name:{
    fontWeight:"bold",
    color: "black"
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'normal',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }  
};

export default Cards
