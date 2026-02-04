import React, { useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import { createAlertStyles } from './styles';
import { defaultAlertColorsLight, type AlertColors } from './AlertColors';

const isAndroid = Platform.OS === 'android';

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

const AndroidAlert = ({
  title,
  message,
  buttons = [{ text: 'OK' }],
  options = { cancelable: true },
  visible,
  onDismiss,
  colors = defaultAlertColorsLight,
}: AndroidAlertProps) => {
  const styles = useMemo(() => createAlertStyles(colors), [colors]);

  const handlePress = (btn: AlertButton) => {
    btn.onPress?.();
    onDismiss();
  };

  if (!isAndroid) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onDismiss}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          if (options.cancelable) onDismiss();
        }}
      >
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.alertBox}>
              {title ? <Text style={styles.title}>{title}</Text> : null}
              {message ? <Text style={styles.message}>{message}</Text> : null}
              <View style={styles.buttonRow}>
                {buttons.map((btn, idx) => (
                  <Pressable
                    key={idx}
                    onPress={() => handlePress(btn)}
                    style={({ pressed }) => [
                      styles.button,
                      idx < buttons.length - 1 && styles.buttonBorder,
                      pressed && styles.buttonPressed,
                    ]}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        btn.style === 'cancel' && styles.cancelButton,
                        btn.style === 'destructive' && styles.destructiveButton,
                      ]}
                    >
                      {btn.text}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AndroidAlert;
