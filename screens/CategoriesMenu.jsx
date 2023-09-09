import React, {useEffect, useState} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import UVT from '../assets/uvt.png'
import questions from '../questions.json'
import { ScrollView } from 'react-native-gesture-handler';

export default function CategoriesMenu({navigation}) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const newCategories = new Set()
        for (var i = 0; i < questions.length; i++) {
            newCategories.add(questions[i].Category)
        }
        setCategories(Array.from(newCategories))
    }, [])


    return (
        <ScrollView style={tw`flex bg-white mb-10`}>
            <View style={tw` top-0 left-0 right-0 items-center justify-center pt-10`}>
                <Image style={tw`h-20 w-20 mt-4`} source={UVT}/>
                <Text style={tw`text-black text-lg mx-auto mt-10`}>Alege categoria</Text>
            </View>

            {categories.map((category) => 
                <TouchableOpacity key={category} style={tw`bg-blue-500 mx-auto flex w-3/4 rounded-md p-2 mt-10`} onPress={() => {navigation.navigate("CategoryQuestionsScreen", { category })}}>
                    <Text style={tw`text-white text-lg mx-auto`}>{category}</Text>
                </TouchableOpacity>
                )}
        </ScrollView>
    );
}
