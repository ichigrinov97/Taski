import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from '@/assets/images/avatar.png';
import Taski from '@/assets/images/taski'
import Serch from '@/assets/images/serch'
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Del from '@/assets/images/del'
import DoneImg from '@/assets/images/done';

function Search() {
    const [title,setTitle] = useState('')
    const [arr,setArr] = useState([])

    async function getting () {

        const getdat = JSON.parse(await AsyncStorage.getItem('ToDo'))||[]
        const filter = getdat.filter(el => el.title.startsWith(title)&& title.length !== 0)
        console.log(filter);
        
        setArr(filter)
    }


    useEffect(()=>{
        getting()
    },[title])


    return (
        <View style={{ backgroundColor: '#FFFF', flex: 1, alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, paddingBottom: 32, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <Taski />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon} />
                </View>
            </View>
            <TextInput onChangeText={(text)=>{
                setTitle(text)
                console.log(title)
            }} placeholder="Design projects" style={{
                width: 338, height: 48, backgroundColor: '#F5F7F9',
                fontWeight: 500,
                fontSize: 16,
                color: '#3F3D56',
                paddingLeft: 20,
                borderRadius: 12,
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: '#007FFF80',
                marginBottom: 126

            }} />

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
                                
            {/* <Serch></Serch>
            <Text style={{ 
            fontWeight: 500,
            fontSize: 16,
            textAlign: 'center',
            color:'#8D9CB8',
            paddingTop:26

        }}>No result found.</Text> */}

        </View >
    );
}

export default Search;



const style = StyleSheet.create({
    text1: { fontFamily: 'SpaceMono', fontSize: 16, fontWeight: 600, color: '#3F3D56' },
    text2: { fontFamily: 'SpaceMono', fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#3F3D56' },
    text3: { fontFamily: 'SpaceMono', fontSize: 16, fontWeight: 500, color: '#8D9CB8', marginBottom: 4 },
    button: { fontFamily: 'SpaceMono', fontSize: 18, fontWeight: 600, color: '#007FFF', borderRadius: 12, paddingRight: 16, paddingLeft: 16, backgroundColor: '#F5F7F9' }
})