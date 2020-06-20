import React from 'react';
import { Checkbox } from '@material-ui/core';

const CheckBox = (props) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
       setChecked(!checked);
  };
  const {color, disabled, size } = props;
  
  return (
    <Checkbox
         checked={checked}
         onChange={handleChange}
         color ={color}
         disabled = {disabled}
         size = {size}
      />
  );
};

export  {CheckBox};
