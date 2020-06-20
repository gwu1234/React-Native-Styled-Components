import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text} from 'native-base';
import {MyBadge} from '../common';
import {Mail, MailOutline, Mood, MoodBad} from '@material-ui/icons';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 

class Badges extends Component {
  constructor() {
      super();
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Badge Show Room</Text>
            </View>
            <View style={styles.badgeContainer}>
                  <MyBadge>                      
                  </MyBadge>
                  <MyBadge badgeContent={1} color="primary" overlap="rectangle">                      
                  </MyBadge>
                  <MyBadge badgeContent={1} color="primary">
                        <Mail />
                  </MyBadge>
                  <MyBadge badgeContent={2} color="primary" anchorOrigin={{vertical:"top", horizontal: "left"}}>
                        <MailOutline/>
                  </MyBadge>
                  <MyBadge badgeContent={3} color="error" anchorOrigin={{vertical:"top", horizontal: "left"}}>
                        <Mood/>
                  </MyBadge> 
                  <MyBadge badgeContent={3} color="error" anchorOrigin={{vertical:"top", horizontal: "right"}}>
                        <Mood/>
                  </MyBadge> 
                  <MyBadge badgeContent={3} color="error" anchorOrigin={{vertical:"bottom", horizontal: "right"}}>
                        <Mood/>
                  </MyBadge> 
                  <MyBadge badgeContent={3} color="error" anchorOrigin={{vertical:"bottom", horizontal: "left"}}>
                        <Mood/>
                  </MyBadge> 
                  <MyBadge>
                        <MoodBad/>
                  </MyBadge>                   
            </View>
            <View style={styles.footer}>
                    <Button bordered light onPress = {()=>Actions.cards()} style={{backgroundColor:"white"}}>
                        <Text>Cards</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.checkboxes()} style={{backgroundColor:"white"}}>
                        <Text>CheckBoxes</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.lists()} style={{backgroundColor:"white"}}>
                        <Text>Lists</Text>                      
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
  badgeContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column", 
    justifyContent: "space-around", 
    alignItems: "center",   
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

export default Badges
