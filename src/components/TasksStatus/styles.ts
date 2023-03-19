import { StyleSheet } from "react-native";
import { colors } from '../../theme/colors'
import { fonts } from "../../theme/fonts";

const statusTextBase: any = {
  fontSize: 14,
  lineHeight: 24,
  fontWeight: '700',
  fontFamily: fonts.inter[700]
}

export const styles = StyleSheet.create({
  container:{
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[400],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8
  },
  statusTextPrimary:{
    ...statusTextBase,
    color: colors.primary,
  },
  statusTextSecondary:{
    ...statusTextBase,
    color: colors.ascent,
  },
  statusBadge:{
    backgroundColor: colors.gray[400],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50
  },
  statusBadgeText:{
    color: colors.gray[200],
    fontSize: 12,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily: fonts.inter[700]
  },
})
