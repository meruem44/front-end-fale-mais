import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
};

const Input: React.FC<PropsInput> = ({ name, icon: Icon, ...res }) => {
  return (
      <Container>
          {Icon && <Icon size={20} />}
          <input 
          name={name} 
          {...res} />
      </Container>
  );
}

export default Input;