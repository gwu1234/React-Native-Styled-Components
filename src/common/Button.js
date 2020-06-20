import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const {onPress, buttonStyle, textStyle, children} = props;
  
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export {Button};
