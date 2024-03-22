import React, {View} from 'react-native';
import {Ref, forwardRef, useMemo} from 'react';

import style from './style';
import {StackProps} from './types';

const Horizontal = (
  {children, onLayout = () => undefined, ...styleProps}: StackProps,
  ref: Ref<View>,
) => {
  const styles = useMemo(() => {
    return style(styleProps);
  }, [styleProps]);

  return (
    <View ref={ref} onLayout={onLayout} style={styles.HStack}>
      {children}
    </View>
  );
};

export default forwardRef(Horizontal);
