import { View, Text, SafeAreaView, ScrollView, Pressable, Modal ,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {Ionicons, AntDesign, FontAwesome5} from '@expo/vector-icons'
import { MaterialIcons} from '@expo/vector-icons'
import FoodItem from '../components/FoodItem'
import { useSelector } from 'react-redux'


const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart)
  //console.log(cart)
  const route = useRoute()
  // console.log(route.params)//inf from prev screen
  const navigation = useNavigation()
  const [menu, setMenu] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu)
    }
    fetchMenu()
  }, [])

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <>
    <ScrollView style={{marginTop:50}}>
      <View 
        style={{
          height:300,
          backgroundColor:"#b0c4de",
          borderBottomLeftRadius:40,
          borderBottomRightRadius:40}}
        >
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", margin:10}}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back" size={24} color="black"/>
          <View style={{flexDirection:"row",alignItems:"center" }}>
            <AntDesign name="search1" size={22} color="black"/>
            <Text style={{fontSize:14,fontWeight:"600",marginLeft:7}}>
              Search
            </Text>
          </View>
        </View>

        <View 
          style={{backgroundColor:"white",height:210,marginHorizontal:20,marginVertical:5,padding:10,borderRadius:15}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{route.params.name}</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <AntDesign 
                style={{marginHorizontal:7}}
                name="sharealt" size={24} color="black" />
              <AntDesign style={{position:"absolute",right:10,top:10}} name="hearto" size={24} color="white"/>
            </View>
          </View>

          <View style={{flexDirection:"row",alignItems:"center",marginTop:7}}>
            <MaterialIcons name="stars" size={24} color="green"/>
            <Text style={{marginLeft:3,fontSize:17,fontWeight:"400"}}>{route.params.rating}</Text>
            <Text style={{marginLeft:3}}>*</Text>
            <Text style={{marginLeft:3,fontSize:17,fontWeight:"400"}}>
              {route.params.time}mins
            </Text>
          </View>

          <Text style={{marginTop:10,color:"gray",fontSize:17}}>{route.params.cuisines}</Text>

          <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Text>Outlet</Text>
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"bold"}}>{route.params.adress}</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Text>22 min</Text>
            <Text style={{marginLeft:15,fontSize:14,fontWeight:"bold"}}>Home</Text>
          </View>

          <Text style={{borderColor:"gray",borderWidth:0.6,height:1,marginTop:12}}/>

          <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <FontAwesome5 name="bicycle" size={24} color="orange" />
            <Text style={{marginLeft:7,color:"gray",fontSize:16}}>0-3 Kms |</Text>
            <Text style={{marginLeft:7,color:"gray",fontSize:16}}
            >
              15 DeliveryFee will Apply
            </Text>
          </View>
        </View>
      </View>

          {/* menu part */}
      <Text 
        style={{
          textAlign:"center",
          fontSize:17,
          fontWeight:"500",
          marginTop:10
          }}
        >
          MENU
      </Text>
      <Text style={{
        borderColor:"gray",
        borderWidth:0.6,
        height:1,
        marginTop:12
      }}/>
      {route.params.menu.map((item,index) => (
        <FoodItem item={item} key={index}/>
      ))}
    </ScrollView>

    <Pressable 
      onPress={toggleModal}
      style={{
        width:50, 
        height:50,
        borderRadius:40,
        justifyContent:"center",
        backgroundColor:"black",
        marginLeft:"auto",
        position:"absolute",
        bottom:35,
        right:25,
        alignContent:"center"}}>
      <MaterialIcons style={{textAlign:"center"}} name="menu-book" size={24} color="white"/>
      <Text style={{textAlign:"center",color:"white",fontWeight:"300"}}>Menu text</Text>
    </Pressable>

    {/* <Modal 
      isVisible={modalVisible} 
      onBackdropPress={toggleModal}>
        <View 
          style={{width:250,height:190,backgroundColor:"black",position:"absolute",
          bottom:35,
          right:10,
          borderRadius:7
          }}
        >
          {menu.map((item,i) => (
            <View 
              style={{
                padding:10,
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between"
              }} key={i}>
              <Text style={{color:"#D0D0D0",fontWeight:"600",fontSize:19}}>{item.name}</Text>
              <Text style={{color:"#D0D0D0",fontWeight:"600",fontSize:19}}>{item.items.length}</Text>
            </View>
          ))}
            <View style={{ justifyContent:"center",alignItems:"center" }}>
            <Image
              style={{ width:120, height:70, resizeMode:"contain" }}
              source={{
                url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
    </Modal> */}
    </>
  )
}

export default MenuScreen