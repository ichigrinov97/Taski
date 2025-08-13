
import { Tabs } from 'expo-router';
import 'react-native-reanimated';
import TodoTab from '@/assets/images/todoTab'
import Doneimg from '@/assets/images/doneimg'
import Searchimg from '@/assets/images/searchimg'
import Createimg from '@/assets/images/createimg'

export default function RootLayout() {
  

  return (
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false , tabBarIcon:()=><TodoTab></TodoTab>, tabBarLabel:'ToDo'}} />
        <Tabs.Screen name="Create" options={{ headerShown: false,tabBarIcon:()=><Createimg></Createimg> }} />
        <Tabs.Screen name="Search" options={{ headerShown: false,tabBarIcon:()=><Searchimg></Searchimg> }} />
        <Tabs.Screen name="Done" options={{ headerShown: false,tabBarIcon:()=><Doneimg></Doneimg>}} />
      </Tabs>
  );
}