import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  form: {
    marginTop: -27,
    marginBottom: 32,
    flexDirection: 'row',
    gap: 8,
  },
  textInput: {
    flexGrow: 1,
    height: 54,
    backgroundColor: colors.gray[500],
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: colors.gray[100]
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