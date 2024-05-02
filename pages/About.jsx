import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


function About() {
    return (
        <>        
            <View style={{ height: 250,  }}>
                <Text style={{alignSelf:'center',fontSize:24,marginTop:40,color:'blue',fontWeight:'500'}}>Fly wheels</Text>
                <Text style={{textAlign:'center',paddingHorizontal:40,color:'grey',lineHeight:20,marginTop:20,fontWeight:'300'}}>
                    we compare all the top travel sites in one simple ssearch and help you find the bet flight and hotel deals. as a travel metasearch engine, we dont sell tickets.  the booking happens in respetive online travel agent websites.
                </Text>
            </View>
            <View>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,flexDirection:'row',justifyContent:'space-between'}}><Text style={{fontSize:13,fontWeight:'300'}}>Country</Text><Text>IN</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,flexDirection:'row',justifyContent:'space-between'}}><Text style={{fontSize:13,fontWeight:'300'}}>Currency</Text><Text>INR</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,}}><Text style={{fontSize:13,fontWeight:'300'}}>Rate this app</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,}}><Text style={{fontSize:13,fontWeight:'300'}}>Social networks</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,}}><Text style={{fontSize:13,fontWeight:'300'}}>Recommend the app</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,}}><Text style={{fontSize:13,fontWeight:'300'}}>Privacy policy</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={{backgroundColor:'#d6d3d2',borderBottomColor:'white',marginBottom:0.5,paddingTop:15,paddingBottom:15 ,paddingLeft:30,paddingRight:30,}}><Text style={{fontSize:13,fontWeight:'300'}}>Terms and condtion</Text></View></TouchableOpacity>
            </View>            
        </>
    )
}

export default About