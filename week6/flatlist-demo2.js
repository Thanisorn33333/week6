import react from "react";
import {View,Text,StyleSheet,FlatList,Image,TouchableHighlight} from "react-native";

export default function FlatlistDemo2(){
  let a =<Image source={require('./J15.jpg')} style={styles.img} />
  let b =<Image source={require('./J14.jpg')} style={styles.img} />
  let c =<Image source={require('./J16.jpg')} style={styles.img} />
  let d =<Image source={require('./J13.jpg')} style={styles.img} />
  const listData =[
    {img: a, name:'iphone15',price: 48900},
    {img: b, name:'ipad',price: 25900},
    {img: c, name:'iwathch',price: 15000},
    {img: d, name:'ipad Air',price: 23000}
  ]
   
    const rederFlatListItem =(listData) =>{
       return(
        <TouchableHighlight on onPress={() => onPressItemData(listData.item)}>
          <View key={listData.item.name} style={styles.flatListItem}>
              <Text style={styles.itemName}>{listData.item.name}</Text>
              <Text style={styles.itemName}>{listData.item.img}</Text>
              <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
              </View>
              </TouchableHighlight>
       )  
    }

    
    return(
      
        <View style ={styles.container}> 
        <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
        <FlatList data={listData} renderItem={rederFlatListItem}
        keyExtractor={(item,index) => item+index}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        numColumns={2}
        />
       
        </View>
  )      
}
      

 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50
    },
    flatList:{
      marginTop: 10
    },
    flatListContent:{
      margin: 10,
      paddingBottom:50,
      alignItems: 'center',
    },
   flatListItem:{
     width: 150,
     flexDirection:'column',
     justifyContent:'space-between',
     backgroundColor:'#cde',
     margin: 10,
     padding:10,
     alignItems: 'center'

   },
   itemName:{
     fontSize:18, fontWeight:'bold',
   },
   itemPrice:{
     fontSize:16 , color:'gray',
   },
    img:{
      width:40,
      height:40,
      marginRight: 10
      }

})