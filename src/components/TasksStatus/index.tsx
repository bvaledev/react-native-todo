import { View, Text } from "react-native";

import { styles } from './styles'
export function TasksStatus(){
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.statusTextPrimary}>Criadas</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>0</Text>
        </View>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusTextSecondary}>Concluídas</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>0</Text>
        </View>
      </View>
    </View>
  )
}
