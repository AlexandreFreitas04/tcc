import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Texto = (props) => {

  return (
    <Text style={[estilosBase.texto, props.style]}>
      {props.children}
    </Text>
  );
};

const estilosBase = StyleSheet.create({
  texto: {
    color: '#F0F0F0', 
    fontFamily: "Exo2-Bold" 
                           
  },
});

export default Texto;