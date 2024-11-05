import styled, { css } from 'styled-components';
import { IButtonStyled } from './types';


export const ButtonContainer = styled.button<IButtonStyled>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    ${({disabled}) => disabled !== false && css`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
        
        &:hover {
            opacity: .8;
        }
   `}
`;
