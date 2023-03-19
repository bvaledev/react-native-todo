import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from './styles'
import { Header } from "../../components/Header";

import { Form } from "../../components/Form";
import { TasksStatus } from '../../components/TasksStatus'

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Form/>
        <TasksStatus/>
      </View>
    </>
  )
}
