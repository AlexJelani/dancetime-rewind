import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useLocalSearchParams, useRouter} from "expo-router";
import {Image as ExpoImage} from "expo-image/build/Image";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import AntiDesign from 'react-native-vector-icons/AntDesign'
import {ScrollView} from "react-native-virtualized-view";

export default function exerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
    console.log('got item', item);
    const {name} = item;
    return (
        <View className="flex flex-1">
            <View>
                <TouchableOpacity onPress={()=>router.back()}>
                    <ExpoImage
                        source={{ uri: item.gifUrl }}
                        contentFit='cover'
                        style={{width: wp(100), height: wp(100)}}
                        className="rounded-[40px]"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> router.back()}
                 className="mx-2 absolute rounded-full mt-10 right-0">
                    <AntiDesign name="closecircle" size={hp(4.5)} colors="#f43f5e"/>
                </TouchableOpacity>

                {/*details */}
                <ScrollView className="mx-4 space-y-2 mt-3">
                    <Text style={{fontSize:hp(3.5)}}
                            className='font-semibold text-neutral-800 tracking-wide'>
                        {name}
                    </Text>
                    <Text style={{fontSize:hp(2)}}
                          className='font-bold text-neutral-800 '>
                        Equipment {item?.equipment}
                    </Text>
                </ScrollView>
            </View>

        </View>

    );
}
// import React, { useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
//
// export default function ExerciseDetails() {
//     const item = useLocalSearchParams();
//     const router = useRouter();
//
//     const bottomsheetRef = React.useRef(null)
//     const snapPoints = ['40%'];
//
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={() => router.back()}>
//                 <Text>Go back</Text>
//             </TouchableOpacity>
//
//             {/* Use BottomSheet component */}
//             <BottomSheet ref={bottomsheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
//                 <BottomSheetView>
//                     <Text>Hello</Text>
//                 </BottomSheetView>
//             </BottomSheet>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'gray',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

