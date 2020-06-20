import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'native-base';
import {Button} from "../common";

//const  screenWidth = Dimensions.get('window').width; 
const  screenHeight = Dimensions.get('window').height; 

class Buttons extends Component {
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
                  <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Button Show Room</Text>
            </View>
            <View style={styles.buttonContainer}>
                  <View style={styles.left}>
                    <Button 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle} > 
                          Light
                    </Button>
                    <Button 
                           buttonStyle={{...styles.buttonStyle, backgroundColor: 'green'}}
                           textStyle={{...styles.textStyle, color:"white", fontWeight:"bold"}}> 
                           Primary 
                     </Button>
                    <Button 
                          buttonStyle={{...styles.buttonStyle, borderColor: 'orange'}}
                          textStyle={{...styles.textStyle, color: "orange"}} > 
                          Warning
                    </Button>
                    <Button 
                           buttonStyle={{...styles.buttonStyle, backgroundColor: 'red', borderColor: 'red'}}
                           textStyle={{...styles.textStyle, color:"white", fontWeight:"bold"}}> 
                           Danger
                     </Button>    
                </View>
            </View>
            <View style={styles.footer}>
                    <Button onPress = {()=>Actions.cards()} 
                          buttonStyle={styles.buttonStyle} 
                          textStyle={styles.textStyle} >
                          Cards                        
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
  buttonContainer: {
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
  left: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",  
  },
  right: {
    flex: 1,
    alignItems: "center",
    alignContent: "space-around",
    justifyContent: "space-around",
    flexDirection: "column",  
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

export default Buttons
