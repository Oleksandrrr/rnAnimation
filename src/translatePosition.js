/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
 TouchableWithoutFeedback,
  Animated,
 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class App extends Component {
  state={
    animation: new Animated.Value(0)
  }
  startAnimation =() =>{
    Animated.timing(this.state.animation,{
      toValue:300,
      duration:1500,
    }).start(()=>{
     this.state.animation.setValue(0)
    })
  }

  render() {
    const animatedStyles = {
      transform: [{
        translateY:  this.state.animation
      }]
    }
    return ( <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles ]}>
        </Animated.View>
      </TouchableWithoutFeedback>
  </View>)
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box:{
    width:150,
    height: 150,
    backgroundColor:'tomato'
  }
 
});
