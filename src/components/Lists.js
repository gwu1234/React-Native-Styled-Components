import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {List} from '../common';
const  screenHeight = Dimensions.get('window').height; 

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'demo 1',
    content: 'demo content 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'demo 2',
    content: 'demo content 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'demo 3',
    content: 'demo content 3',
  },
];

class Lists extends Component {
  constructor() {
      super();
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >List Show Room</Text>
            </View>
            <View style={styles.listContainer}>                  
                 <List data = {data}/>                 
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
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>                      
                    </Button>
                    <Button bordered light onPress = {()=>Actions.forms()} style={{backgroundColor:"white"}}>
                        <Text>forms</Text>  
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
  listContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column",
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

export default Lists
