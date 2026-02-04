import {
  defaultAlertColorsLight,
  defaultAlertColorsDark,
  type AlertColors,
} from './AlertColors';

describe('AlertColors', () => {
  describe('defaultAlertColorsLight', () => {
    it('exposes all required AlertColors keys', () => {
      const keys: (keyof AlertColors)[] = [
        'background',
        'label',
        'message',
        'divider',
        'highlight',
      ];
      keys.forEach((key) => {
        expect(defaultAlertColorsLight).toHaveProperty(key);
        expect(typeof defaultAlertColorsLight[key]).toBe('string');
      });
    });

    it('uses light-theme appropriate hex colors', () => {
      expect(defaultAlertColorsLight.background).toBe('#EEEEEE');
      expect(defaultAlertColorsLight.label).toBe('#000000');
      expect(defaultAlertColorsLight.message).toBe('#3C3C43');
      expect(defaultAlertColorsLight.divider).toBe('#C6C6C8');
      expect(defaultAlertColorsLight.highlight).toBe('#EFEFF4');
    });
  });

  describe('defaultAlertColorsDark', () => {
    it('exposes all required AlertColors keys', () => {
      const keys: (keyof AlertColors)[] = [
        'background',
        'label',
        'message',
        'divider',
        'highlight',
      ];
      keys.forEach((key) => {
        expect(defaultAlertColorsDark).toHaveProperty(key);
        expect(typeof defaultAlertColorsDark[key]).toBe('string');
      });
    });

    it('uses dark-theme appropriate hex colors', () => {
      expect(defaultAlertColorsDark.background).toBe('#1C1C1E');
      expect(defaultAlertColorsDark.label).toBe('#FFFFFF');
      expect(defaultAlertColorsDark.message).toBe('#EBEBF5');
      expect(defaultAlertColorsDark.divider).toBe('#747476');
      expect(defaultAlertColorsDark.highlight).toBe('#2C2C2E');
    });
  });

  describe('AlertColors type', () => {
    it('accepts a valid custom AlertColors object', () => {
      const custom: AlertColors = {
        background: '#fff',
        label: '#000',
        message: '#333',
        divider: '#ccc',
        highlight: '#eee',
      };
      expect(custom.background).toBe('#fff');
      expect(custom.label).toBe('#000');
    });
  });
});
