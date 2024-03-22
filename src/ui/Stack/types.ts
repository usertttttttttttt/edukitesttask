import {ReactNode} from 'react';
import {ViewProps, ViewStyle} from 'react-native';

export type StackProps = {
  children: ReactNode;
  onLayout?: ViewProps['onLayout'];
} & ViewStyle;
