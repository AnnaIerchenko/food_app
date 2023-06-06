import React from 'react'
import {Text, View, TextInput, ScrollView, Pressable} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import Carousel from '../components/Carousel'
import FoodTypes from '../components/FoodTypes'
import QuickFood from '../components/QuickFood'
import {Ionicons} from '@expo/vector-icons'
import hotels from '../data/hotels'
import MenuItem from '../components/MenuItem'

const HomeScreen = () => {
  const data = hotels
  return (
    <ScrollView style={{marginTop:50}}>
      {/* Search Bar */}
      <View 
        style={{
          flexDirection:"row", 
          alignItems:"center", justifyContent:"space-between",
          borderWidth:1, 
          margin:10, 
          padding:10,
          borderColor:"#c0c0c0",
          borderRadius:7
          }}
        >
        <TextInput style={{fontSize:16}} placeholder="Search for Reataurant item or more" />
        <AntDesign name="search1" size={24} color="#e52b50"/>
      </View>
      {/* image slider component */}
      <Carousel />

      {/* food item types */}
      <FoodTypes />

      {/* quick food components */}
      <QuickFood />

      {/* filter buttons */}
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <Pressable 
        style={{
          marginHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          borderWidth:1,
          borderColor:"#d0d0d0",
          padding:10,
          borderRadius:20,
          justifyContent:"center",
          width:120
        }}
      >
        <Text style={{marginRight:6}}>Filter</Text>
        <Ionicons name="filter" size={20} color="black"/>
      </Pressable>
      <Pressable 
        style={{
          marginHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          borderWidth:1,
          borderColor:"#d0d0d0",
          padding:10,
          borderRadius:20,
          justifyContent:"center",
          width:120
        }}
      >
        <Text>Sort By Rating</Text>
      
      </Pressable>
      <Pressable 
        style={{
          marginHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          borderWidth:1,
          borderColor:"#d0d0d0",
          padding:10,
          borderRadius:20,
          justifyContent:"center",
          width:120
        }}
      >
        <Text>Sort By Price</Text>
      </Pressable>
      </View>
      {/* menu */}
      {data.map((item,index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  
  )
}

export default HomeScreen