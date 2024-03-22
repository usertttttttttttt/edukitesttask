import {ReactNode} from 'react';
import {TextStyle} from 'react-native';

export enum TextType {
  HUGE = 'Huge',
  LABEL = 'Label',
  LARGE = 'Large',
  MEDIUM = 'Medium',
  REGULAR = 'Regular',
  SMALL = 'Small',
  TINY = 'Tiny',
  TITLE = 'Title',
}

export type TextProps = {
  children: ReactNode;
  color?: TextStyle['color'];
  fontSize?: TextStyle['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
};
