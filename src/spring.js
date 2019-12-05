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
    animation: new Animated.Value(1)
  }
  handlePress =() =>{
    this.state.animation.addListener(({value})=>{
      
    })
    Animated.spring(this.state.animation,{
      toValue:2,
      friction:2,
      tension:80
    }).start(()=>{
      Animated.timing(this.state.animation, {
        toValue:1,
        duration:100
      }).start()
    })
  }

  render() {
    const animatedStyles = {
        transform:[{
          scale:this.state.animation
        }]
    }
    return ( <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.handlePress}>
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
