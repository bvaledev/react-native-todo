import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  form: {
    marginTop: -27,
    marginBottom: 32,
    flexDirection: 'row',
    gap: 8,
  },
  textInput: {
    flex: 1,
    flexGrow: 1,
    height: 54,
    backgroundColor: colors.gray[500],
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: colors.gray[100],
    fontFamily: fonts.inter[400]
  },
  button: {
    backgroundColor: colors.primary,
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
