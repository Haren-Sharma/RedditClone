import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Props = {}

const index = (props: Props) => {
  return (
    <View>
      <Link href="about">Click Me</Link>
    </View>
  )
}

export default index