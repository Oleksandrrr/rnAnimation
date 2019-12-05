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
    animation: new Animated.Value(150),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 200
      }).start()
    });
  }
  
  render() {
    const randomValue = new Animated.Value(2)
    const newAnimation = Animated.divide(this.state.animation, randomValue)
    const animatedStyles = {
     transform:[{
       translateY: newAnimation
     }]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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

