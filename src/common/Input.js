import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { containerStyle } = styles;
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;
  const labelStyle = props.labelStyle? props.labelStyle: styles.labelStyle ;
  const inputStyle = props.inputStyle? props.inputStyle: styles.inputStyle ;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 10,
    marginLeft: 30,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    borderColor : "blue",
    borderStyle : 'dotted', 
    borderWidth : 2
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export {Input};
