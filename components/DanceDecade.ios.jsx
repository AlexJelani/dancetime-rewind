import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRouter } from "expo-router";
import { UseGetAllDances } from "./hooks/getAllDancesQuery";

const DanceDecadeCard = ({ item, router }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                console.log('Params image:', item.image); // Log the image param here
                router.push({
                    pathname: "/dances",
                    params: {
                        image: item.image,
                        dances: JSON.stringify(item.dances),
                        id: item.id,
                        danceDecade: item.danceDecade,
                    }
                });
            }}
            style={{ height: 150, width: 150 }}
            className="flex justify-end p-4 mb-4"
        >
            <Image
                source={{ uri: item.image }} // Use uri for Image source
                style={{ height: 150, width: 150 }}
                className="rounded-[35px] absolute"
            />
            <Text
                style={{ height: hp(10) }}
                className="text-white font-semibold text-center tracking-wide"
            >
                {item.danceDecade}
            </Text>
        </TouchableOpacity>
    );
};

export default function DanceDecade() {
    const router = useRouter();
    const { data, isLoading } = UseGetAllDances();

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View className="flex-1 mx-4">
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: 'gray' }} className="font-semibold text-neutral-700">Dances</Text>
            <FlatList
                data={data} // Use the fetched data from UseGetAllDances hook
                numColumns={2}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: "space-evenly",
                    marginHorizontal: ["sm:10", "md:30"],
                    gap:"sm:10"
                }}
                renderItem={({ item }) => <DanceDecadeCard router={router} item={item} />}
            />
        </View>
    );
}
