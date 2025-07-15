import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, TextInputProps } from '@react-native-material/core';
import React from 'react';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTextInput({
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
      label="Search"
      variant="outlined"
      leading={() => (
        <MaterialIcons name="search" size={30} color={textColor} />
      )}
      color={textColor}
      placeholderTextColor={textColor}
      inputContainerStyle= {{
        backgroundColor,
        borderRadius: 8,
        borderColor: backgroundColor,
        borderWidth: 0,
        paddingHorizontal: 10,
      }}
      hasTVPreferredFocus={false}
      inputStyle= {[
        {
          backgroundColor,
          borderRadius: 8,
          borderColor: backgroundColor,
          color: "white"
        }
      ]}
      style={[{ backgroundColor, borderColor }]}
      {...rest}
    />
  );
}
