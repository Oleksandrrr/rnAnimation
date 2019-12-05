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
      toValue:1,
      duration:1000,
    }).start(()=>{
      // Animated.timing(this.state.animation,{
      //   toValue:0,
      //   duration:1500,
      // }).start()
    })
  }

  render() {
    const widthInterpolation = this.state.animation.interpolate({
      inputRange:[0,1],
      outputRange: ['20%','50%']
    })
    
    const heightInterpolation = this.state.animation.interpolate({
      inputRange:[0,1],
      outputRange: ['20%','30%']
    })

    const animatedStyle = {
     width: widthInterpolation,
     height: heightInterpolation
    }
    
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

    width:'20%',
    height: '20%',
    backgroundColor:'tomato'
  }
 
});
