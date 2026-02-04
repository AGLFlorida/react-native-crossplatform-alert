import { createAlertStyles } from './styles';
import { defaultAlertColorsLight, defaultAlertColorsDark } from './AlertColors';

describe('createAlertStyles', () => {
  it('returns an object with expected style keys', () => {
    const styles = createAlertStyles(defaultAlertColorsLight);
    const expectedKeys = [
      'alertBox',
      'backdrop',
      'button',
      'buttonBorder',
      'buttonPressed',
      'buttonRow',
      'buttonText',
      'cancelButton',
      'destructiveButton',
      'message',
      'title',
    ] as const;
    expectedKeys.forEach((key) => {
      expect(styles).toHaveProperty(key);
      expect(styles[key]).toBeDefined();
    });
  });

  it('uses provided colors in alertBox and text styles', () => {
    const colors = {
      background: '#ABCDEF',
      label: '#111111',
      message: '#222222',
      divider: '#333333',
      highlight: '#444444',
    };
    const styles = createAlertStyles(colors);
    expect(styles.alertBox.backgroundColor).toBe('#ABCDEF');
    expect(styles.title.color).toBe('#111111');
    expect(styles.message.color).toBe('#222222');
    expect(styles.buttonBorder.borderColor).toBe('#333333');
    expect(styles.buttonPressed.backgroundColor).toBe('#444444');
  });

  it('produces different styles for light vs dark default colors', () => {
    const light = createAlertStyles(defaultAlertColorsLight);
    const dark = createAlertStyles(defaultAlertColorsDark);
    expect(light.alertBox.backgroundColor).not.toBe(dark.alertBox.backgroundColor);
    expect(light.title.color).not.toBe(dark.title.color);
  });

  it('keeps backdrop and buttonText color consistent regardless of theme', () => {
    const light = createAlertStyles(defaultAlertColorsLight);
    const dark = createAlertStyles(defaultAlertColorsDark);
    expect(light.backdrop.backgroundColor).toBe(dark.backdrop.backgroundColor);
    expect(light.buttonText.color).toBe(dark.buttonText.color);
  });
});
