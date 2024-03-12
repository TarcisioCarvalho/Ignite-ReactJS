
import React from 'react'
import { Image, Pressable, Text } from 'react-native';
import { styles } from './styles';

const Ingredient = () => {
  return (
    <Pressable style = {styles.container}>
      <Image source={require("@/assets/tomato.png")}/>
      <Text>Maça</Text>
    </Pressable>
  )
}

export default Ingredient;