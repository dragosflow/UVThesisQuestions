import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import UVT from '../assets/uvt.png'

export default function MenuScreen({navigation}) {
  return (
    <View style={tw`flex-1 items-center bg-white`}>
      <View style={tw` top-0 left-0 right-0 items-center justify-center pt-10`}>
        <Image style={tw`h-20 w-20 mt-4`} source={UVT}/>
        <Text style={tw`text-black text-lg mx-auto mt-10`}>Alege cum vrei sa apara intrebarile</Text>
      </View>

      <TouchableOpacity style={tw`bg-blue-500 flex w-3/4 rounded-md p-2 mt-10`} onPress={() => {navigation.navigate("All")}}>
        <Text style={tw`text-white text-lg mx-auto`}>Toate intrebarile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-blue-500 w-3/4 flex rounded-md p-2 mt-10`} onPress={() => { console.log("Random"); }}>
        <Text style={tw`text-white text-lg mx-auto`}>3 intrebari random</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-blue-500 w-3/4 flex rounded-md p-2 mt-10`} onPress={() => { console.log("Learn"); }}>
        <Text style={tw`text-white text-lg mx-auto`}>Alege dupa categorii</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`bg-blue-500 w-3/4 flex rounded-md p-2 mt-10`} onPress={() => { console.log("Learn"); }}>
        <Text style={tw`text-white text-lg mx-auto`}>Invata</Text>
      </TouchableOpacity>
    </View>
  );
}
