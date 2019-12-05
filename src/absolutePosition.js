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
      toValue:40,
      duration:1500,
    }).start(()=>{
    //  this.state.animation.setValue(0)
    })
  }

  render() {
    const animatedStyles = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation //if aff right then take all space and will br slammer
    }
    return ( <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles ]}>
          {/* <Text>QWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTY</Text> */}
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
    position:'absolute',
    // left:0,
    // right:0,
    width:150,
    height: 150,
    backgroundColor:'tomato'
  }
 
});
