import * as Index from './index';

describe('index', () => {
  it('exports AndroidAlert as default named export', () => {
    expect(Index).toHaveProperty('AndroidAlert');
    expect(typeof Index.AndroidAlert).toBe('function');
  });

  it('exports defaultAlertColorsLight and defaultAlertColorsDark', () => {
    expect(Index.defaultAlertColorsLight).toBeDefined();
    expect(Index.defaultAlertColorsDark).toBeDefined();
    expect(Index.defaultAlertColorsLight.background).toBeDefined();
    expect(Index.defaultAlertColorsDark.background).toBeDefined();
  });

  it('re-exports types via type-only surface (no runtime type export)', () => {
    expect(Index.AndroidAlert).toBeDefined();
  });
});
