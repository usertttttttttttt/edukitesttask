import {View} from 'react-native';
import {Ref, forwardRef, useMemo} from 'react';

import style from './style';
import {StackProps} from './types';

const Vertical = (
  {children, onLayout = () => undefined, ...styleProps}: StackProps,
  ref?: Ref<View>,
) => {
  const styles = useMemo(() => {
    return style(styleProps);
  }, [styleProps]);

  return (
    <View onLayout={onLayout} ref={ref} style={styles.VStack}>
      {children}
    </View>
  );
};

export default forwardRef(Vertical);
