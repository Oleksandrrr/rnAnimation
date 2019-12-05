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
    animation: new Animated.Value(1)
  }
  startAnimation =() =>{
    Animated.timing(this.state.animation,{
      toValue:0,
      duration:350
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:1,
        duration:350
      }).start()
    })
  }

  render() {
    const animatedStyles = {
      opacity: this.state.animation
    }
    return ( <View style={styles.container}>
      <TouchableWithoutFeedback onPress={this.startAnimation}>
        <Animated.View style={[styles.box, animatedStyles ]}>
        <Icon name="rocket" size={30} color="#900" />
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
