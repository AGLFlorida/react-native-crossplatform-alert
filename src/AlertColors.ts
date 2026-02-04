export type AlertColors = {
  background: string;
  label: string;
  message: string;
  divider: string;
  highlight: string;
};

export const defaultAlertColorsLight: AlertColors = {
  background: '#EEEEEE',
  label: '#000000',
  message: '#3C3C43',
  divider: '#C6C6C8',
  highlight: '#EFEFF4',
};

export const defaultAlertColorsDark: AlertColors = {
  background: '#1C1C1E',
  label: '#FFFFFF',
  message: '#EBEBF5',
  divider: '#747476',
  highlight: '#2C2C2E',
};
