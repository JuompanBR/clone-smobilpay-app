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
    { light: '#000', dark: '#fff' },
    'text'
  );
  const borderColor = useThemeColor(
    { light: '#ccc', dark: '#444' },
    'text'
  );

  return (
    <TextInput
      variant="outlined"
      color={textColor}
      placeholderTextColor={textColor}
      inputContainerStyle= {{
        backgroundColor,
        borderWidth: 0,
        borderRadius: 8,
        borderColor: backgroundColor,
        paddingHorizontal: 10,
      }}
      hasTVPreferredFocus={false}
      inputStyle= {[
        {
          borderWidth: 0,
          backgroundColor,
          borderRadius: 8,
          borderColor: backgroundColor,
          color: textColor
        }
      ]}
      style={[{ backgroundColor, borderColor }]}
      {...rest}
    />
  );
};

export default ThemedTextInput;
