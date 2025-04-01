import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

const TabIcon = ({focused, icon, title, color, size}: {
    focused: boolean;
    color: string;
    size: number;
    icon: any;
    title: string
})=>{
    <View>
        <Image source={}></Image>
    </View>
}

const TabsLayout = () => {
  return (
        <Tabs
            screenOptions={
                {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "white",
                        position: 'absolute',
                        borderTopColor: "#0061ff",
                        borderTopWidth: 1,
                        minHeight: 50
                    }
                }
            }
        >
            <Tabs.Screen
                name='profile'
                options={
                    {
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ()=>(
                            <View>
                                <Text>Home</Text>
                            </View>
                        )
                    }
                }
            />
        </Tabs>
  )
}

export default TabsLayout;