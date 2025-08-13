import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from '@/assets/images/avatar.png';
import Taski from '@/assets/images/taski'
import { useEffect, useState } from "react";
import DoneImg from '@/assets/images/done';
import Del from '@/assets/images/del'
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Done() {

    const [arr,setArr] = useState([])
    

    async function get(){

        const mydata = JSON.parse(await AsyncStorage.getItem('ToDo'))||[]
        const filt = mydata.filter(el=> el.flag == true )
        setArr(filt)
    }

    useEffect(()=>{
        get()
    },[])

    return (
        <View style={{flex:1, backgroundColor:'#FFFF', alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <Taski />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon} />
                </View>
            </View>
            <View style={{ width: '100%',paddingBottom:32 }}>
                <View style={{flexDirection:'row', gap:60}}>
                    <Text style={style.text2}>Completed Tasks</Text>
                    <TouchableOpacity style={{color:'#FF5E5E',fontFamily: 'UrbanistBold',fontWeight: 600,fontSize: 18}}>Delete all</TouchableOpacity>
                </View>
            </View>
            <View style={{ gap: 16, width: '100%' }}>
                {arr.map(el =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#F5F7F9', borderRadius: 16, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                            <DoneImg></DoneImg>
                            <Text style={style.text1}>{el.title}</Text>
                        </View>
                        <Del></Del>
                    </View>)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    text1: { fontFamily: 'UrbanistBold', fontSize: 16, fontWeight: 600, color: '#8D9CB8' },
    text2: { fontFamily: 'UrbanistBold', fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#3F3D56' },
    text3: { fontFamily: 'UrbanistBold', fontSize: 16, fontWeight: 500, color: '#8D9CB8', marginBottom: 4 },
    button: { fontFamily: 'UrbanistBold', fontSize: 18, fontWeight: 600, color: '#007FFF', borderRadius: 12, paddingRight: 16, paddingLeft: 16, backgroundColor: '#F5F7F9' }
})