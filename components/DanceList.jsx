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

const DanceCard = ({ item, index, router }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({ pathname: '/exerciseDetails', params: item })}
                className="flex-row items-center justify-between p-4 border border-gray-500 rounded-lg mb-2"
            >
                <View className="flex-1">
                    <Text className="text-2xl font-bold mb-2">
                        {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                    </Text>

                    <View className="flex-row items-center">
                        <View className="rounded-full bg-blue-500 p-2 mr-2">
                            <Text className="text-white">7 steps</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity  onPress={() => router.push({ pathname: '/exerciseDetails', params: item })} className="bg-blue-500 p-2 rounded-full">
                    <FontAwesome name="play-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </TouchableOpacity>
        </Animated.View>
    );
};


