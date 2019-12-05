/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
 TouchableWithoutFeedback,
  Animated,
  ScrollView,
  PanResponder
 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class App extends Component {
  state = {
    animation: new Animated.Value(1),
  };
  startAnimation =() =>{
    Animated.timing(this.state.animation,{
      toValue:2,
      duration:1500,
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:1,
        duration:750,
      }).start()
    })
  }
  
  render() {
    
    const  scaleInterpolate = this.state.animation.interpolate({
      inputRange:[1,2],
      outputRange:[1,2],
      // extrapolate:'identity'
      extrapolate:'clamp',
      // extrapolateLeft:'clamp',
      // extrapolateRight:'clamp'
    })
    const animatedStyle ={
      transform:[
       {scale: scaleInterpolate}
      ],
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box,animatedStyle  ]} >
            {/* <Animated.Text style={styles.text}>Hello</Animated.Text> */}
            </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});

