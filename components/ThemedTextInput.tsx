import { Colors } from '@/constants';
import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput, TextInputProps } from '@react-native-material/core';
import React from 'react';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

function ThemedTextInput({
  lightColor,
  darkColor,
  style,
  ...rest
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: '#fff', dark: '#1c1c1e' },
    'background'
  );
  const textColor = useThemeColor(
    { light: Colors.mainAppColor, dark: Colors.mainAppColor },
    'text'
  );
  const borderColor = useThemeColor(
    { light: Colors.mainAppColor, dark: Colors.mainAppColor },
    'text'
  );

  return (
    <TextInput
      variant="filled"
      color={textColor}
      placeholderTextColor={textColor}
      inputContainerStyle={{
        backgroundColor,
      }}
      hasTVPreferredFocus={false}
      inputStyle={[
        {
          borderWidth: 0,
          paddingVertical: 5,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderColor: backgroundColor,
          color: textColor
        }
      ]}
      style={[{ borderColor }]}
      {...rest}
    />
  );
};

export default ThemedTextInput;
