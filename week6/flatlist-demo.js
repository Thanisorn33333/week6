import react from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Alert} from "react-native";

export default function FlatlistDemo(){
  const listData =[
    {name:'iphone15',price: 48900},
    {name:'ipad',price: 25900},
    {name:'iwathch',price: 15000},
    {name:'ipad Air',price: 23000},
    {name:'iphone14 Pro',price: 30000}
  ]
  const onPressItem =(item) => {
         let name = item.name
         let price = item.price
         Alert.alert(`${name} ราคา ${item.price} บาท`)
}
    const rederFlatListItem =(listData) =>{
       return(
         <TouchableOpacity onPress={() => onPressItem(listData.item)}>
          <View key={listData.item.name} style={styles.flatListItem}>
              <Text style={styles.itemName}>{listData.item.name}</Text>
              <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
          </View>
          </TouchableOpacity>
       )  
       
    }
    return(
        <View style ={styles.container}> 
        <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
        <FlatList data={listData} renderItem={rederFlatListItem}
        keyExtractor={(item,index) => item+index}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
       
        
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
    },
   flatListItem:{
     flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:'#cde',
     marginBottom:8,
     padding:10,
   },
   itemName:{
     fontSize:18, fontWeight:'bold',
   },
   itemPrice:{
     fontSize:16 , color:'gray',
   }

})