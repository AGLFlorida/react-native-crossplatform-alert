# React Native Cross-platform Alert Modal

React Native component: use the native iOS `Alert` and a custom Modal-based alert on Android (since `Alert` on Android is limited and `Alert.prompt` is iOS-only).

## Installation

From GitHub:

```bash
npm install github:AGLFlorida/react-native-crossplatform-alert
```

Or add to `package.json`:

```json
"react-native-crossplatform-alert": "github:AGLFlorida/react-native-crossplatform-alert#v0.1.0"
```

Prefer a tag (e.g. `#v0.1.0`) or branch for reproducible installs.

**Bundler:** This package ships TypeScript source. If your app’s Metro (or other bundler) does not transpile `node_modules` by default, add this package to the list of modules to transpile (e.g. in Metro, use `resolver.unstable_enablePackageExports` and ensure the package is not excluded from transformation, or add it to `watchFolders` / transformer include if required by your setup).

## Usage

**On iOS:** use `Alert.alert()` from React Native as usual.

**On Android:** render `AndroidAlert` with local state and pass your theme colors (or use the built-in light defaults).

### Component-only (platform branch in your code)

```tsx
import { Platform } from 'react-native';
import { Alert } from 'react-native';
import { AndroidAlert, defaultAlertColorsLight } from 'react-native-crossplatform-alert';

function MyScreen() {
  const [showAlert, setShowAlert] = useState(false);

  const openDialog = () => {
    if (Platform.OS === 'android') {
      setShowAlert(true);
    } else {
      Alert.alert('Title', 'Message', [
        { text: 'OK', onPress: () => {} },
      ]);
    }
  };

  return (
    <>
      <Button onPress={openDialog} title="Show" />
      <AndroidAlert
        title="Title"
        message="Message"
        visible={showAlert}
        onDismiss={() => setShowAlert(false)}
        buttons={[{ text: 'OK', onPress: () => {} }]}
        colors={defaultAlertColorsLight}
      />
    </>
  );
}
```

### Theming

Pass a `colors` prop to match your app theme. If you omit it, the light palette is used.

```tsx
import { AndroidAlert, type AlertColors } from 'react-native-crossplatform-alert';

const myThemeColors: AlertColors = {
  background: '#1C1C1E',
  label: '#FFFFFF',
  message: '#EBEBF5',
  divider: '#747476',
  highlight: '#2C2C2E',
};

<AndroidAlert
  title="Title"
  message="Message"
  visible={visible}
  onDismiss={onDismiss}
  buttons={[{ text: 'OK' }]}
  colors={myThemeColors}
/>
```

The package also exports `defaultAlertColorsDark` for a dark appearance.

### Button styles

Buttons support `style: 'cancel' | 'destructive' | 'default'` (matching iOS semantics):

```tsx
buttons={[
  { text: 'Cancel', style: 'cancel', onPress: () => {} },
  { text: 'Delete', style: 'destructive', onPress: handleDelete },
]}
```

### Options

- `options.cancelable`: if `true` (default), tapping the backdrop calls `onDismiss`.

## API

- **AndroidAlert** – Modal alert; renders only on Android (returns `null` on iOS).
- **AlertColors** – Type for the `colors` prop.
- **defaultAlertColorsLight** / **defaultAlertColorsDark** – Built-in palettes.

## Development

- **Scripts:** `npm run lint` (ESLint), `npm run test` (Jest), `npm run test:coverage` (coverage), `npm run typecheck` (TypeScript `tsc --noEmit`).
- **CI:** GitHub Actions workflow `.github/workflows/ci.yml` runs on push/PR to `main` or `master`: **lint** → **test** → **typecheck** (each job depends on the previous).
- **Style:** See `STYLEGUIDE.md` for code and test conventions.
- **Dev dependencies:** Jest and ts-jest for unit tests; ESLint with TypeScript, React, React Hooks, and Jest plugins for linting; React and React Native as dev peers for tests and typecheck.

## License

MIT
