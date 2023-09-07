import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import UVT from '../assets/uvt.png'

export default function WelcomeScreen({navigation}) {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <View style={tw`absolute top-0 left-0 right-0 items-center justify-center pt-20`}>
        <Text style={tw`text-2xl font-semibold`}>UVThesisQuestions</Text>
        <Image style={tw`h-20 w-20 mt-4`} source={UVT}/>
        <Text style={tw`text-black text-lg mx-auto mt-10`}> Bine ai venit! Rau ai nimerit!</Text>

      </View>

      <TouchableOpacity style={tw`bg-blue-500 flex rounded-md p-4`} onPress={() => navigation.navigate('Menu')}>
        <Text style={tw`text-white text-3xl font-semibold mx-auto`}>Începe să înveți</Text>
      </TouchableOpacity>

    </View>
  );
}
