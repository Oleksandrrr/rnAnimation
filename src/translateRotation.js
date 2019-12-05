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
      toValue:360,
      duration:1500,
    }).start(()=>{
      // Animated.timing(this.state.animation,{
      //   toValue:0,
      //   duration:1500,
      // }).start()
    })
  }

  render() {
    const rotateInterpolation = this.state.animation.interpolate({
      inputRange:[0,360],
      outputRange: ['0deg','-360deg']
    })
    // const colorInterpolation = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange: ['rgb(99,71,255)','rgb(255,99,71)']
    // })
    const animatedStyle = {
      transform:[{
        rotate: rotateInterpolation //rotateX, rotateY
      }]
    }
    // const boxAnimatedStyle = {
    //  backgroundColor: boxInterpolation
    // }
    return ( <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyle ]}>
          <Animated.Text >QWERTYQWERT</Animated.Text>
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
