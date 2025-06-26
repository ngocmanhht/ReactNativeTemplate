import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  View,
  I18nManager,
} from 'react-native';
import { AppText } from '../app-text';

type AppButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const AppButton = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[styles.button, disabled && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View
          style={[
            styles.content,
            { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' },
          ]}
        >
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <AppText style={[styles.text, textStyle]}>{title}</AppText>
          {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#999',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
