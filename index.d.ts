declare module 'react-native-crossplatform-alert' {
  import type { FC } from 'react';

  export type AlertColors = {
    background: string;
    label: string;
    message: string;
    divider: string;
    highlight: string;
  };

  export type AlertButton = {
    text: string;
    onPress?: () => void;
    style?: 'cancel' | 'destructive' | 'default';
  };

  export type AndroidAlertOptions = {
    cancelable?: boolean;
  };

  export interface AndroidAlertProps {
    title: string;
    message: string;
    buttons?: AlertButton[];
    options?: AndroidAlertOptions;
    visible: boolean;
    onDismiss: () => void;
    colors?: AlertColors;
  }

  export const AndroidAlert: FC<AndroidAlertProps>;
  export const defaultAlertColorsLight: AlertColors;
  export const defaultAlertColorsDark: AlertColors;
}
