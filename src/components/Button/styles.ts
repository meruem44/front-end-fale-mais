import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
        background-color: #923537;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        width: 80%;
        height: 56px;
        transition: background 0.3s;
        color: #fff;
        margin-top: 16px;
        font-size: 20px;
        font-weight: bold;

        &:hover {
          background-color: ${shade(0.25, '#923537')};
        }
`;
