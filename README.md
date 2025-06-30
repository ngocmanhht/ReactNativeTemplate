
#  ⚛️ React Native Template ⚛️ 

A React Native template with modern libraries for state management, navigation, API handling, and form validation.

# Introduction
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

---

## ✨ Libraries and Their Purposes

### ⚛️ Core
- **react** – Core React library.
- **react-native** – React Native framework for building native apps.

---

### 🧭 Navigation
- **@react-navigation/native** – Routing and navigation for React Native apps.
- **@react-navigation/stack** – Stack navigator for screen transitions.
- **@react-navigation/bottom-tabs** – Bottom tab navigation.
- **@react-native-screens** – Native screen management for performance.
- **@react-native-safe-area-context** – Handling safe area insets.
- **@react-native-masked-view/masked-view** – Masking views for transitions.

---

### 📡 Data Fetching
- **axios** – Promise-based HTTP client for making API requests.
- **@tanstack/react-query** – Powerful data fetching, caching, and state management.

---

### 🧠 State Management
- **mobx** – Simple and scalable state management.
- **mobx-react** – React bindings for MobX.

---

### ✅ Forms & Validation
- **react-hook-form** – Performant form state and validation management.
- **yup** – Schema-based validation.
- **@hookform/resolvers** – Connect Yup to react-hook-form.

---
### 🔑 Environment Variables
- **react-native-dotenv** - Load environment variables from `.env` files
### ⚙️ Utilities
- **@react-native-async-storage/async-storage** – Persistent key-value storage.

---

### 🛠 Development & Tooling
- **@babel/** – Babel presets and plugins for transpiling modern JavaScript.
- **@react-native-community/cli** – CLI tools for React Native.
- **eslint** – Code linting.
- **prettier** – Code formatting.
- **typescript** – Type-safe JavaScript.
- **react-native-dotenv** – Environment variable management.
- **jest** – JavaScript testing framework.
- **react-test-renderer** – Render React trees for testing.

---

## 🚀 Scripts

| Command                | Description                          |
|------------------------|--------------------------------------|
| `yarn android`      | Run the Android app                  |
| `yarn ios`          | Run the iOS app                      |
| `yarn start`        | Start Metro bundler                  |
| `npm run lint`         | Run ESLint for code linting          |
| `npm run test`         | Run Jest tests                       |

---

## 📚 Requirements
- Node.js >= 18
- npm or yarn
