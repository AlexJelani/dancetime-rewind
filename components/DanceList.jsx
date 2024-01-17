import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { useRouter, useLocalSearchParams} from 'expo-router'
import { Image as ExpoImage } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {useRoute} from "@react-navigation/native";


export default function DanceList({ data }) {
    const router = useRouter();


    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => <DanceCard router={router} index={index} item={item}   />}
        />
    );
}

const DanceCard = ({ item, index, router}) => {


    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity onPress={() => router.push({ pathname: '/exerciseDetails', params: item })} style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <ExpoImage
                        // source={{uri:image.uri}}
                        source={require('../assets/images/danceCategory/90s.png')}
                        resizeMode={"cover"}
                        style={styles.image}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
                    </Text>
                    {/* Add any other text or components you want here */}
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 60,
        paddingTop: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    imageContainer: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 25,
    },
    image: {
        width: wp(30),
        height: wp(35),
        resizeMode:'contain',
        borderRadius: 25,

    },
    textContainer: {
        marginLeft: 10,
        flex: 1,
    },
    title: {
        fontSize: hp(1.7),
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
