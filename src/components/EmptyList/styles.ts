import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.gray[300],
    fontWeight: '400',
    fontFamily: fonts.inter[400]
  },
  textBold: {
    fontSize: 14,
    lineHeight: 24,
    color: colors.gray[300],
    fontWeight: '700',
    fontFamily: fonts.inter[700]
  },
  image: {
    marginBottom: 16
  }
})
