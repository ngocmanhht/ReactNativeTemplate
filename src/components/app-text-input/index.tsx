import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  I18nManager,
  Pressable,
  Platform,
  ViewStyle,
} from 'react-native';
import { AppText } from '../app-text';

type StatusType = 'default' | 'success' | 'warning' | 'error';

type AppTextInputProps = TextInputProps & {
  label?: string;
  error?: string;
  secure?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  status?: StatusType;
  containerStyle?: ViewStyle;
};

export const AppTextInput = ({
  label,
  error,
  secure = false,
  leftIcon,
  rightIcon,
  status = 'default',
  style,
  multiline,
  containerStyle,
  ...rest
}: AppTextInputProps) => {
  const [secureText, setSecureText] = useState(secure);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const borderColor = {
    default: '#ddd',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
  }[status || (error ? 'error' : 'default')];

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && <AppText style={styles.label}>{label}</AppText>}

      <View style={[styles.inputWrapper, { borderColor }]}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <TextInput
          style={[
            styles.input,
            style,
            { height: multiline ? height : undefined },
          ]}
          placeholderTextColor="#aaa"
          secureTextEntry={secureText}
          multiline={multiline}
          onContentSizeChange={e =>
            multiline && setHeight(e.nativeEvent.contentSize.height + 10)
          }
          textAlign={I18nManager.isRTL ? 'right' : 'left'}
          {...rest}
        />
        {secure && (
          <Pressable onPress={() => setSecureText(!secureText)}>
            <AppText>{secureText ? '👁️‍🗨️' : '👁️'}</AppText>
          </Pressable>
        )}
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>

      {!!error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    padding: 0,
  },
  icon: {
    marginHorizontal: 4,
  },
  errorText: {
    marginTop: 4,
    color: '#F44336',
    fontSize: 12,
  },
});
