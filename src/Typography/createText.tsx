import React from 'react';
import TextComponent, {TextComponentProps} from './TextComponent';
import {TextStyle} from 'react-native';

const createText = (styles: TextStyle): any => (props: TextComponentProps) => (
  <TextComponent {...props} styles={styles} />
);

export default createText;
