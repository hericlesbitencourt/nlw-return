import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Developed with ♥ by me together with Rocketseat</Text>
    </View>
  )
}