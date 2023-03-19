import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Alert } from "react-native";

import { colors } from "../../theme/colors";
import PlusSvg from '../../assets/plus.svg'

import { styles } from './styles'

type FormProps = {
  onAdd: (title: string) => void
}

export function Form({ onAdd }: FormProps) {
  const [title, setTitle] = useState<string>('')

  function handleAdd(){
    if(title.length < 3) {
      return Alert.alert('Título inválido', 'O título precisa ter no mínimo 3 letras para ser adicionado')
    }
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
