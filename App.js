import React from 'react';
import { Text, View } from 'react-native';
/*
import {TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Slider } from 'react-native'
import { AddEntry } from './components/AddEntry'
*/

export default class App extends React.Component {

  state = {
    value: 0    // Dummy state to demo slider
  }
  handlePress = () => {
    alert('Hello!')
  }

  render() {
    return (
      <View>
        <Text>
          Hello World
        </Text>
      </View>

    );
  }
}

/* Boilerplate provided, but deleted by Tyler
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

/* Version 1: Testing out the import of Iconicons

      <View style={styles.container}>
        <Ionicons name='ios-pizza' color='red' size={100} />
        <Text> Please </Text>
      </View>
*/

/* Version 2: Testing out the basic working of AddEntry

      <View>
        <AddEntry />
      </View>

*/

/* Build up of versions over all the lessons

        <AddEntry />
        <TouchableHighlight 
          style={styles.btn} 
          onPress={this.handlePress} 
          underlayColor='#d4271b'>
            <Text style={style.btnText}>Touchable Highlight</Text>
        </TouchableHighlight> 
        <TouchableOpacity  
          style={styles.btn} 
          onPress={this.handlePress}>
            <Text style={style.btnText}>Touchable Opacity</Text>
          </TouchableOpacity> 
        <TouchableWithoutFeedback  
          onPress={this.handlePress}>
            <View style={styles.btn} >
              <Text style={style.btnText}>Touchable Without Feedback</Text>
            </View>
        </TouchableWithoutFeedback> 
        <Slider 
          minimumValue={-10}
          maximumValue={10}
          step={1}
          value = {this.state.value}
          onValueChange={(value) => this.setState( () => ( {value }))}
        />
        <Text>
          Value: {this.state.value}
        </Text>
      </View>

      */
