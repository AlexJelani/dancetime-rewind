import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {danceDecades} from '../constants';
import {LinearGradient} from "expo-linear-gradient";
import {useRouter} from "expo-router";


const DanceDecadeCard = ({ item, index, router }) => {

    return (
        <TouchableOpacity

            onPress={() => {

                // Navigate to the '/dances' route
                router.push({ pathname: "/dances", params: { ...item, image: item.image } });
            }}
            // style={{width:wp(44), height:hp(52)}}
            style={{height:150,width:150 }}
            className="flex justify-end p-4 mb-4"
        >
            <Image source={item.image}
                   resizeMode="cover"
                   // style={{width:wp(44), height:hp(52)}}
                   style={{height:150,width:150 }}
                   className="rounded-[35px] absolute"/>

            <Text
                style={{ height: hp(10)}}
                className="text-white font-semibold text-center tracking-wide"
            >{item?.name}</Text>

        </TouchableOpacity>
    );
};

export default function DanceDecade() {
    const router = useRouter();

    return (
        <View className="flex-1 mx-4">
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: 'gray' }} className="font-semibold text-neutral-700">Dances</Text>
            <FlatList
                data={danceDecades}
                numColumns={2}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginHorizontal: 30, // Adjust the margin as needed

                }}
                renderItem={({ item, index }) => <DanceDecadeCard router={router} index={index} item={item} />}
            />
        </View>
    );
}
