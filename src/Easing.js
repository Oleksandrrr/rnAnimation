/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
 TouchableWithoutFeedback,
  Animated,
  Easing
 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class App extends Component {
  state={
    animation: new Animated.Value(0)
  }
  startAnimation =() =>{
    Animated.timing(this.state.animation,{
      toValue:300,
      // easing: Easing.back(5)
      // easing: Easing.bounce
      // easing: Easing.elastic(3)
      easing: Easing.bezier(.06,1,.86,.23)

    }).start(()=>{
     this.state.animation.setValue(0)
    })
  }

  render() {
    const animatedStyles = {
        transform:[{
          translateY:this.state.animation
        }]
    }
    return ( <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles ]}>
          <Text>QWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTYQWERTY</Text>
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
