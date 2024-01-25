import { View, Text, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter, useLocalSearchParams} from 'expo-router'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo vector icons




export default function DanceList({ data}) {
    const router = useRouter();



    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => <DanceCard router={router} index={index} item={item}  />}
        />
    );
}

const DanceCard = ({ item, index, router}) => {

    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({ pathname: '/exerciseDetails', params: item })}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                {/* Replace 'imageSource' with the actual image source */}
                {/*<Image source={imageSource} style="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />*/}

                <View className="flex flex-col justify-between p-4 leading-normal">
                    <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                    </Text>
                    {/* Dummy subtext */}
                    <Text className="mb-3 font-normal text-gray-600 dark:text-gray-400">7 steps</Text>
                    {/* Add any other text or components you want here */}
                </View>
                <View>
                    {/* Play Icon Button */}
                    <TouchableOpacity className="bg-blue-500 p-2 rounded-full">
                        <FontAwesome name="play-circle" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
}


