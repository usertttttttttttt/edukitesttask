import {FC, useState} from 'react';
import {TextInputProps, TextInput as TextInputRN} from 'react-native';

import Stack from '../Stack';

import style from './style';

type Props = {
  isArea?: boolean;
  isPassword?: boolean;
  onChange?: (newText: string) => void;
  placeholder: string;
  type?: TextInputProps['keyboardType'];
  value?: string;
};

const TextField: FC<Props> = ({
  onChange,
  placeholder,
  type = 'default',
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Stack.Horizontal
      width={'100%'}
      borderWidth={1}
      borderRadius={4}
      backgroundColor={'#fff'}
      borderColor={isFocused ? '#000' : '#ccc'}
      gap={3}
      alignItems={'center'}>
      <TextInputRN
        {...(onChange && {onChangeText: onChange})}
        value={value || ''}
        keyboardType={type}
        focusable
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        textContentType={'oneTimeCode'}
        placeholderTextColor={isFocused ? '#000' : '#ccc'}
        style={style.input}
      />
    </Stack.Horizontal>
  );
};

export default TextField;
