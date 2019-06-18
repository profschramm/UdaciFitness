import React, { Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers.js'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DataHeader'
import  { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'
// import getReview from './reviews'  Can't find this file
    // Dummy data to demonstrate ScrollView and FlatList
import {ScrollView, FlatList} from 'react-native'

const reviews = [
    {
        "url": "https://twitter.com/WaNgeL_SaTaR",
        "text": "Best courses",
        "name": "Taras",
        "key": "Taras",
        "avatar": "https://twitter.com/WaNgeL_SaTaR/profile_image?size=normal",
        best: true,
    }
]
function getReview( ) { // Dummy to demo FlatList and ScrollView
    return reviews
}

function Review ( {name, text, avatar}) {
    return (
        <View style={styles.review}>
            <Image source={{uri:avatar}} style={styles.avatar}/>
            <View style={{flex:1, flexWrap:'wrap'}}>
                <Text style={{fontSize:20}}> {name}</Text>
            </View>
        </View>
    )
}
function SubmitBtn ( { onPress } ) {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text>Submit</Text>
            </TouchableOpacity>
    )
}

export default class AddEntry extends Component {

    state = {
        run:0,
        bike:0,
        swim:0,
        sleep:0,
        eat:0,
    }

    increment = (metric) => {
        // Compare different syntax in increment and decrement
        const { max, step } = getMetricMetaInfo(metric)
        this.setState( (state) => {
            const count = state[metric] + step
            return {
                ...state,   // All other state stays the same
                [metric]: count > max ? max : count
            }

        })
    } 
    
    decrement = (metric) => {
        this.setState( (state) => {
            const count = state[metric] + getMetricMetaInfo(metric).step
            return {
                ...state,   // All other state stays the same
                [metric]: count < 0 ? 0 : count
            }

        })
    }

    slide = (metric, value) => {
        this.setState( () => ( {  // TBD: Why don't we use ...state here?
            [metric]: value,
        }))
    }

    submit = () => {
        const key = timeToString()
        const entry = this.state
        // Update Redux

        this.setState(() => ({
            run:0,
            bike:0,
            swim: 0,
            sleep: 0,
            eat: 0,
        }))
        
        // Navigate to home

        // Savwe to 'DB'

        // Clear local notification

    }

    reset = () => {
        const key = timeToString()
        // Update Redux
        //Route to Home
        // Update 'DB'
    }
    render () {
        const metaInfo = getMetricMetaInfo()

        if (this.props.alreadyLogged) {
            return (
                <View>
                    <Ionicons
                        name='ios-happy-outline'
                        size={100}
                    />
                    <Text>
                        You have already logged your information for today
                    </Text>
                    <TextButton onPress={this.reset}>
                        Reset
                    </TextButton>
                </View>
            )
        }

        renderItem = ({item}) => { // For use with FlatList
           return <Review {...item} />   // TBD: Notice the ... notation
        }
        return (
           <View>
               <DateHeader date = {(new Date()).toLocaleDateString()} />
               <Text>{JSON.stringify(this.state)}</Text>
               {Object.keys(metaInfo).map( (key) => {
                   const { getIcon, type, ...rest } = metaInfo[key]
                   const value = this.state[key]
                {/* TBD: Why the nested View and nested return??*/}
               return (
                <View key={key}>
                    {getIcon()}
                    {type === 'slider'
                        ? <UdaciSlider 
                            value={value}
                            onChange={(value) => this.slide(key,value)}
                            {...rest}
                        />
                        : <UdaciSteppers
                            value={value}
                            onIncrement={()=>this.increment(key)}
                            onDecrement={()=>this.decrement(key)}
                            {...rest}
                        />
                    }
                </View>
                )
                })}
                <SubmitBtn onPress={this.submit}/>
                <View>
                     {/*  With View, only the top of the list will be shown, to capacity of screen*/}
                    {reviews.map(({name,text,avatar}) => <Review key={name} name={name} text={text} avatar={avatar} />)}
                </View>
                <ScrollView>
                     {/*  With ScrollView, all will be accessible but not performance-efficent because will render even non-visible ones*/}
                    {reviews.map(({name,text,avatar}) => <Review key={name} name={name} text={text} avatar={avatar} />)}
                </ScrollView>
                     {/*  With FlatList, all will be accessible but  performance-efficent because will render only visible ones*/}
                <View>
                    <FlatList>
                        data = {reviews}
                        renderItem={this.renderItem}
                    </FlatList>
                </View>


                )}
            </View> 
        )
    }
}

/* Version 1: Minimal test UI

               <Text> Add Entry</Text>
               {getMetricMetaInfo('bike').getIcon()}
*/
