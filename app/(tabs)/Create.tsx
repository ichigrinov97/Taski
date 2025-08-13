
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from '@/assets/images/avatar.png';
import Taski from '@/assets/images/taski';
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Create() {

    const [title, setTitle] = useState('');

    const store = async () => {
        
        const arr =JSON.parse(await AsyncStorage.getItem('ToDo'))||[]
        arr.push({flag:false, title:title})
        await AsyncStorage.setItem('ToDo', JSON.stringify(arr))
    }
    
    

    return (
        <View style={{ backgroundColor: '#FFFF', flex: 1, alignItems: 'center', paddingTop: 38, paddingLeft: 26, paddingRight: 26, paddingBottom: 32, width: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <Taski />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                    <Text style={style.text1}>John</Text>
                    <Image source={Icon} />
                </View>
            </View >
            <View style={{ width: '100%' }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={style.text2}>Welcome,<Text style={{ color: '#007FFF' }}>John</Text>.</Text>
                    <Text style={style.text3}>Create tasks to achieve more.</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32, alignItems: 'center' }}>
                    <TextInput placeholder='Add a note...' onChangeText={(text) => setTitle(text)} style={{ fontFamily: 'UrbanistBold', fontSize: 14, fontWeight: 500, color: '#C6CFDC' }} />
                    <TouchableOpacity onPress={store}>
                        <Text style={style.button}>+ Create task</Text>
                    </TouchableOpacity>

                </View>
            </View >
        </View >
    );
}

export default Create;



const style = StyleSheet.create({
    text1: { fontFamily: 'UrbanistBold', fontSize: 16, fontWeight: 600, color: '#3F3D56' },
    text2: { fontFamily: 'UrbanistBold', fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#3F3D56' },
    text3: { fontFamily: 'UrbanistBold', fontSize: 16, fontWeight: 500, color: '#8D9CB8', marginBottom: 4 },
    button: { justifyContent: 'center', alignItems: 'center', paddingVertical: 15, fontSize: 18, fontWeight: 600, color: '#007FFF', borderRadius: 12, paddingRight: 16, paddingLeft: 16, backgroundColor: '#007FFF1A' }
})