import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import React from 'react'

const index = () => {
  return (
    <View>
      <Text className="text-3xl font-bold  text-center mt-10 ">mamshad</Text>
      <StatusBar style="auto"  />
      <Link href="/Profile" style={{color: 'blue'}}  >Profile</Link>
    </View>
  )
}

export default index

