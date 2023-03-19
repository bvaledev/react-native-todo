import React from 'react'
import { View, Text } from "react-native";

import { styles } from './styles'

type Props = {
  created: number,
  completed: number
}

export function TasksStatus({created, completed}: Props){
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.statusTextPrimary}>Criadas</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>{created}</Text>
        </View>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusTextSecondary}>Concluídas</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>{completed}</Text>
        </View>
      </View>
    </View>
  )
}
