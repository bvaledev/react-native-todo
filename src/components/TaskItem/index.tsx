import React from 'react'
import { Text, TouchableOpacity, View } from "react-native";

import UncheckedSvg from '../../assets/check_unchecked.svg'
import CheckedSvg from '../../assets/check_checked.svg'
import TrashSvg from '../../assets/trash.svg'

import { styles } from './styles'
import { Todo } from '../../models/todo';

type Props = {
  todo: Todo
  onUpdate: (id: string) => void,
  onRemove: (id: string) => void,
}

export function TaskItem({ todo, onUpdate, onRemove }: Props) {
  const checkedTextStyle = { ...styles.checkboxText, ...(todo.isCompleted ? styles.checkboxTextChecked : {}) }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} activeOpacity={0.6} onPress={() => onUpdate(todo.id)} >
        {todo.isCompleted ? <CheckedSvg /> : <UncheckedSvg />}
        <Text style={checkedTextStyle}>{todo.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(todo.id)} >
        <TrashSvg />
      </TouchableOpacity>
    </View>
  )
}
