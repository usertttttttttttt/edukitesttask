import {ReactNode} from 'react';
import {ViewProps as ReactViewProps, ViewStyle} from 'react-native';

export type ViewProps = {
  children?: ReactNode;
  onLayout?: ReactViewProps['onLayout'];
} & ViewStyle;
