import React, {useCallback, useEffect, useState} from 'react';
import {InputProps} from './Input';
import {BasicInputProps} from './BasicInput';


interface TimeoutInputProps extends InputProps, BasicInputProps {
    Component: any;
    value: string;
    onChangeText: (value: string) => any
    onChangeTextLocal?: (value: string) => void
}

const TimeoutInput: React.FC<TimeoutInputProps> = ({value, onChangeText, onChangeTextLocal, Component, ...other}: TimeoutInputProps) => {
  const [localValue, setValue] = useState(value);
  useEffect(() => {
    if (onChangeTextLocal) {
      onChangeTextLocal(localValue);
    }
    const timer = setTimeout(triggerChange, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [localValue]);

  useEffect(() => setValue(value), [value]);

  const triggerChange = useCallback(() => {
    onChangeText(localValue);
  }, [localValue]);

  return (
    <Component
      {...other}
      value={localValue}
      onChangeText={setValue}
    />
  );
};

export default TimeoutInput;
