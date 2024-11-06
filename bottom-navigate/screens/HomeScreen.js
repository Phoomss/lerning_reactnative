import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../constant/styles'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.continer}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}
