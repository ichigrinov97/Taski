import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from '@/assets/images/avatar.png';
import Taski from '@/assets/images/taski'
import { useEffect, useState, useCallback } from "react";
import Del from '@/assets/images/del'
import DoneImg from '@/assets/images/done';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'


export default function Main() {

    const [arr, setArr] = useState([])

    async function getData() {
        const data = await AsyncStorage.getItem('ToDo')
        if (data !== null) {
            const result = JSON.parse(data)
            setArr(result)
        }


    }


    useEffect(() => {
        getData()
            
    }, [])




    return (
        <View style={{ flex: 1, backgroundColor: '#FFFF', alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <Taski />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon} />
                </View>
            </View>
            <View style={{ width: '100%' }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={style.text2}>Welcome,<Text style={{ color: '#007FFF' }}>John</Text>.</Text>
                    <Text style={style.text3}>You’ve got {arr.length} tasks to do.</Text>
                </View>
            </View>
            <View style={{ gap: 16, width: '100%' }}>
                {arr.map(el =>
                    el.flag == false ? <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                            <TouchableOpacity onPress={async () => {
                                const flags = arr.map(elem => {
                                    if (elem == el) {
                                        if (elem.flag == true) {
                                            return { ...elem, flag: false }
                                        } else {
                                            return { ...elem, flag: true }
                                        }

                                    } else {
                                        return elem
                                    }
                                })
                                console.log(flags);

                                setArr(flags)
                                await AsyncStorage.setItem('ToDo', JSON.stringify(flags))

                            }}><View style={{ borderWidth: 2, borderColor: '#C6CFDC', width: 24, height: 24, borderRadius: 7 }}></View></TouchableOpacity>
                            <Text style={style.text1}>{el.title}</Text>
                        </View>
                        <TouchableOpacity>...</TouchableOpacity>
                    </View> :
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                                <TouchableOpacity onPress={async () => {
                                    const flags = arr.map(elem => {
                                        if (elem == el) {
                                            if (elem.flag == true) {
                                                return { ...elem, flag: false }
                                            } else {
                                                return { ...elem, flag: true }
                                            }

                                        } else {
                                            return elem
                                        }
                                    })
                                    console.log(flags);

                                    setArr(flags)
                                    await AsyncStorage.setItem('ToDo', JSON.stringify(flags))

                                }
                                }><DoneImg></DoneImg></TouchableOpacity>
                                <Text style={style.text1}>{el.title}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                const delta = arr.filter(element => {
                                    if (element !== el) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                })
                                setArr(delta)
                            }}><Del></Del></TouchableOpacity>
                        </View>)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    text1: { fontFamily: 'UrbanistBold', fontSize: 16, fontWeight: 600, color: '#3F3D56' },
    text2: { fontFamily: 'UrbanistBold', fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#3F3D56' },
    text3: { fontFamily: 'UrbanistBold', fontSize: 16, fontWeight: 500, color: '#8D9CB8', marginBottom: 4 },
    button: { fontFamily: 'UrbanistBold', fontSize: 18, fontWeight: 600, color: '#007FFF', borderRadius: 12, paddingRight: 16, paddingLeft: 16, backgroundColor: '#F5F7F9' }
})