import { View } from "react-native";

import Logo from '../../assets/logo.svg'

import { styles } from './styles'

export function Header(){
  return (
    <>
      <View style={styles.header}>
        <Logo width={110.34} height={70} />
      </View>
    </>
  )
}
