import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { theme } from '../../theme'
import { styles } from './styles'

interface Props extends TouchableOpacityProps {
    isLoading: boolean
}

export function Button({isLoading, ...rest} : Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? <ActivityIndicator color={theme.colors.text_on_brand_color} /> : <Text style={styles.title}>Send feedback</Text>}
    </TouchableOpacity>
  )
}
