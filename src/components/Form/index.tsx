import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from "react-native";

import { colors } from "../../theme/colors";
import PlusSvg from '../../assets/plus.svg'

import { styles } from './styles'

type FormProps = {
  onAdd: (title: string) => void
}

export function Form({ onAdd }: FormProps) {
  const [title, setTitle] = useState<string>('')

  function handleAdd(){
    onAdd(title)
    setTitle('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]}
        onChangeText={setTitle}
        value={title}/>
      <TouchableOpacity onPress={handleAdd} style={styles.button}>
        <PlusSvg width={16} height={16} />
      </TouchableOpacity>
    </View>
  )
}
