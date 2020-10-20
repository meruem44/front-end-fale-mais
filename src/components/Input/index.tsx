import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<PropsInput> = ({ name, icon: Icon, ...res }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
      <Container>
          {Icon && <Icon size={20} />}
          <input 
          ref={inputRef}
          name={name} 
          {...res} />
      </Container>
  );
}

export default Input;