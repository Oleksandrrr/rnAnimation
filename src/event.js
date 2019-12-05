/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
 TouchableWithoutFeedback,
  Animated,
  ScrollView
 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class App extends Component {
  state={
    animation: new Animated.Value(0)
  }
  startAnimation =() =>{
    Animated.timing(this.state.animation,{
      toValue:1,
      duration:1500,
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:0,
        duration:1500,
      }).start()
    })
  }

  render() {
    const backdroundInterpolation = this.state.animation.interpolate({
      inputRange:[0,3000],
      outputRange: ['rgb(255,99,71)','rgb(99,71,255)']
    })
   
    const boxAnimatedStyle = {
     backgroundColor: backdroundInterpolation
    }
    return ( <View style={styles.container}>
     <ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([
        {
          nativeEvent:{
            contentOffset:{
              y:this.state.animation
            }
          }
        }
      ])}
     >
       <Animated.View style={[styles.content, boxAnimatedStyle]}
       ></Animated.View>
     </ScrollView>
  </View>)
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  content:{
    height:3000
  }
 
});
