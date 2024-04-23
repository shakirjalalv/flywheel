/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,  
  StyleSheet,  
  Text,
  View, 
} from 'react-native';



function App(): React.JSX.Element {  
  
  return (
    <SafeAreaView>      
      <View style={styles.sectionContainer}>
        <Text style={{textAlign:'center',marginTop:20,color:'white',fontSize:25}}>fareFirst</Text>        
        <View style={{marginLeft:30,marginRight:30,borderRadius:20,borderColor:'white',borderWidth:1,height:40,marginTop:20,display:'flex',justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
          <Text style={{color:'white'}}>One way</Text>
          <Text style={{color:'white'}}>Round trip</Text>
          <Text style={{color:'white'}}>Multi-city</Text>
        </View>
        <View style={{paddingLeft:30,paddingRight:30,flexDirection:'row',justifyContent:'space-between',paddingTop:30}}>
          <View><Text style={{color:'white',fontSize:15}}>From</Text><Text style={{fontSize:35,color:'white',fontWeight:'bold'}}>BLR</Text><Text style={{fontSize:15,color:'white'}}>Bengalure</Text></View>
          <View><Image source={require('./assets/arrow.png')} style={{width:40,height:30,marginTop:20}}></Image></View>
          <View><Text style={{color:'white',fontSize:15}}>To</Text><Text style={{fontSize:35,color:'white',fontWeight:'bold'}}>COK</Text><Text style={{fontSize:15,color:'white'}}>Kochi</Text></View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#2596be',
    height:'70%',
  },  
});

export default App;
