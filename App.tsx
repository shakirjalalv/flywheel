/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import About from './pages/About';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2596be', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={{ textAlign: 'center', marginTop: 20, color: 'white', fontSize: 25 }}>fareFirst</Text>
        <View style={{ marginLeft: 30, marginRight: 30, borderRadius: 20, borderColor: 'white', borderWidth: 1, height: 40, marginTop: 20, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>One way</Text>
          <Text style={{ color: 'white' }}>Round trip</Text>
          <Text style={{ color: 'white' }}>Multi-city</Text>
        </View>
        <View style={{ paddingLeft: 30, paddingRight: 30, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
          <View><Text style={{ color: 'white', fontSize: 15 }}>From</Text><Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>BLR</Text><Text style={{ fontSize: 15, color: 'white' }}>Bengalure</Text></View>
          <View><Image source={require('./assets/arrow.png')} style={{ width: 40, height: 30, marginTop: 20 }}></Image></View>
          <View><Text style={{ color: 'white', fontSize: 15 }}>To</Text><Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>COK</Text><Text style={{ fontSize: 15, color: 'white' }}>Kochi</Text></View>
        </View>
      </LinearGradient>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 20, paddingVertical: 20 }}>
          <Text style={{ color: 'grey', fontSize: 15 }}>DEPARTURE</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: "#2596be" }}>24</Text>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 22 }}>Apr</Text>
              <Text>Wednesday</Text>
            </View>
          </View>
        </View>
        <View style={{ width: 1, backgroundColor: '#e8dfdf' }}></View>
        <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 20, paddingVertical: 20 }}>
          <Text style={{ color: 'grey', fontSize: 15 }}>RETURN</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: "#2596be" }}>25</Text>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 22 }}>Apr</Text>
              <Text>Thursday</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#e8dfdf', width: '100%' }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 20, paddingVertical: 20 }}>
          <Text style={{ color: 'grey', fontSize: 15 }}>TRAVELLER</Text>
          <Text style={{ fontSize: 15, paddingTop: 10 }}>1 Adult</Text>
        </View>
        <View style={{ width: 1, backgroundColor: '#e8dfdf' }}></View>
        <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 20, paddingVertical: 20 }}>
          <Text style={{ color: 'grey', fontSize: 15 }}>CLASS</Text>
          <Text style={{ fontSize: 15, paddingTop: 10 }}>ECONOMY</Text>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#e8dfdf', width: '100%', }}></View>

      <View style={{ paddingLeft: 20, paddingRight: 20, alignSelf: 'center', width: '100%', marginTop: 100 }}>
        <TouchableOpacity style={{ borderRadius: 20 }}>
          <LinearGradient
            colors={['#2596be', '#192f6a',]} 
            style={{
              alignItems: 'center',
              padding: 15,
              borderRadius: 20,
            }}>            
            <Text style={{ color: 'white', fontSize: 15 }}>SEARCH FLIGHTS</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View> */}      
      <About />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  linearGradient: {
    // height: '65%',
    paddingBottom: 40
  },
});

export default App;
