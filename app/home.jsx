import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import DanceDecade from '../components/DanceDecade';

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style="dark" />

            {/* punchilne and avatar */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">

                    <Text
                        style={{fontSize: hp(4.5)}}
                        className="font-bold tracking-wider text-rose-500"
                    >
                        <Text
                            style={{fontSize: hp(4.5)}}
                            className="font-bold tracking-wider text-neutral-700"
                        >
                            READY TO
                        </Text> DANCE
                    </Text>
                </View>

            </View>

            {/* image slider */}
            <View>
                <ImageSlider />
            </View>

            {/* body parts list */}
            <View className="flex-1">
                <DanceDecade />
            </View>


        </SafeAreaView>
    )
}
