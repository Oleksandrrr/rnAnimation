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
  state={
    animation: new Animated.ValueXY(0)
  }


  componentWillMount =() =>{
    // this._x=0
    // this._y=0

    // this.state.animation.addListener((value)=>{
    //   this._x = value.x
    //   this._y= value.y
    // })
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:()=>true,
      onMoveShouldSetPanResponder:()=> true,
      onPanResponderGrant:()=>{
        this.state.animation.extractOffset()
      },
      onPanResponderMove: Animated.event([
        null, 
        {
          dx:this.state.animation.x,
          dy:this.state.animation.y

        }
      ]),
      onPanResponderRelease:(e, {vx, vy})=>{
        Animated.decay(this.state.animation,{
          velocity: {x:vx, y:vy},
          deceleration:0.997
        }).start()
      }
    })
  }

 render() {
    const animatedStyles = {
     transform:this.state.animation.getTranslateTransform()
    }
    return ( <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles ]}
        {...this._panResponder.panHandlers}>
        </Animated.View>
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
    width:50,
    height: 50,
    backgroundColor:'tomato'
  }
 
});
