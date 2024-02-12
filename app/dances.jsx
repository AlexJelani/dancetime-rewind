import React, {useEffect, useState} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View,} from 'react-native';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {fetchExercisesByBodypart} from '../api/exerciseDB';
import {demoExercises} from "../constants";
import {danceData} from "../constants/danceData"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons";
import DanceList from "../components/DanceList";
import {ScrollView} from "react-native-virtualized-view";
import { LogBox } from 'react-native';


// Add the following line to disable the specific warning
LogBox.ignoreLogs(['Warning: Failed prop type']);


export default function dances() {
    const router = useRouter();
    const [dances, setDances] = useState(danceData);
    const item = useLocalSearchParams();
    console.log('item.image:', item?.image);
    console.log('item data:', item); // Log the data from useLocalSearchParams


    useEffect(() => {
        if (item) {
            // getExercisesxercises(item.name);
        }
    }, [item]);

    const getDances = async (danceDecade) => {
            let data = await fetchExercisesByBodypart(danceDecade);
            // console.log('got data', data);
        setDances(data)
    };

    const {name, image} = item;
    // Check if the image is a URI or a number and create the appropriate source

    return (
        <ScrollView>
                <StatusBar style="light" />
                <Image
                    source={image}
                    style={{ width: wp(100), height: hp(45) }}
                    className="rounded-b-[40px]"
                />
            <TouchableOpacity
                onPress={()=> router.back()}
                className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
                style={{height:hp(5.5), width:hp(5.5), marginTop:hp(7)}}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
            </TouchableOpacity>
            {/*dances*/}
            <View className="mx-4 space-y-3 mt-4">
                <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700">
                    {name} dances
                </Text>
                <View className="mb-18">
                    <DanceList data={dances} />
                </View>
            </View>
        </ScrollView>
    );
}
