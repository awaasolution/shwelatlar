import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import icons from '@/constants/icons';


interface TabIconProps{
    focused: boolean;
    icon: any;
    title: string;
}

const TabIcon = ({focused, icon, title}: TabIconProps)=>(
    <View className='flex-1 flex-col items-center gap-1'>
        <Image 
            source={icon}
            className='size-7'
            style={{ tintColor: focused ? "#0061FF" : "#666876" }} 
            />
        <Text className='text-xs text-center w-full'>{title}</Text>
        
</View>
)


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
                name='home'
                options={
                    {
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({focused})=>(
                        <TabIcon focused={focused} icon={icons.home} title='HomeSweet'/>
                        )
                    }
                }
            />

            <Tabs.Screen
                name='ticket'
                options={
                    {
                        title: 'Ticket',
                        headerShown: false,
                        tabBarIcon: ({focused})=>(
                            <TabIcon focused={focused} icon={icons.search} title="Ticket"/>
                        )
                    }
                }
            />

            <Tabs.Screen
                name="setting"
                options={
                    {
                        title: "Deposit",
                        headerShown: false,
                        tabBarIcon: ({focused})=>(
                            <TabIcon focused={focused} icon={icons.person} title="Withdrawl"/>
                            )
                        }
                    }
            />



            <Tabs.Screen
                name="deposit"
                options={
                    {
                        title: "Deposit",
                        headerShown: false,
                        tabBarIcon: ({focused})=>(
                            <TabIcon focused={focused} icon={icons.wallet} title="Withdrawl"/>
                            )
                        }
                    }
            />

            <Tabs.Screen
                name="history"
                options={
                    {
                        title: "History",
                        headerShown: false,
                        tabBarIcon: ({focused})=>(
                            <TabIcon focused={focused} icon={icons.bell} title="History"/>
                        )
                    }
                }
            />
        </Tabs>
  )
}

export default TabsLayout;