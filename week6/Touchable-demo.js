import react from "react";
import {View,Text,StyleSheet,Image,Alert,TouchableOpacity,TouchableHighlight} from "react-native";

export default function TouchAbleDemo(){
    
    return(
        <View style ={styles.container}> 
            <TouchableOpacity activeOpacity={0.50} 
            style={styles.items}
            onPress={()=>{Alert.alert('you click button opacity')}}
            >
            <Text style={styles.buttonText}>Opacity</Text>
            </TouchableOpacity>

            <TouchableHighlight underlayColor={'red'}
           style={styles.items}
           onPress={()=>{Alert.alert('you click button opacity')}}
            >
            <Text style={styles.buttonText}>Height</Text>
             </TouchableHighlight>

             <TouchableHighlight underlayColor={'red'}
           style={styles.items}
           >
            <View  style={styles.viewImgTxetContainer}>
                 <Image source={require('./S1.png')}style={styles.img}/>
                 <Text style={styles.buttonText}>Height</Text>
            </View>         
        </TouchableHighlight>
  </View>
                  
                 )
            }

 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        marginTop:50,
        padding:5
    },
    item:{
        height:100,
        width:100,
        backgroundColor:'Pink',
        marginBottom:15,
        //paddingLeft:10,
        justifyContent: 'center',
        alignItems:'center',
        margin:10
    },
    text:{
        color:'Blue',
        fontSize: 20,
        
    },
    buttonText:{
      fontSize:20,
      color: '#000000'
    },
    img:{
      width:40,
      height:40,
      marginRight: 10
    },
    viewImgTxetContainer:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-evenly'
    }


})