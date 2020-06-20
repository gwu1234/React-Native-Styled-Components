import React from 'react';
import { Badge } from '@material-ui/core';

const MyBadge = (props) => {
  const {badgeContent, color, anchorOrigin, variant, invisible, children} = props;
  
  return (
    <Badge
         badgeContent={badgeContent | 0} 
         color= {color? color : "primary" } 
         anchorOrigin = {anchorOrigin? anchorOrigin : {vertical:"top", horizontal: "right"} } 
         variant ={variant? variant : 'standard'}
         invisible ={invisible? invisible : false}
     >    
      {children}
    </Badge>
  );
};

export {MyBadge};
