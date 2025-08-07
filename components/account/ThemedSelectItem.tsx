import { Colors } from '@/constants';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const RegisteredNumbers = ({ values, disabled, onChoiceMade }: { values: string[], disabled: boolean, onChoiceMade: (data: string) => void }) => {
  const [value, setValue] = useState('');

  const makeChoice = (data: string) => {
    setValue(data);
    onChoiceMade(data);
  };

  return (
    <RadioButton.Group onValueChange={makeChoice} value={value}>
      {
        values.map((item) => {
          return (
            <RadioButton.Item
              key={item}
              label={item}
              value={item}
              color={Colors.mainAppColor}
              style={{ borderWidth: 1, borderColor: '#aaa', borderRadius: 3, marginVertical: 8 }}
              labelStyle={{ fontSize: 16.7, color: 'white' }}
              mode="android"
              position="trailing"
              disabled={disabled}
            />);
        })
      }
    </RadioButton.Group>
  );
};

export default RegisteredNumbers;