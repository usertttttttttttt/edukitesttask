import {View as ReactView} from 'react-native';
import React, {Ref, forwardRef, useMemo} from 'react';

import style from './style';
import {ViewProps} from './types';

const View = (
  {children, onLayout = () => undefined, ...styleProps}: ViewProps,
  ref: Ref<ReactView>,
) => {
  const styles = useMemo(() => {
    return style(styleProps);
  }, [styleProps]);

  return (
    <ReactView ref={ref} onLayout={onLayout} style={styles.view}>
      {children}
    </ReactView>
  );
};

export default forwardRef(View);
