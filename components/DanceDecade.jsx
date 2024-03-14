import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {danceDecades} from '../constants';
import {danceData} from '../constants/danceData'
import {useRouter} from "expo-router";
import {UseGetAllDances} from "./hooks/getAllDancesQuery";


const DanceDecadeCard = ({ item, index, router }) => {

    return (
        <TouchableOpacity
            onPress={() => {


                // Log the params to the console
                console.log('Params:', item);

                router.push({
                    pathname: "/dances",
                    params: {
                        image: item.image,
                        dances: JSON.stringify(item.dances), // Stringify item.dances as JSON
                        id: item.id,
                        danceDecade: item.danceDecade,
                    }
                });



            }}
            // style={{width:wp(44), height:hp(52)}}
            style={{height:150,width:150 }}
            className="flex justify-end p-4 mb-4"
        >
            <Image source={item?.image}
                   contentFit="cover"
                // style={{width:wp(44), height:hp(52)}}
                   style={{height:150,width:150 }}
                   className="rounded-[35px] absolute"/>


            <Text
                style={{ height: hp(10)}}
                className="text-white font-semibold text-center tracking-wide"
            >{item.danceDecade}</Text>

        </TouchableOpacity>
    );
};

export default function DanceDecade() {
    const router = useRouter();
    const {data, isLoading} = UseGetAllDances();
    console.log('UseGetAllDances result:', data, isLoading);


    return (
        <View className="flex-1 mx-4">
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: 'gray' }} className="font-semibold text-neutral-700">Dances</Text>
            <FlatList
                data={danceData}
                numColumns={2}
                keyExtractor={(item) => item.id} // Use item.id as the key
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
