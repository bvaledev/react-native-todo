import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.gray[500],
    borderColor: colors.gray[400],
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16
  },
  checkbox: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: 'center',
    paddingRight: 4
  },
  checkboxText: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: 'flex-start',
    color: colors.gray[100],
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: fonts.inter[400],
  },
  checkboxTextChecked: {
    color: colors.gray[300],
    textDecorationLine: 'line-through'
  },
  removeButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray[400],
    borderRadius: 4
  }
})
