import React from 'react';
import { View } from 'react-native'


export default function Dot({ isLight, selected} : any) {
    let backgroundColor;
    let width;
    if (isLight) {
      backgroundColor = selected ? '#FFD152' : '#BECFD8';
      width = selected ? 20 : 10;

    } 
    return (
      <View 
        style={{
            width,
            height: 4,
            marginHorizontal: 3,
            borderRadius: 4,       
            backgroundColor,
        }}
      />
    );
    
}




