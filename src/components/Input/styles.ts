import { TextInput, TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled(TextInput)<TextInputProps>`
    width: 100%;
    border: 1px solid  ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    padding: 14px;

    ${({ multiline }) => multiline && css`
        height: 120px;
    `}


    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        line-height: ${theme.LINE_HEIGHT};
    `}

`;