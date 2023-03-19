import { View, TextInput, TouchableOpacity } from "react-native";

import { styles } from './styles'
import { colors } from "../../theme/colors";

import PlusSvg from '../../assets/plus.svg'

export function Form() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]} />
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <PlusSvg width={16} height={16}/>
        </TouchableOpacity>
    </View>
  )
}
