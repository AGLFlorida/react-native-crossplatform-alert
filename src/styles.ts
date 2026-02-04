import { StyleSheet } from 'react-native';
import type { AlertColors } from './AlertColors';

export const createAlertStyles = (colors: AlertColors) =>
  StyleSheet.create({
    alertBox: {
      alignItems: 'center',
      backgroundColor: colors.background,
      borderRadius: 13,
      paddingBottom: 10,
      paddingHorizontal: 20,
      paddingTop: 20,
      width: 270,
    },
    backdrop: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
      flex: 1,
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 12,
    },
    buttonBorder: {
      borderColor: colors.divider,
      borderRightWidth: StyleSheet.hairlineWidth,
    },
    buttonPressed: {
      backgroundColor: colors.highlight,
    },
    buttonRow: {
      alignSelf: 'stretch',
      borderColor: colors.divider,
      borderTopWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonText: {
      color: '#007AFF',
      fontSize: 17,
      fontWeight: '600',
    },
    cancelButton: {
      fontWeight: '500',
    },
    destructiveButton: {
      color: '#FF3B30',
    },
    message: {
      color: colors.message,
      fontSize: 13,
      marginBottom: 20,
      textAlign: 'center',
    },
    title: {
      color: colors.label,
      fontSize: 17,
      fontWeight: '600',
      marginBottom: 5,
      textAlign: 'center',
    },
  });
