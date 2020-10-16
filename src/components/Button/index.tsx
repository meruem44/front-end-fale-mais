import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<ButtonProps> = ({ children, ...res  }) => {
  return (
    <Container 
    type="button"
     {...res}>
        {children}
    </Container>
  );
}

export default Input;