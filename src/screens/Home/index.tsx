import { View } from "react-native";

import { useFonts, Inter_400Regular, Inter_700Bold, } from '@expo-google-fonts/inter';

import { styles } from './styles'
import { Header } from "../../components/Header";

import { Form } from "../../components/Form";
import { TasksStatus } from '../../components/TasksStatus'

export function Home() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Form />
        <TasksStatus />
      </View>
    </>
  )
}
